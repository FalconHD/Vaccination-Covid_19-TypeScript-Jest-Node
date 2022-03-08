import { generateToken } from "@lib";
import { regionAdmin } from "@models";
import { cute } from "@utils";
import axios from "axios";
import { Router } from "express";

const router = Router();

router.post(
  "/add",
  cute(async (req, res) => {
    const admin = await regionAdmin.create({
      ...req.body,
      region: req.body.region.toLowerCase(),
    });
    if (admin) {
      const { id, email, name } = admin;
      const token = generateToken(
        { _id: id, email, name },
        process.env.JWT_SECRET || "secret"
      );
      res.json({ token, data: admin });
    }
  })
);

router.get(
  "/regions",
  cute(async (req, res) => {
    const { data } = await axios.get(process.env.REGIONS_URI || "");
    // const regions = data.map((e: { id: string; region: string }) => {
    //   return e.region;
    // });
    res.json(data);
  })
);

router.get(
  "/cities",
  cute(async (req, res) => {
    const { data } = await axios.get(process.env.CITIES_URI || "");
    // const regions = data.map((e: { id: string; region: string }) => {
    //   return e.region;
    // });
    res.json(data);
  })
);

router.get(
  "/cities/:id",
  cute(async (req, res) => {
    const { id } = req.params;
    const { data } = await axios.get(process.env.CITIES_URI + "/" + id || "");
    res.json(data);
  })
);

export { router as RegionAdmin };
