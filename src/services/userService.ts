const { User } = require('../../models');

export const registerUser = async (user: any) => {
    const { email } = user;
    const findByEmail = await User.findOne({ where: {email} });

    if (findByEmail !== null) {
        throw new Error('Email ja cadastrado');
    } else {
        const newUser = await User.create(user);
        return newUser;
    }
}