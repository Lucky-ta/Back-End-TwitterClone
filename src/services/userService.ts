import { Response } from 'express';
import jwt from 'jsonwebtoken';
import { compare, hash } from 'bcrypt';
import errors from '../errors/userErros';

const { User } = require('../../models');

const { SECRET } = process.env;

export const registerUser = async (user: any, res: Response) => {
  const { email, name, password } = user;
  const findByEmail = await User.findOne({ where: { email } });

  if (findByEmail !== null) {
    res.status(402).json(errors.EMAILALREADYEXIST);
  } else {
    const cryptPassword = await hash(password, 8);
    await User.create({
      name,
      email,
      password: cryptPassword,
    });
    return { message: 'Cadastrado com sucesso!' };
  }
};

export const login = async (user: any, res: Response) => {
  const { email, password } = user;
  const findUserInDb = await User.findOne({ where: { email } });
  const passwordValidation = await compare(password, findUserInDb.dataValues.password);

  const { password: passDb, ...userWithouPassword } = findUserInDb.dataValues;

  if (!passwordValidation) {
    res.status(402).json(errors.USERNOTEXISTS);
  } else {
    const token = jwt.sign(userWithouPassword, SECRET || '', {
      expiresIn: '3d',
      algorithm: 'HS256',
    });
    return {
      name: findUserInDb.name,
      token,
    };
  }
};

export const excludeUser = async (userId: number) => {
  await User.destroy({ where: { id: userId } });
};
