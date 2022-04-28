const { User } = require('../../models');
const { Tweet } = require('../../models');

export const postTweet = async (user: any, tweet: string) => {
  const { id } = user;
  await Tweet.create({ userId: id, tweet });
};

export const getTweetInDb = async () => {
  const results = await Tweet.findAll({
    attributes: ['tweet'],
    include: [
      { model: User, required: true, attributes: ['name'] },
    ],
  });
  return results;
};

export const destroyTweet = async (tweetId: number) => {
  await Tweet.destroy({ where: { id: tweetId } });
};
