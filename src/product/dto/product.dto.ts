import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class ProductDto{
    id!: number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    name!: string;
    
    @IsNotEmpty()
    @IsString()
    description!: string;
    
    @IsNotEmpty()
    @IsNumber()
    price!: number;
    
    @IsNotEmpty()
    @IsBoolean()
    isDiscounted!: boolean;
}