import jwt from 'jsonwebtoken';
import { compare, hash } from 'bcrypt';
import errors from '../errors/userErros';

const { User } = require('../../models');

const { SECRET } = process.env;

export const registerUser = async (user: any) => {
  const { email, name, password } = user;
  const findByEmail = await User.findOne({ where: { email } });

  if (findByEmail !== null) {
    return errors.EMAILALREADYEXIST;
  }
  const cryptPassword = await hash(password, 8);
  await User.create({
    name,
    email,
    password: cryptPassword,
  });
  return { message: 'Cadastrado com sucesso!' };
};

export const login = async (user: any) => {
  const { email, password } = user;
  const result = await User.findOne({ where: { email } });

  if (result === null) {
    return errors.USERNOTEXISTS;
  }
  const passwordValidation = await compare(password, result.dataValues.password);

  if (passwordValidation) {
    const { password: passDb, ...userWithouPassword } = result.dataValues;

    const token = jwt.sign(userWithouPassword, SECRET || '', {
      expiresIn: '2d',
      algorithm: 'HS256',
    });
    return {
      user: userWithouPassword,
      token,
    };
  } return errors.INVALIDPASSWORD;
};

export const validate = (token: any) => {
  try {
    const data = jwt.verify(token, SECRET || '');
    return data;
  } catch (e: any) {
    return e.message;
  }
};

export const excludeUser = async (userId: number) => {
  await User.destroy({ where: { id: userId } });
};
