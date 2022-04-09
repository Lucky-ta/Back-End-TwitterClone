import { Request, Response } from 'express';
import { registerUser } from '../services/userService';

class UserController {
    registerNewUser = async (req: Request, res: Response) => {
        try {
            const user = req.body;
            const result = await registerUser(user);
            return res.status(201).json(result);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

export default new UserController();
