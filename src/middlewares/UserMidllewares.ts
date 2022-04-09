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


export default emailValidation;
