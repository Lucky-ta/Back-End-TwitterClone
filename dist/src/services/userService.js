"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeUser = exports.login = exports.registerUser = void 0;
const { User } = require('../../models');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET = process.env.SECRET;
const userErros_1 = __importDefault(require("../errors/userErros"));
const registerUser = async (user, res) => {
    const { email } = user;
    const findByEmail = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
    if (findByEmail !== null) {
        res.status(402).json(userErros_1.default.EMAILALREADYEXIST);
    }
    else {
        await User.create(user);
        return findByEmail;
    }
};
exports.registerUser = registerUser;
const login = async (user, res) => {
    const { email, password } = user;
    const findUserInDb = await User.findOne({ where: { email, password } });
    if (findUserInDb === null) {
        res.status(402).json(userErros_1.default.USERNOTEXISTS);
    }
    else {
        const token = jsonwebtoken_1.default.sign(findUserInDb.dataValues, SECRET || '', {
            expiresIn: '3d',
            algorithm: 'HS256',
        });
        return {
            name: findUserInDb.dataValues.name,
            token
        };
    }
};
exports.login = login;
const excludeUser = async (userId) => {
    await User.destroy({ where: { id: userId } });
};
exports.excludeUser = excludeUser;
