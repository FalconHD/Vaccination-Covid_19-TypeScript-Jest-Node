import { generateToken } from "@lib/jwt";
import { regionAdmin } from "@models/index";
import { cute } from "@utils";
import axios from "axios";
import { Router } from "express";

const router = Router();

router.post(
  "/add",
  cute(async (req, res) => {
    const admin = await regionAdmin.create({ ...req.body });
    if (admin) {
      const { id, email, name } = admin;
      const token = generateToken(
        { _id: id, email, name },
        process.env.JWT_SECRET || ""
      );
      res.json({ token, data: admin });
    }
  })
);

router.get(
  "/regions",
  cute(async (req, res) => {
    const { data } = await axios.get(process.env.REGIONS_URI || "");
    const regions = data.map((e: { id: string; region: string }) => {
      return e.region;
    });
    res.json(regions);
  })
);

export { router as RegionAdmin };
