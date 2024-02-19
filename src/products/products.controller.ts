import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    const product=await this.productService.getProductById(Number(id));
   
    if(!product){
      throw new HttpException('product not found',HttpStatus.NOT_FOUND)
    }
    
    return product

  }

  @Post()
  async addProduct(@Body() productData: any) {
    try{
    const addedProduct=await this.productService.addProduct(productData);
    return {message:"Product Created successfully",addedProduct}
    }
    catch(e:any){
      throw new HttpException("error",e.toString())
    }

  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() productData: any) {
    try {
    const updatedProduct=await this.productService.updateProduct(Number(id), productData);
    return {message:"Product updated successfully",updatedProduct}
    }
    catch(e:any){
      throw new HttpException(e.toString(),HttpStatus.BAD_REQUEST)
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    try {
    const deletedProduct=await this.productService.deleteProduct(Number(id));
    return {message:"Product deleted successfully",deletedProduct}
    }
    catch(e:any){
      throw new HttpException(e.toString(),HttpStatus.BAD_REQUEST)
    }
  }
}

