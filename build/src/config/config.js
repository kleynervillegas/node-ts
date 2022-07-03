"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/back-ionic',
    port: process.env.PORT,
};
