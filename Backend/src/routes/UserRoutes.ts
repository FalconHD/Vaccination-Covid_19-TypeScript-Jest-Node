import { UserModel } from "@models/Users";
import { cute } from "@utils";
import { Router } from "express";

const router = Router();

router.post(
  "/register",
  cute(async (req, res) => {
    console.log(req.body);
    
    const NewUser = await UserModel.create({ ...req.body });
    res.json(NewUser);
  })
);

export { router as UserRoutes };
