import { Prisma } from "./generated/prisma-client";
import { ContextParameters } from "graphql-yoga/dist/types";

export interface MyContext {
  prisma: Prisma;
  request: ContextParameters;
  userId: string;
}
