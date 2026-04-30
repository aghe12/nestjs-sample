import { 
  ValidatorConstraint, 
  ValidatorConstraintInterface, 
  ValidationArguments 
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'isValidAge', async: false })
export class IsValidAgeConstraint implements ValidatorConstraintInterface {
  validate(age: number, args: ValidationArguments) {
    // Age must be between 13 and 120 years
    const minAge = 13;
    const maxAge = 120;
    
    return age >= minAge && age <= maxAge;
  }

  defaultMessage(args: ValidationArguments) {
    return `Age must be between 13 and 120 years`;
  }
}
