import { Response, Request } from "express";
import { postTweet } from "../services/tweetService.";

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
}

export default new TweetController();
