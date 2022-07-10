"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
const { Sequelize } = require('sequelize');
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // opcional
        // const db = await mongoose.connect('mongodb://localhost:27017/back-ionic',{
        //     useNewUrlParser: true,
        //     useUnifiedtopology: true
        // });
        const db = yield mongoose_1.default.connect(config_1.default.mongodbURL);
        console.log('connect sucess bd', db.connection.name);
        //  Option 3: Passing parameters separately (other dialects)
        const sequelize = new Sequelize(config_1.default.NAME_DATA_BASE, config_1.default.USER_NAME, config_1.default.PASSWORD, {
            host: config_1.default.SEQUELIZE_URI,
            dialect: config_1.default.TIPY_CONNECTION,
            dialectModule: require('mysql2'),
        });
        yield sequelize.authenticate();
        console.log('connect sucess bd for sequelize', sequelize.getNameDataBase);
    }
    catch (error) {
        console.log(error);
    }
}))();
