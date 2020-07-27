import { ParticipantResolvers } from "../generated/server/types";

export const Participant: ParticipantResolvers = {
  user(parent, args, { prisma, request, userId }, info) {
    return prisma.participant({ id: parent.id }).user();
  },
};
