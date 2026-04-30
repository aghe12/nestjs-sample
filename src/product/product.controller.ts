import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBadGatewayResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiCreatedResponse({description: 'Product created successfully', type:ProductDto})
  @ApiBadGatewayResponse({description: 'Bad input data'})
  create(@Body() createProductDto: CreateProductDto) {   // use the body part of the http request and use it for creating a new product
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiCreatedResponse({description: 'Products found successfully',type:[ProductDto]})
  findAll():ProductDto[] {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({description: 'Product found successfully',type:ProductDto})
  findOne(@Param('id') id: string) { //param: extract the id from the url
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({description: 'Product updated successfully',type:ProductDto})
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) { 
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({description: 'Product deleted successfully',type:ProductDto})
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
