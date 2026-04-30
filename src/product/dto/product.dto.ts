import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength } from "class-validator";

export class ProductDto{

    @IsNumber()
    @ApiProperty({description: 'the unique identifier of the product', example:1})
    id!: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    @ApiProperty({description: 'the name of the product', example:'Product Name'})
    name!: string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    @ApiProperty({description: 'the description of the product', example:'Product Description'})
    description!: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @ApiProperty({description: 'the price of the product', example:100})
    price!: number;
    
    @IsBoolean()
    @ApiProperty({description: 'whether the product is discounted', example:false})
    isDiscounted!: boolean;
}