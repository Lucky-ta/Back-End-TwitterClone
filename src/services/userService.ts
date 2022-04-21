const { User } = require('../../models');
import jwt from 'jsonwebtoken';
const SECRET = process.env.SECRET;
import errors from '../errors/userErros'

export const registerUser = async (user: any) => {
    const { email } = user;
    const findByEmail = await User.findOne({ where: {email} });

    if (findByEmail !== null) {
        throw errors.EMAILALREADYEXIST;
    } else {
        const newUser = await User.create(user);
        return newUser;
    }
}

export const login = async (user: any) => {
    const { email, password } = user;
    const findUserInDb = await User.findOne({ where:{ email, password }});

    if (findUserInDb === null) {
        throw errors.USERNOTEXISTS;
    } else {
        const token = jwt.sign(findUserInDb.dataValues, SECRET || '', {
            expiresIn: '3d',
            algorithm: 'HS256',
        });
        return token;
    }
}

export const excludeUser = async (userId: number) => {
    await User.destroy({ where: {id: userId} });
}
