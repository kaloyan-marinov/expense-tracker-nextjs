/*
Initialize a Prisma client,
which makes it possible to interact with the database.

This is a hack
made necessary by the fact that Next.js has «hot reloading».
This hack serves to
prevent that «hot reloading» from initializing the `PrismaClient` over and over.

*/
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismaClient = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
export const db = globalThis.prisma || prismaClient;

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
