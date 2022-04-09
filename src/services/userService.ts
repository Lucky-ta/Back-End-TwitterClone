const { User } = require('../../models');
import jwt from 'jsonwebtoken';
import SECRET  from '../../varConfigs';

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

export const login = async (user: any) => {
    const { id, email, password } = user;
    const findUserInDb = await User.findOne({ where:{ id, email, password }});

    if (findUserInDb === null) {
        throw new Error('User not Registered');
    } else {
        const token = jwt.sign(findUserInDb, SECRET, {
            expiresIn: '3d',
            algorithm: 'HS256',
        });
        return token;
    }
}