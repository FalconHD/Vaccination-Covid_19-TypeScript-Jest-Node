import { Schema, model } from "mongoose";

interface User {
  name: string;
  avatar?: string;
  cin: string;
  phone: string;
  address: string;
  city: string;
  country?: string;
}

const schema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  cin: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
});

// Create User Model.
export const UserModel = model<User>("User", schema);
