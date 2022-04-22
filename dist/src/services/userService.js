"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeUser = exports.login = exports.registerUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = require("bcrypt");
const userErros_1 = __importDefault(require("../errors/userErros"));
const { User } = require('../../models');
const { SECRET } = process.env;
const registerUser = async (user, res) => {
    const { email, name, password } = user;
    const findByEmail = await User.findOne({ where: { email } });
    if (findByEmail !== null) {
        res.status(402).json(userErros_1.default.EMAILALREADYEXIST);
    }
    else {
        const cryptPassword = await (0, bcrypt_1.hash)(password, 8);
        await User.create({
            name,
            email,
            password: cryptPassword,
        });
        return { message: 'Cadastrado com sucesso!' };
    }
};
exports.registerUser = registerUser;
const login = async (user, res) => {
    const { email, password } = user;
    const findUserInDb = await User.findOne({ where: { email } });
    const passwordValidation = await (0, bcrypt_1.compare)(password, findUserInDb.dataValues.password);
    const _a = findUserInDb.dataValues, { password: passDb } = _a, userWithouPassword = __rest(_a, ["password"]);
    if (!passwordValidation) {
        res.status(402).json(userErros_1.default.USERNOTEXISTS);
    }
    else {
        const token = jsonwebtoken_1.default.sign(userWithouPassword, SECRET || '', {
            expiresIn: '3d',
            algorithm: 'HS256',
        });
        return {
            name: findUserInDb.name,
            token,
        };
    }
};
exports.login = login;
const excludeUser = async (userId) => {
    await User.destroy({ where: { id: userId } });
};
exports.excludeUser = excludeUser;
