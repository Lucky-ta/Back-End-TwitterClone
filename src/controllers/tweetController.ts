import { Response, Request } from 'express';
import { destroyTweet, getTweetInDb, postTweet } from '../services/tweetService.';

class TweetController {
  addPost = async (req: Request, res: Response) => {
    try {
      const {tweet} = req.body;
      const user = req.data;
      await postTweet(user, tweet);
      return res.status(201).end();
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };

  getTweet = async (_req: Request, res: Response) => {
    try {
      const result = await getTweetInDb();
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };

  excludePost = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const parsedId = Number(id);
      await destroyTweet(parsedId);
      return res.status(200).end();
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };
}

export default new TweetController();
