/*
Initialize a Prisma client,
which makes it possible to interact with the database.

This is a hack
made necessary by the fact that Next.js has «hot reloading».
This hack serves to
prevent that «hot reloading» from initializing the `PrismaClient` over and over.

*/
import { PrismaClient } from "../app/generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient({});

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
