"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import TasksRoutes from './routes/tasks/tasks.routes';
const config_1 = __importDefault(require("./config/config"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.json({ type: 'application/*+json' }));
app.use((0, morgan_1.default)('dev'));
//configurar permisos de servidor
const corsOption = {
    origin: 'http://localhost:3000'
};
// parse application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// parse application/json
app.use(body_parser_1.default.json());
app.set('port', config_1.default.port || 3000);
// app.get('/',(req,res) => {
//     res.json({message: "hola"});
// }); 
// app.use('/api/tasks',TasksRoutes);
exports.default = app;
