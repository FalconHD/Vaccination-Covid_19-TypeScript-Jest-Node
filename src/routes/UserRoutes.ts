import { cute } from "@utils";
import { Router } from "express";

const router = Router();

router.get(
  "/",
  cute(async (req, res) => {
    res.json({
      message: "Hello World",
    });
  })
);

export { router as UserRoutes };
