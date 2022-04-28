"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyTweet = exports.getTweetInDb = exports.postTweet = void 0;
const { User } = require('../../models');
const { Tweet } = require('../../models');
const postTweet = async (user, tweet) => {
    const { id } = user;
    await Tweet.create({ userId: id, tweet });
};
exports.postTweet = postTweet;
const getTweetInDb = async () => {
    const results = await Tweet.findAll({
        attributes: ['tweet'],
        include: [
            { model: User, required: true, attributes: ['name'] },
        ],
    });
    return results;
};
exports.getTweetInDb = getTweetInDb;
const destroyTweet = async (tweetId) => {
    await Tweet.destroy({ where: { id: tweetId } });
};
exports.destroyTweet = destroyTweet;
