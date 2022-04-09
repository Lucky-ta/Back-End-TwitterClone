import { Router } from "express";
import tweetController from "../controllers/tweetController";
import TweetMidllewares from '../middlewares/TweetMidllewares';

const tweetRouter = Router();

tweetRouter.post('/',
TweetMidllewares.tokenValidation,
 tweetController.addPost)

export { tweetRouter };
