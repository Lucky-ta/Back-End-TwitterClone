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
const registerUser = async (user) => {
    const { email } = user;
    const findByEmail = await User.findOne({ where: { email } });
    if (findByEmail !== null) {
        throw userErros_1.default.EMAILALREADYEXIST;
    }
    else {
        const newUser = await User.create(user);
        return newUser;
    }
};
exports.registerUser = registerUser;
const login = async (user) => {
    const { email, password } = user;
    const findUserInDb = await User.findOne({ where: { email, password } });
    if (findUserInDb === null) {
        throw userErros_1.default.USERNOTEXISTS;
    }
    else {
        const token = jsonwebtoken_1.default.sign(findUserInDb.dataValues, SECRET || '', {
            expiresIn: '3d',
            algorithm: 'HS256',
        });
        return token;
    }
};
exports.login = login;
const excludeUser = async (userId) => {
    await User.destroy({ where: { id: userId } });
};
exports.excludeUser = excludeUser;
