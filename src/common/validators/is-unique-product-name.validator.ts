import { 
  ValidatorConstraint, 
  ValidatorConstraintInterface, 
  ValidationArguments 
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { ProductDB } from '../../product/entities/product.entity';

@Injectable()
@ValidatorConstraint({ name: 'isUniqueProductName', async: false })
export class IsUniqueProductNameConstraint implements ValidatorConstraintInterface {
  validate(productName: string, args: ValidationArguments) {
    // Check if product name already exists
    const existingProduct = ProductDB.find(product => 
      product.name.toLowerCase() === productName.toLowerCase()
    );
    
    // For update operations, we need to exclude the current product
    const currentProductId = args.object['id'];
    if (currentProductId && existingProduct) {
      return existingProduct.id === currentProductId;
    }
    
    return !existingProduct;
  }

  defaultMessage(args: ValidationArguments) {
    return `Product name "${args.value}" already exists`;
  }
}
