import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsBoolean, IsString, IsNotEmpty, Min, Max } from 'class-validator';

export class UserDto{
    @ApiProperty({description: 'The unique identifier of the user', example: 1})
    @IsNumber()
    id!: number;

    @ApiProperty({description: 'The name of the user', example: 'John Doe'})
    @IsNotEmpty()
    @IsString()
    name!: string;

    @ApiProperty({description: 'The email of the user', example: 'john@example.com'})
    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @ApiProperty({description: 'The age of the user', example: 25})
    @IsNumber()
    @Min(0)
    @Max(120)
    age!: number;

    @ApiProperty({description: 'Whether the user is active', example: true})
    @IsBoolean()
    isActive!: boolean;
}
