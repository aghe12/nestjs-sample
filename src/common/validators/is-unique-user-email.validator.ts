import { 
  ValidatorConstraint, 
  ValidatorConstraintInterface, 
  ValidationArguments 
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserDB } from '../../user/entities/user.entity';

@Injectable()
@ValidatorConstraint({ name: 'isUniqueUserEmail', async: false })
export class IsUniqueUserEmailConstraint implements ValidatorConstraintInterface {
  validate(email: string, args: ValidationArguments) {
    // Check if email already exists
    const existingUser = UserDB.find(user => 
      user.email.toLowerCase() === email.toLowerCase()
    );
    
    // For update operations, we need to exclude the current user
    const currentUserId = args.object['id'];
    if (currentUserId && existingUser) {
      return existingUser.id === currentUserId;
    }
    
    return !existingUser;
  }

  defaultMessage(args: ValidationArguments) {
    return `Email "${args.value}" is already registered`;
  }
}
