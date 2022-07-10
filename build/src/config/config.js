"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/back-ionic',
    port: process.env.PORT || 3000,
    SEQUELIZE_URI: process.env.SEQUELIZE_URI,
    NAME_DATA_BASE: process.env.NAME_DATA_BASE,
    USER_NAME: process.env.USER_NAME,
    PASSWORD: process.env.PASSWORD,
    TIPY_CONNECTION: process.env.TYPE_CONNECTION,
    jwtSecret: process.env.jwtSecret || "miclaveultrasecreta123*",
};
