import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import errors from '../errors/userErros'

const { SECRET } = process.env;

export interface IUserRequest extends Request{
    data: any;
}

const tokenValidation = async (req: IUserRequest, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const userData = jwt.verify(token, SECRET || '');
    req.data = userData;
  } catch (e: any) {
    return res.status(401).json(e.message);
  }
  next();
};

const textValidation = async (req: Request, res: Response, next: NextFunction) => {
  const { tweet } = req.body;

  if (!tweet) return res.status(404).json(errors.INVALIDTWEET)
  if (tweet === '') return res.status(404).json(errors.INVALIDTWEET);

  next()
}

export default {
  tokenValidation,
  textValidation,
};
