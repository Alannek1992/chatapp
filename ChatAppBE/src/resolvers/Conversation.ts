import { ConversationResolvers } from "../generated/server/types";

export const Conversation: ConversationResolvers = {
  participants(parent, args, { prisma, request, userId }, info) {
    return prisma.conversation({ id: parent.id }).participants();
  },
  messages(parent, args, { prisma, request, userId }, info) {
    return prisma.conversation({ id: parent.id }).messages();
  },
};
