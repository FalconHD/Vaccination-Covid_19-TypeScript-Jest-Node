import jwt from "jsonwebtoken";
import { IUserTokenProps } from "@interfaces";

export const generateToken = (
  { _id, email, name }: IUserTokenProps,
  secret: string
) => {
  const token = jwt.sign(
    {
      id: _id,
      email,
      name,
    },
    secret,
    {
      expiresIn: "24h",
    }
  );
  return token;
};

export const verifyToken = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
};
export const isTokenValid = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return false;
  }
};
