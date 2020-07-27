import { UserResolvers } from "../generated/server/types";

export const User: UserResolvers = {
  messages(parent, args, { prisma }, info) {
    return prisma.user({ id: parent.id }).messages();
  },
  participants(parent, args, { prisma }, info) {
    return prisma.user({ id: parent.id }).participants();
  },
};
