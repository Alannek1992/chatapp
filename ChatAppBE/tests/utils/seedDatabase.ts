import { hashSync } from "bcryptjs";
import {
  prisma,
  UserCreateInput,
  User,
} from "../../src/generated/prisma-client/index";
import { generateToken } from "../../src/utils/security";
import { asyncForEach } from "../../src/utils/util";

interface ITestUser {
  input: UserCreateInput[];
  users: IUserWithToken[];
}

interface IUserWithToken {
  user: User;
  token: string;
}

const testingUsers: ITestUser = {
  input: [
    {
      nickname: "Kaja",
      email: "Kaja@Majinka.com",
      password: "12345678",
    },
    {
      nickname: "Alan",
      email: "Alda@Cvalda.com",
      password: "12345678",
    },
  ],
  users: [],
};

const seedDatabase = async () => {
  testingUsers.users = [];
  await prisma.deleteManyUsers();
  await prisma.deleteManyConversations();

  // create testingUser
  await asyncForEach(testingUsers.input, async (userInput: UserCreateInput) => {
    const user = await prisma.createUser({
      ...userInput,
      password: hashSync(userInput.password, 10),
    });
    testingUsers.users.push({
      user,
      token: generateToken(user.id),
    });
  });
};

export { seedDatabase as default, testingUsers };
