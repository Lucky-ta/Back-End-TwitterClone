import { Router } from "express";
import tweetController from "../controllers/tweetController";

const tweetRouter = Router();

tweetRouter.post('/', tweetController.addPost)

export { tweetRouter };
