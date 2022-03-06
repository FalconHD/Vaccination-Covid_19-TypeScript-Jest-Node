import { IUser } from "@interfaces";
import { Schema, model } from "mongoose";

const schema = new Schema<IUser>(
  {
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
    vaccinations: [
      {
        shot: {
          type: Number,
          required: true,
          enum: [1, 2, 3],
        },
        datetime: {
          type: Date,
          required: true,
          default: Date.now,
        },
      },
    ],
    center: { type: Schema.Types.ObjectId, ref: "Center" },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("User", schema);
