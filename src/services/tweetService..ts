const { Tweet } = require('../../models');

export const postTweet = async (post: string) => {
    const createPost = await Tweet.create(post);
    return createPost;
}