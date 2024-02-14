CREATE SCHEMA "assigment";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"desc" text,
	"price" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product2" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"desc" text,
	"price" numeric
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "title_idx" ON "product" ("title");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "title2_idx" ON "product2" ("title");