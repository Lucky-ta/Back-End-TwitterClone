"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyTweet = exports.postTweet = void 0;
const { Tweet } = require('../../models');
const postTweet = async (user, tweet) => {
    const { id } = user;
    const createPost = await Tweet.create({ userId: id, tweet });
    return createPost;
};
exports.postTweet = postTweet;
const destroyTweet = async (tweetId) => {
    await Tweet.destroy({ where: { id: tweetId } });
};
exports.destroyTweet = destroyTweet;
