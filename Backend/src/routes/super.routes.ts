import { checkPassword } from "@lib";
import { CenterModel, SuperModel, UserModel } from "@models";
import { cute } from "@utils";
import { Router } from "express";
import { IUser, ICenter } from "@interfaces";

const router = Router();

// get all centers
router.get(
  "/centers",
  cute(async (req, res) => {
    const centers = await CenterModel.find()
      .populate("admins")
      .populate("users");
    //populate centers with admins
    res.json(centers);
  })
);

router.post(
  "/login",
  cute(async (req, res) => {
    const admin = await SuperModel.findOne({ email: req.body.email });
    if (admin) {
      if (await checkPassword(req.body.password, admin.password)) {
        res.json(admin);
      } else {
        res.status(401).json({
          error: "Invalid Password",
        });
      }
    } else {
      res.status(404).json({
        error: "Invalid Email",
      });
    }
  })
);
router.post(
  "/add",
  cute(async (req, res) => {
    const admin = await SuperModel.create({
      ...req.body,
      email: req.body.email.toLowerCase(),
    });
    res.json(admin);
  })
);

export { router as SuperRouter };
