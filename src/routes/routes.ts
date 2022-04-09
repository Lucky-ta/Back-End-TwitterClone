import { Router } from "express";
import UserController from "../controllers/userControllers";
import emailValidation from "../middlewares/UserMidllewares";

const userRouter = Router();

userRouter.post('/', 
emailValidation,
UserController.registerNewUser);

export { userRouter };
