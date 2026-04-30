import { 
  ValidatorConstraint, 
  ValidatorConstraintInterface, 
  ValidationArguments 
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'isValidPrice', async: false })
export class IsValidPriceConstraint implements ValidatorConstraintInterface {
  validate(price: number, args: ValidationArguments) {
    // Price must be between 0.01 and 99999.99
    const minPrice = 0.01;
    const maxPrice = 99999.99;
    
    return price >= minPrice && price <= maxPrice;
  }

  defaultMessage(args: ValidationArguments) {
    return `Price must be between $0.01 and $99,999.99`;
  }
}
