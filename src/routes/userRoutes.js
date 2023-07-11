import { Router } from "express";
import * as userController from "../controllers/userController.js";
const userRouter = Router();

userRouter.post("/createUser", userController.insertUser);
userRouter.get("/user/:id", userController.selectUser);
userRouter.get("/users", userController.selectUsers);
userRouter.delete("/deleteUser/:id", userController.deleteUser);
userRouter.put("/user/:id", userController.updateUser);

export default userRouter;