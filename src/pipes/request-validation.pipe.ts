import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { ValidationError } from 'class-validator/types/validation/ValidationError';

interface CollectErrorResItem {
  field: string;
  value: any;
  msgList: Array<{
    validatorName: string;
    errorMessage: string;
  }>;
}

@Injectable()
export class RequestValidationPipe implements PipeTransform {
  async transform(value: any, argumentMetadata: ArgumentMetadata) {
    const metaType = argumentMetadata.metatype;

    if (!metaType || !this.toValidate(metaType)) {
      return value;
    }

    const object = plainToInstance(metaType, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const errorList = this.collectErrorList(errors);
      const errorMsgList = this.processErrorList(errorList);
      throw new BadRequestException({
        type: 'BadRequestException',
        errorMsgList,
      });
    }
    return value;
  }

  private toValidate(metaType: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metaType);
  }

  private collectErrorList(
    errors: Array<ValidationError>,
  ): Array<CollectErrorResItem> {
    return errors.map((errorItem) => {
      const result: any = {
        field: errorItem.property,
        value: errorItem.value,
        msgList: [],
      };
      const constraints = errorItem.constraints;
      Object.keys(constraints).forEach((key) => {
        result.msgList.push({
          validatorName: key,
          errorMessage: constraints[key],
        });
      });
      return result;
    });
  }

  private processErrorList(errorList: Array<CollectErrorResItem>) {
    const msgArr: Array<string> = [];
    errorList.forEach((errorItem) => {
      const msgList = errorItem.msgList || [];
      msgList.forEach((msgItem) => {
        if (msgItem.errorMessage) {
          msgArr.push(msgItem.errorMessage);
        }
      });
    });
    return msgArr;
  }
}
