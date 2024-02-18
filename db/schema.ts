import { serial, text, pgTable, pgSchema,varchar,uniqueIndex ,numeric} from "drizzle-orm/pg-core";

export const mySchema = pgSchema("assigment")

export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    desc: text('desc'),
    price: numeric('price'),
  }, (product) => {
    return {
      
    }
  });

  export const product2 = pgTable('product2', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    desc: text('desc'),
    price: numeric('price'),
  }, (product) => {
    return {
     
    }
  });
  