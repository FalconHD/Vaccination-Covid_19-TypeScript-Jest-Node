import { UserModel } from "@models";
import { cute } from "@utils";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  cute(async (req, res) => {
    const users = await UserModel.find({});
    res.json(users);
  })
);

router.get(
  "/checkCin/:cin",
  cute(async (req, res) => {
    const { cin } = req.params;
    const User = await UserModel.findOne({ cin: cin.toLowerCase() });
    if (!User) throw new Error("User not found");

    res.json(User);
  })
);

router.post(
  "/register",
  cute(async (req, res) => {
    console.log(req.body);
    const user = await UserModel.create({
      ...req.body,
      region: req.body.region.toLowerCase(),
      cin: req.body.cin.toLowerCase(),
      city: req.body.city.toLowerCase(),
    });
    res.json(user);
  })
);

router.post(
  "/update/:cin",
  cute(async (req, res) => {
    console.log(req.body);
    console.log(req.params);

    const user = await UserModel.updateOne(
      {
        cin: req.params.cin.toLowerCase(),
      },
      {
        vaccinations: req.body,
      },
      {
        new: true,
      }
    );
    res.json(user);
  })
);

export { router as UserRoutes };
