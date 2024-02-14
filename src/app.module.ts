import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as schema from '../db/schema';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}