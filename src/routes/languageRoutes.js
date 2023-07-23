import { Router } from "express";
import * as languageController from "../controllers/languageControllers.js";
const languageRoutes = Router();

languageRoutes.post("/language", languageController.insertLanguage);
languageRoutes.get("/language/:id", languageController.selectLanguage);
languageRoutes.get("/languages", languageController.selectLanguages);
languageRoutes.delete("/language/:id", languageController.deleteLanguage);
languageRoutes.put("/language/:id", languageController.updateLanguage);

export default languageRoutes;