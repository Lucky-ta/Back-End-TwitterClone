"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const tweetRouter_1 = require("./routes/tweetRouter");
const userRouter_1 = require("./routes/userRouter");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/user', userRouter_1.userRouter);
app.use('/tweet', tweetRouter_1.tweetRouter);
