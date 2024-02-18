import {defineConfig}  from 'drizzle-kit'


export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver:"pg",
  dbCredentials:{
    connectionString:'postgres://postgres:postgres@127.0.0.1:5432/assignment'
  }
  
}) 