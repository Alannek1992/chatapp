import { GraphQLServer } from "graphql-yoga";

import { prisma } from "./generated/prisma-client";
import { resolvers } from "./resolvers/index";
import { permissions } from "./middleware/permissions";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request) {
    return {
      prisma,
      request,
    };
  },
  middlewares: [permissions],
});

export default server;
