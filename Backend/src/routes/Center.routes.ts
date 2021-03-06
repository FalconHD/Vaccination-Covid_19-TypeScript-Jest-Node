import { regionAdmin, CenterModel } from "@models";
import { cute } from "@utils";
import { Router } from "express";

const router = Router();

router.post("/add", async (req, res) => {
  const center = await CenterModel.create({
    ...req.body,
    region: req.body.region.toLowerCase(),
    city: req.body.city.toLowerCase(),
  });
  await Promise.all(
    center.admins.map(
      async (admin) =>
        await regionAdmin.findByIdAndUpdate(admin, {
          $addToSet: { centers: center._id },
        })
    )
  );
  res.status(201).json({
    center,
  });
});

router.post("/states", async (req, res) => {
  const { shot } = req.body;
  const users = await regionAdmin
    .find({
      vaccinations: {
        $elemMatch: {
          shot,
        },
      },
    })
    .count();

  res.status(200).json({
    shot,
    users,
  });
});

export { router as CenterRoutes };
