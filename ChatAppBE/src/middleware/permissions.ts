import { verify } from "jsonwebtoken";
import { MyContext } from "../context";
import { IToken } from "../token";

//This typing is not so nice.. Need to find way how to introduce typing into middleware
const isLoggedIn = (isRequired = true) => async (
  resolve: any,
  parent: any,
  args: any,
  ctx: MyContext,
  info: any
) => {
  const header = ctx.request.request
    ? ctx.request.request.headers.authorization
    : ctx.request.connection.context.Authorization;

  if (header) {
    const token = header.replace("Bearer ", "");
    //need to be sure that env is declared
    const decoded = verify(token, process.env.JWT_SECRET as string);

    ctx.userId = (decoded as IToken).userId;

    return resolve(parent, args, ctx, info);
  }

  if (isRequired) {
    throw new Error("Authentication required!");
  }

  return null;
};

export const permissions = {
  Query: {
    me: isLoggedIn(),
    getConversation: isLoggedIn(),
    getConversations: isLoggedIn(),
    getMessages: isLoggedIn(),
  },
  Mutation: {
    createConversation: isLoggedIn(),
    deleteUser: isLoggedIn(),
    updateUser: isLoggedIn(),
    sendMessage: isLoggedIn(),
  },
};
