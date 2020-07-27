import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { User } from "./User";
import { Conversation } from "./Conversation";
import { Participant } from "./Participant";
import { Resolvers } from "../generated/server/types";
import { Message } from "./Message";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Conversation,
  Participant,
  Message,
};
