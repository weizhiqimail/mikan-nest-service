import { registerDecorator, ValidationOptions } from 'class-validator';

import { isStandardDate } from '@/helper/date';

function IsStandardDateCustom(validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      async: false,
      validator: {
        validate(value: any) {
          return isStandardDate(value);
        },
        defaultMessage(): string {
          return `${propertyName} 日期格式错误`;
        },
      },
    });
  };
}

export default IsStandardDateCustom;
