const { Tweet } = require('../../models');

export const postTweet = async (user: any, tweet: string) => {
    const { id } = user;
    const createPost = await Tweet.create({userId: id, tweet});
    return createPost;
}

export const destroyTweet = async (tweetId: number) => {
    await Tweet.destroy({ where: {id: tweetId} });
}
