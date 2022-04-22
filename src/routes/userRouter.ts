import { Router } from 'express';
import userControllers from '../controllers/userControllers';
import UserController from '../controllers/userControllers';
import middlewares from '../middlewares/UserMidllewares';

const userRouter = Router();

userRouter.post(
  '/',
  middlewares.emailValidation,
  middlewares.passwordValidation,
  middlewares.nameValidation,
  UserController.registerNewUser,
);

userRouter.post(
  '/login',
  middlewares.emailValidation,
  middlewares.passwordValidation,
  UserController.loginUser,
);

userRouter.delete('/:id', userControllers.excludeUser);

export { userRouter };
