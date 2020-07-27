import {
  MutationResolvers,
  User,
  Conversation,
} from "../generated/server/types";
import { hashPwd, validatePwd } from "../utils/security";
import { generateToken } from "../utils/security";

export const Mutation: MutationResolvers = {
  async createUser(parent, { data }, { prisma }, info) {
    const hashedPwd = await hashPwd(data.password);

    const user = await prisma.createUser({ ...data, password: hashedPwd });
    return {
      user: { ...user, messages: [], participants: [] },
      token: generateToken(user.id),
    };
  },
  async login(parent, { data }, { prisma }, info) {
    const user = await prisma.user({ nickname: data.nickname });

    if (!user) {
      throw new Error("User not found!");
    }

    if (!(await validatePwd(data.password, user.password))) {
      throw new Error("Invalid Password!");
    }

    return {
      user: { ...user, messages: [], participants: [] },
      token: generateToken(user.id),
    };
  },
  async deleteUser(parent, args, { prisma, userId }, info) {
    const user = await prisma.deleteUser({ id: userId });

    return {
      ...user,
      messages: [],
      participants: [],
    };
  },
  async updateUser(parent, { data }, { prisma, userId }, info) {
    if (data.password) {
      data.password = await hashPwd(data.password);
    }

    const user = await prisma.updateUser({
      data,
      where: {
        id: userId,
      },
    });

    return {
      ...user,
      messages: [],
      participants: [],
    };
  },
  async createConversation(parent, { data }, { prisma, userId }, info) {
    const conversation = await prisma.createConversation({
      participants: {
        create: [
          {
            user: {
              connect: {
                id: userId,
              },
            },
          },
          {
            user: {
              connect: {
                nickname: data.participant,
              },
            },
          },
        ],
      },
    });
    return { ...conversation, participants: [], messages: [] };
  },
  async sendMessage(parent, { data }, { prisma, userId }, info) {
    const message = await prisma.createMessage({
      content: data.content,
      sender: {
        connect: {
          id: userId,
        },
      },
      conversation: {
        connect: {
          id: data.conversationId,
        },
      },
    });

    return { ...message, user: <User>{}, conversation: <Conversation>{} };
  },
};
