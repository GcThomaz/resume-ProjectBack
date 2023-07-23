import { Router } from "express";
import userRoutes from "./userRoutes.js"
import softRoutes from "./softRoutes.js";
import hardRoutes from "./hardRoutes.js";
import languageRoutes from "./languageRoutes.js";

const router = Router();


router.use(userRoutes);
router.use(softRoutes);
router.use(hardRoutes);
router.use(languageRoutes);

export default router;