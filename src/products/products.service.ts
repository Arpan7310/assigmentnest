import { HttpException, Inject, Injectable } from '@nestjs/common';
import * as schema from '../../db/schema';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { product } from '../../db/schema'; // Import your Product entity
import { eq } from 'drizzle-orm';


type Product = typeof product.$inferInsert;
@Injectable()
export class ProductService{
  constructor(
    @Inject('DB_DEV') private drizzleDev: NodePgDatabase<typeof schema>,
  ) {}

  async getAllProducts() {
    const products = await this.drizzleDev.query.product.findMany();
    return { products };
  }

  async getProductById(id: number) {
    return this.drizzleDev.query.product.findFirst({   where: (posts, { eq }) => (eq(posts.id, id)), });

  }

  async addProduct(productData:  Product) {
    try {
    const newProduct = await this.drizzleDev.insert(product).values(productData)
    return { product: newProduct };
    }
    catch(e:any){
      throw new HttpException("error",e.toString())
    }
  }

  async updateProduct(id: number, productData: Partial<Product>) {
    
    try{
    const updatedProduct = await this.drizzleDev.update(product).set({title:productData.title,desc:productData.desc,price:productData.price})
     .where(eq(product.id, id))
    
    return { product: updatedProduct };
    }
    catch(e:any){
      throw new HttpException("error",e.toString())
    }
 
  }

  async deleteProduct(id: number) {
    try{
    const deletedProduct = await this.drizzleDev.delete(product).where(eq(product.id,id))
    return { product: deletedProduct };
    }
    catch(e:any){
      throw new HttpException("error",e.toString())
    }
  }
}
