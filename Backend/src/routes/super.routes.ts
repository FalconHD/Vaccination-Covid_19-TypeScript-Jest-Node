import { CenterModel, UserModel } from "@models";
import { cute } from "@utils";
import { Router } from "express";
import { IUser, ICenter } from "@interfaces";

const router = Router();

router.get(
  "/all",
  cute(async (req, res) => {
    const users = await UserModel.find({}).populate("center");
    res.json(users);
  })
);
