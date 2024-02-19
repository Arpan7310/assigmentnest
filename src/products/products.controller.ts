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
    const product=this.productService.getProductById(Number(id));
    return product
  }

  @Post()
  async addProduct(@Body() productData: any) {
    return this.productService.addProduct(productData);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() productData: any) {
    return this.productService.updateProduct(Number(id), productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.productService.deleteProduct(Number(id));
  }
}
