import { CenterModel, UserModel } from "@models";
import { cute } from "@utils";
import { Router } from "express";

const router = Router();

// get all centers
router.get("/centers",cute( async (req, res) => {
    const centers = await CenterModel.find().populate("admins").populate("users");
    //populate centers with admins
    res.json(centers);
}));


export { router as SuperRouter };
