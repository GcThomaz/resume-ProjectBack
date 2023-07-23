import { Router } from "express";
import * as hardController from "../controllers/hardController.js";
const hardRoutes = Router();

hardRoutes.post("/hard", hardController.insertHard);
hardRoutes.get("/hard/:id", hardController.selectHard);
hardRoutes.get("/hards", hardController.selectHards);
hardRoutes.delete("/hard/:id", hardController.deleteHard);
hardRoutes.put("/hard/:id", hardController.updateHard);

export default hardRoutes;