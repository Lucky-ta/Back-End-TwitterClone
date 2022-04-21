import { Request, Response } from 'express';
import { excludeUser, login, registerUser } from '../services/userService';

class UserController {
    registerNewUser = async (req: Request, res: Response) => {
        try {
            const user = req.body;
            const result = await registerUser(user, res);
            return res.status(201).json(result);
        } catch (e: any) {
            return res.status(500).json(e.message);
        }
    }

    loginUser = async (req: Request, res: Response) => {
        try {
            const user = req.body;
            const result = await login(user, res);
            return res.status(200).json(result);
        } catch (e: any) {
            return res.status(500).json(e.message);
        }
    }

    excludeUser = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const parsedId = Number(id);
            await excludeUser(parsedId);
            return res.status(200).end();
        } catch (e: any) {
            return res.status(500).json(e.message);
        }
    }
}

export default new UserController();
