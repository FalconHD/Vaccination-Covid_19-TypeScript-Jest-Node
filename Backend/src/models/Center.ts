import { ICenter } from "@interfaces";
import { Schema, model } from "mongoose";

const schema = new Schema<ICenter>(
  {
    name: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    admins: [
      {
        type: Schema.Types.ObjectId,
        ref: "regionAdmin",
      },
    ],
  },
  { timestamps: true }
);

export const CenterModel = model<ICenter>("Center", schema);
