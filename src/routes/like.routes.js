import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { toggleVideoLike } from "../controllers/like.controller.js";

const router = Router();

router.use(verifyJWT);

router.route("/video/:videoId").patch(toggleVideoLike);

export default router;
