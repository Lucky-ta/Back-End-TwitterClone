import { Response, Request } from "express";
import { destroyTweet, postTweet } from "../services/tweetService.";

class TweetController {
    addPost = async (req: Request, res: Response) => {
        try {
            const { tweet } = req.body;
            const user = req.data;
            const result = await postTweet(user, tweet);
            return res.status(201).json(result);
        } catch (e: any) {
            return res.status(500).json(e.message);
        }
    }

    excludePost = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const parsedId = Number(id);
            await destroyTweet(parsedId);
            return res.status(200).end();
        } catch (e: any) {
            return res.status(500).json(e.message);
        }
    }
}

export default new TweetController();
