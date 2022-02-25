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
  },
  { timestamps: true }
);

export const CenterModel = model<ICenter>("Center", schema);
