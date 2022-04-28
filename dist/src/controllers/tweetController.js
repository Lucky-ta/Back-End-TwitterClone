"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tweetService_1 = require("../services/tweetService.");
class TweetController {
    constructor() {
        this.addPost = async (req, res) => {
            try {
                const { tweet } = req.body;
                const user = req.data;
                await (0, tweetService_1.postTweet)(user, tweet);
                return res.status(201).json({ tweet });
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
        this.getTweet = async (_req, res) => {
            try {
                const result = await (0, tweetService_1.getTweetInDb)();
                return res.status(200).json(result);
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
        this.excludePost = async (req, res) => {
            try {
                const { id } = req.params;
                const parsedId = Number(id);
                await (0, tweetService_1.destroyTweet)(parsedId);
                return res.status(200).end();
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new TweetController();
