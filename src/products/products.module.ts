import { Module } from '@nestjs/common';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import * as schema from '../../db/schema'
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
@Module({

 imports: [
            // Method #1: Pass options object
            DrizzlePGModule.register({
              tag: 'DB_DEV',
              pg: {
                connection: 'client',
                config: {
                  connectionString: 'postgres://postgres:postgres@127.0.0.1:5432/assignment',
                },
              },
              config: { schema: { ...schema } },
            }),
        
          
         
        
          
          ],
    
    controllers:[ProductsController],
    providers:[ProductService],
})
export class ProductsModule {

    
}
