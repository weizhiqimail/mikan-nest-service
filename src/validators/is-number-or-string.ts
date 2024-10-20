import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

import { isValidNumber } from '@/helper/common';

/**
 * 判断数字是否为字符串数字
 * @param validationOptions{ValidationOptions}
 */
function IsNumberOrString(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return isValidNumber(value);
        },
      },
    });
  };
}

export default IsNumberOrString;
