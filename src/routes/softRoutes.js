import { Router } from "express";
import * as softController from "../controllers/softController.js";
const softRoutes = Router();

softRoutes.post("/soft", softController.insertSoft);
softRoutes.get("/soft/:id", softController.selectSoft);
softRoutes.get("/softs", softController.selectSofts);
softRoutes.delete("/soft/:id", softController.deleteSoft);
softRoutes.put("/soft/:id", softController.updateSoft);

export default softRoutes;