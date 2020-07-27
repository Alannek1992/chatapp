import { sign } from "jsonwebtoken";
import { hash, compare } from "bcryptjs";

export const generateToken = (userId: string) =>
  sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "7 days",
  });

export const hashPwd = (password: string) => {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long!");
  }

  return hash(password, 10);
};

export const validatePwd = (enteredPwd: string, userPwd: string) =>
  compare(enteredPwd, userPwd);
