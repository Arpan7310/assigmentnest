import { serial, text, pgTable, pgSchema,varchar,uniqueIndex ,numeric} from "drizzle-orm/pg-core";

export const mySchema = pgSchema("assigment")

export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    desc: text('desc'),
    price: numeric('price'),
  }, (product) => {
    return {
      titleIndex: uniqueIndex('title_idx').on(product.title),
    }
  });

  export const product2 = pgTable('product2', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    desc: text('desc'),
    price: numeric('price'),
  }, (product) => {
    return {
      titleIndex: uniqueIndex('title2_idx').on(product.title),
    }
  });
  