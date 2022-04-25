"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("../services/userService");
class UserController {
    constructor() {
        this.registerNewUser = async (req, res) => {
            try {
                const user = req.body;
                const result = await (0, userService_1.registerUser)(user);
                return res.status(201).json(result);
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
        this.loginUser = async (req, res) => {
            try {
                const user = req.body;
                const result = await (0, userService_1.login)(user);
                return res.status(200).json(result);
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
        this.validateUser = async (req, res) => {
            const { authorization: token } = req.headers;
            try {
                const result = (0, userService_1.validate)(token);
                return res.status(200).json(result);
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
        this.excludeUser = async (req, res) => {
            try {
                const { id } = req.params;
                const parsedId = Number(id);
                await (0, userService_1.excludeUser)(parsedId);
                return res.status(200).end();
            }
            catch (e) {
                return res.status(500).json(e.message);
            }
        };
    }
}
exports.default = new UserController();
