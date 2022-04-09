import { Response, Request } from "express";
import { postTweet } from "../services/tweetService.";

class TweetController {
    addPost = async (req: Request, res: Response) => {
        try {
            const post = req.body;
            const result = await postTweet(post);
            return res.status(201).json(result);
        } catch (e: any) {
            return res.status(500).json(e.message);
        }
    }
}

export default new TweetController();
