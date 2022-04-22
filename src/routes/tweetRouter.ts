import { Router } from 'express';
import tweetController from '../controllers/tweetController';
import TweetMidllewares from '../middlewares/TweetMidllewares';

const tweetRouter = Router();

tweetRouter.post(
  '/',
  TweetMidllewares.tokenValidation,
  tweetController.addPost,
);

tweetRouter.delete('/:id', tweetController.excludePost);

export { tweetRouter };
