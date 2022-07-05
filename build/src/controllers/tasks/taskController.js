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
const Task_1 = __importDefault(require("../../models/tasks/Task"));
const getPaginate_1 = require("../../libs/getPaginate");
class TaskContrller {
    create(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.title)
                return { status: 400, message: "content cannot be emty" };
            try {
                const createTask = new Task_1.default({
                    title: (_a = req.body) === null || _a === void 0 ? void 0 : _a.title,
                    description: req.body.description,
                    done: req.body.done ? req.body.done : false,
                });
                const seveTask = yield createTask.save();
                res.json({ massage: 'saving a new task', seveTask: seveTask });
            }
            catch (error) {
                res.status(500).json({
                    massage: error.massage || "something goes creating a task",
                });
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { size, page, title } = req.query;
                const filter = title
                    ? {
                        title: { $regex: new RegExp(title), $options: "i" },
                    }
                    : {};
                const { limit, offset } = (0, getPaginate_1.getPaginate)(page, size);
                // const Tasks = await Task.paginate(filter, { offset, limit });
                // res.status(200).json(Tasks);
            }
            catch (error) {
                res.status(500).json({
                    massage: error.massage || 'something goes wrong retrieving the tasks',
                });
            }
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield Task_1.default.findById(id);
                if (!task)
                    return { status: 404, massage: `task whit id ${id} does not exists` };
                return { status: 200, data: task };
            }
            catch (error) {
                return { status: 500, massage: error.massage || `Error retrieving task whit id ${id}`, };
            }
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteTask = yield Task_1.default.findByIdAndDelete(req.params.id);
                res.status(200).json('task delete successfull');
            }
            catch (error) {
                res.status(500).json({
                    massage: error.massage || `error ${req.params.id}`,
                });
            }
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateTask = yield Task_1.default.findByIdAndUpdate(req.params.id, req.params.body);
                res.status(200).json(updateTask);
            }
            catch (error) {
                res.status(500).json({
                    massage: error.massage || `error ${req.params.id}`,
                });
            }
        });
    }
}
exports.default = TaskContrller;
