import { CenterModel, UserModel } from "@models";
import { cute } from "@utils";
import { Router } from "express";

const router = Router();

// router.get(
//   "/byCenter",
//   cute(async (req, res) => {
//     const users = await UserModel.find({});
//     const filtred = users.reduce((output , user) => {
//       output[user.center.toString()] = (output[user.center.toString()] || []).push(user);
//     }, {} as { [key: string]: typeof UserModel[] });
//   })
// );
