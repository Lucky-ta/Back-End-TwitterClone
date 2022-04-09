import { Router } from "express";
import UserController from "../controllers/userControllers";

const userRouter = Router();

userRouter.post('/', UserController.registerNewUser);

export { userRouter };
