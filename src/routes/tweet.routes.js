import { Router } from "express";
import {
  createTweet,
  deleteTweet,
  getTweet,
  updateTweet,
} from "../controllers/tweet.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/create").post(verifyJWT, upload.single("image"), createTweet);
router.route("/:id").get(getTweet);
router.route("/update/:id").patch(verifyJWT, updateTweet);
router.route("/delete/:id").delete(verifyJWT, deleteTweet);

export default router;
