import { regionAdmin } from "@models/index";
import { cute } from "@utils";
import { Router } from "express";

const router = Router();

router.post(
  "/login",
  cute(async (req, res) => {
    const admin = await regionAdmin.findOne({ email: req.body.email });
    if (admin) {
      if (admin.password === req.body.password) {
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
  "/register",
  cute(async (req, res) => {
    const admin = await regionAdmin.create(req.body);
    res.json(admin);
  })
);

// router.get('/',(req,res)=>{
//   const
// })

export { router as AuthRoute };
