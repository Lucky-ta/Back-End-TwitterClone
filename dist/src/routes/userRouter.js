"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userControllers_1 = __importDefault(require("../controllers/userControllers"));
const userControllers_2 = __importDefault(require("../controllers/userControllers"));
const UserMidllewares_1 = __importDefault(require("../middlewares/UserMidllewares"));
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post('/', UserMidllewares_1.default.emailValidation, UserMidllewares_1.default.passwordValidation, UserMidllewares_1.default.nameValidation, userControllers_2.default.registerNewUser);
userRouter.post('/login', UserMidllewares_1.default.emailValidation, UserMidllewares_1.default.passwordValidation, userControllers_2.default.loginUser);
userRouter.delete('/:id', userControllers_1.default.excludeUser);
