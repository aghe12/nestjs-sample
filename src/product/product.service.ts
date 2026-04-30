import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDB } from './entities/product.entity';

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto): ProductDto {
    const maxId = Math.max(...ProductDB.map(p => p.id));
    const newProduct: ProductDto = {
      id: maxId + 1,
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      isDiscounted: false
    };

    ProductDB.push(newProduct);
    return newProduct;
  } 

  findAll(): ProductDto[] {
    return ProductDB;
  }

  findOne(id: number): ProductDto | undefined {
    return ProductDB.find(p => p.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto): ProductDto | undefined {
    const product=ProductDB.find(p=>p.id===id);
    if(!product){
      return undefined;
    }
    Object.assign(product,updateProductDto)
    return product;
  }

  remove(id: number): ProductDto | undefined {
    const product=ProductDB.find(p=>p.id===id);
    if(!product){
      return undefined;
    }
    return ProductDB.splice(ProductDB.indexOf(product),1)[0];
  }
}
