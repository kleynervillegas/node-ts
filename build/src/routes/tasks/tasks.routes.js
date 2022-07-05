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
const express_1 = require("express");
const taskController_1 = __importDefault(require("../../controllers/tasks/taskController"));
// import { ResponseService } from '../../services/Response/Response';
// import { status } from '../../config/response';
// import CoinController from '../../controllers/Coin/Coin';
// import { validatedKeyCST } from '../../services/middlewares/middlewares';
class TasksRoutes {
    constructor() { }
    router() {
        const router = (0, express_1.Router)();
        const taskContrller = new taskController_1.default();
        router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield taskContrller.create(req.body, res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        }));
        router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield taskContrller.getOne(id).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        }));
        router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield taskContrller.create(req.body, res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        }));
        router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield taskContrller.create(req.body, res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        }));
        router.put('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield taskContrller.create(req.body, res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        }));
        return router;
    }
}
exports.default = TasksRoutes;
