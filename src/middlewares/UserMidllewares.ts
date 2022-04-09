import errors from '../errors/userErros';
import { NextFunction, Request, Response } from "express";


const emailValidation = (req: Request, res: Response, next: NextFunction) => {
    const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email } = req.body;

    const validEmailFormat = r.test(email);

    if (!email) return res.status(402).json(errors.EMAILREQUIREDERROR);
    if (email === '') return res.status(400).json(errors.EMAILREQUIREDERROR);
    if (!validEmailFormat) return res.status(400).json(errors.EMAILFORMATERROR);
    if (typeof email !== 'string') return res.status(400).json(errors.EMAILTYPEERROR);

    next();
}

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) return res.status(402).json(errors.PASSWORDREQUIREDERROR);
    if (typeof password !== 'string') return res.status(402).json(errors.PASSWORDTYPEERROR);
    if (password.length < 6) return res.status(400).json(errors.PASSWORDLENGTHERROR);

    next();
}


const nameValidation = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    if (!name)  return res.status(402).json(errors.NAMEREQUIREDERROR);
    if (typeof name !== 'string') return res.status(402).json(errors.NAMETYPEERROR);
    if (name.length < 3) return res.status(400).json(errors.NAMELENGTHERROR);

    next();

}  

export default { emailValidation, passwordValidation, nameValidation};
