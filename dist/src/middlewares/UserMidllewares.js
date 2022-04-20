"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userErros_1 = __importDefault(require("../errors/userErros"));
const emailValidation = (req, res, next) => {
    const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email } = req.body;
    const validEmailFormat = r.test(email);
    if (!email)
        return res.status(402).json(userErros_1.default.EMAILREQUIREDERROR);
    if (email === '')
        return res.status(400).json(userErros_1.default.EMAILREQUIREDERROR);
    if (!validEmailFormat)
        return res.status(400).json(userErros_1.default.EMAILFORMATERROR);
    if (typeof email !== 'string')
        return res.status(400).json(userErros_1.default.EMAILTYPEERROR);
    next();
};
const passwordValidation = (req, res, next) => {
    const { password } = req.body;
    if (!password)
        return res.status(402).json(userErros_1.default.PASSWORDREQUIREDERROR);
    if (typeof password !== 'string')
        return res.status(402).json(userErros_1.default.PASSWORDTYPEERROR);
    if (password.length < 6)
        return res.status(400).json(userErros_1.default.PASSWORDLENGTHERROR);
    next();
};
const nameValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name)
        return res.status(402).json(userErros_1.default.NAMEREQUIREDERROR);
    if (typeof name !== 'string')
        return res.status(402).json(userErros_1.default.NAMETYPEERROR);
    if (name.length < 3)
        return res.status(400).json(userErros_1.default.NAMELENGTHERROR);
    next();
};
exports.default = { emailValidation, passwordValidation, nameValidation };
