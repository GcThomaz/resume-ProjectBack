import { Router } from "express";
import * as userController from "../controllers/userController.js";
const userRouter = Router();

userRouter.post("/user", userController.insertUser);
userRouter.get("/user/:id", userController.selectUser);
userRouter.get("/users", userController.selectUsers);
userRouter.delete("/user/:id", userController.deleteUser);
userRouter.put("/user/:id", userController.updateUser);
userRouter.get("/skills", userController.selectSkills);

export default userRouter;