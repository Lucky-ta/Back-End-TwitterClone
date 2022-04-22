"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { SECRET } = process.env;
const tokenValidation = async (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token)
        return res.status(401).json({ message: 'Token not found' });
    try {
        const userData = jsonwebtoken_1.default.verify(token, SECRET || '');
        req.data = userData;
    }
    catch (e) {
        return res.status(401).json(e.message);
    }
    next();
};
exports.default = {
    tokenValidation,
};
