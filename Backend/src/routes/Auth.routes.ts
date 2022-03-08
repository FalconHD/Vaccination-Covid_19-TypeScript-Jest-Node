import { checkPassword } from "@lib";
import { cute } from "@utils";
import { Router } from "express";
import { UserModel,regionAdmin } from "@models";

const router = Router();

router.post(
  "/login",
  cute(async (req, res) => {
    const admin = await regionAdmin.findOne({ email: req.body.email });
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


// router.get('/',(req,res)=>{
//   const
// })

export { router as AuthRoute };
