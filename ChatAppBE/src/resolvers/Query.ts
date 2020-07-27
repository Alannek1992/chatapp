import { QueryResolvers, User, Conversation } from "../generated/server/types";

export const Query: QueryResolvers = {
  async me(parent, args, { prisma, userId }, info) {
    const user = await prisma.user({ id: userId });

    if (!user) {
      throw new Error("User not found")!;
    }

    return { ...user, participants: [], messages: [] };
  },
  async getConversation(parent, { conversationId }, { prisma, userId }, info) {
    // This is kinda dirty, but working... we need to force, that user can fetch only converssations where he is participating
    const [conversation] = await prisma.conversations({
      where: {
        id: conversationId,
        participants_some: {
          user: {
            id: userId,
          },
        },
      },
    });

    return {
      ...conversation,
      participants: [],
      messages: [],
    };
  },

  async getConversations(parent, args, { prisma, userId }, info) {
    const conversations = await prisma.conversations({
      where: {
        participants_some: {
          user: {
            id: userId,
          },
        },
      },
    });

    return conversations.map((conversation) => ({
      ...conversation,
      participants: [],
      messages: [],
    }));
  },
  async getMessages(parent, { conversationId }, { prisma, userId }, info) {
    const messages = await prisma.messages({
      where: {
        conversation: {
          id: conversationId,
          participants_some: {
            user: {
              id: userId,
            },
          },
        },
      },
    });

    return messages.map((message) => ({
      ...message,
      conversation: <Conversation>{},
      user: <User>{},
    }));
  },
};
