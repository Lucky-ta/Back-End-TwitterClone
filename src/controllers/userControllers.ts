import { Request, Response } from 'express';
import {
  excludeUser, login, registerUser, validate,
} from '../services/userService';

class UserController {
  registerNewUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const result = await registerUser(user);
      return res.status(201).json(result);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };

  loginUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const result = await login(user);
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };

  validateUser = async (req: Request, res: Response) => {
    const { authorization: token } = req.headers;
    try {
      const result = validate(token);
      return res.status(200).json(result);
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };

  excludeUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const parsedId = Number(id);
      await excludeUser(parsedId);
      return res.status(200).end();
    } catch (e: any) {
      return res.status(500).json(e.message);
    }
  };
}

export default new UserController();
