
export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    isDiscounted?: boolean;
}

export class Product implements IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    isDiscounted?: boolean;

    constructor(product: IProduct) {         
            this.id = product.id;
            this.name = product.name;
            this.description = product.description;
            this.price = product.price;
            this.isDiscounted = product.isDiscounted;
    }
}

export const ProductDB: Array<Product> = [
    {id: 1, name: 'Product 1', description: "Description 1", price: 100, isDiscounted: false},
    {id: 2, name: 'Product 2', description: "Description 2", price: 100, isDiscounted: false}
]


