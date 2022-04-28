"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetRouter = void 0;
const express_1 = require("express");
const tweetController_1 = __importDefault(require("../controllers/tweetController"));
const TweetMidllewares_1 = __importDefault(require("../middlewares/TweetMidllewares"));
const tweetRouter = (0, express_1.Router)();
exports.tweetRouter = tweetRouter;
tweetRouter.post('/', TweetMidllewares_1.default.tokenValidation, TweetMidllewares_1.default.textValidation, tweetController_1.default.addPost);
tweetRouter.get('/', tweetController_1.default.getTweet);
tweetRouter.delete('/:id', tweetController_1.default.excludePost);
