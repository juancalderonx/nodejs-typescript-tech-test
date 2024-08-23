import { v4 as uuid } from 'uuid';

interface ProductPrimitive {
  id: string;
  name: string;
  amount: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Product {
  constructor(private attributes: ProductPrimitive) {}

  static create(createProduct: {
    name: string;
    amount: number;
    userId: string;
  }): Product {
    return new Product({
      id: uuid(),
      ...createProduct,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  toValue() {
    return {
      id: this.attributes.id,
      name: this.attributes.name,
      amount: this.attributes.amount,
      userId: this.attributes.userId,
      createdAt: this.attributes.createdAt,
      updatedAt: this.attributes.updatedAt,
    };
  }
}
