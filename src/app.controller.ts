import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllProducts() {
    return this.appService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return this.appService.getProductById(Number(id));
  }

  @Post()
  async addProduct(@Body() productData: any) {
    return this.appService.addProduct(productData);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() productData: any) {
    return this.appService.updateProduct(Number(id), productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number) {
    return this.appService.deleteProduct(Number(id));
  }
}
