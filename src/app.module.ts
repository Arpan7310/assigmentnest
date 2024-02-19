import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as schema from '../db/schema';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
   ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}