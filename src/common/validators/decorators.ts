import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUniqueProductNameConstraint } from './is-unique-product-name.validator';
import { IsUniqueUserEmailConstraint } from './is-unique-user-email.validator';
import { IsValidPriceConstraint } from './is-valid-price.validator';
import { IsValidAgeConstraint } from './is-valid-age.validator';

export function IsUniqueProductName(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueProductNameConstraint,
    });
  };
}

export function IsUniqueUserEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueUserEmailConstraint,
    });
  };
}

export function IsValidPrice(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidPriceConstraint,
    });
  };
}

export function IsValidAge(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidAgeConstraint,
    });
  };
}
