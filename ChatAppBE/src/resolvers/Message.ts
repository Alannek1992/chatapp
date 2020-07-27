import { MessageResolvers } from "../generated/server/types";

export const Message: MessageResolvers = {
  user(parent, args, { prisma }, info) {
    return prisma.message({ id: parent.id }).sender();
  },
  conversation(parent, args, { prisma }, info) {
    return prisma.message({ id: parent.id }).conversation();
  },
};
