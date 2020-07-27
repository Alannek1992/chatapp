import {
  createUser,
  login,
  deleteUser,
  updateUser,
  me,
} from "./operations/user";
import getClient from "./utils/getClient";
import seedDb, { testingUsers } from "./utils/seedDatabase";
import { prisma } from "../src/generated/prisma-client";
import { verify } from "jsonwebtoken";
import { IToken } from "../src/token";

describe("Tests related to user", () => {
  beforeEach(seedDb),
    it("Create user", async () => {
      const user = {
        nickname: "Canderous",
        email: "canderous@centrum.cz",
        password: "example123",
      };

      const response = await getClient().mutate({
        mutation: createUser,
        variables: { data: { ...user } },
      });

      const exists = await prisma.$exists.user({
        nickname: response.data.createUser.user.nickname,
      });

      expect(exists).toBe(true);
    }),
    it("Login of already existing user", async () => {
      const [inputOfCreatedUser] = testingUsers.input;

      const response = await getClient().mutate({
        mutation: login,
        variables: {
          data: {
            nickname: inputOfCreatedUser.nickname,
            password: inputOfCreatedUser.password,
          },
        },
      });

      const token = response.data.login.token;
      expect(token).toBeTruthy();
      const decoded = verify(token, process.env.JWT_SECRET as string);

      expect(response.data.login.user.id).toBe((decoded as IToken).userId);
    }),
    it("Delete account of user", async () => {
      const [user] = testingUsers.users;

      await getClient(user.token).mutate({
        mutation: deleteUser,
      });

      const userExists = await prisma.$exists.user({ id: user.user.id });

      expect(userExists).toBe(false);
    }),
    it("Update user account", async () => {
      const data = {
        nickname: "Calh",
        password: "Fotbalek",
      };

      const [user] = testingUsers.users;

      const response = await getClient(user.token).mutate({
        mutation: updateUser,
        variables: {
          data,
        },
      });

      expect(response.data.updateUser.nickname).toBe(data.nickname);
      expect(response.data.updateUser.password).not.toBe(user.user.password);
      //user with the old nickname should not exists anymore
      const userExists = await prisma.$exists.user({
        nickname: user.user.nickname,
      });

      expect(userExists).toBe(false);
    }),
    it("Fetch information about the logged in user", async () => {
      const [userOne] = testingUsers.users;

      const response = await getClient(userOne.token).query({
        query: me,
      });

      expect(response.data.me.nickname).toBe(userOne.user.nickname);
      expect(response.data.me.email).toBe(userOne.user.email);
    });
});
