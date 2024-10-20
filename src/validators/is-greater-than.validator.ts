import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

/*
 * IsGreaterThan
 *  property 的值是目标比较值，就是要实际值大于 property 的值
 * */
function IsGreaterThanValidator(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return value > relatedValue;
        },
      },
    });
  };
}

export default IsGreaterThanValidator;
