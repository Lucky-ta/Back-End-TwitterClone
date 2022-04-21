const { User } = require('../../models');
import { Response } from 'express';
import jwt from 'jsonwebtoken';
const SECRET = process.env.SECRET;
import errors from '../errors/userErros'

export const registerUser = async (user: any, res: Response) => {
    const { email } = user;
    const findByEmail = await User.findOne({ where: {email} });

    if (findByEmail !== null) {
        res.status(402).json(errors.EMAILALREADYEXIST)
    } else {
        const newUser = await User.create(user);
        return newUser;
    }
}

export const login = async (user: any, res: Response) => {
    const { email, password } = user;
    const findUserInDb = await User.findOne({ where:{ email, password }});

    if (findUserInDb === null) {
        res.status(402).json(errors.EMAILALREADYEXIST)
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
