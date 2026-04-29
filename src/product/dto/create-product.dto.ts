import { OmitType } from '@nestjs/mapped-types';
import { ProductDto } from './product.dto';
import { IsString, IsNumber, Min, MaxLength, MinLength } from 'class-validator';

export class CreateProductDto extends OmitType(ProductDto, ['id', 'isDiscounted'] as const) {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name!: string;

  @IsString()
  @MaxLength(500)
  description!: string;

  @IsNumber()
  @Min(0)
  price!: number;
}
