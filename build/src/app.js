"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_routes_1 = __importDefault(require("./routes/tasks/tasks.routes"));
const config_1 = __importDefault(require("./config/config"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    //#region Application config
    config() {
        this.app.emit('ready');
        const router = express_1.default.Router();
        // parse application/x-www-form-urlencoded
        this.app.use(body_parser_1.default.json({ type: 'this.application/*+json' }));
        this.app.use((0, morgan_1.default)('dev'));
        //configurar permisos de servidor
        const corsOption = {
            origin: 'http://localhost:3000'
        };
        // parse this.application/x-www-form-urlencoded
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
        // parse this.application/json
        this.app.use(body_parser_1.default.json());
        this.app.set('port', config_1.default.port || 3000);
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({ message: "hola" });
        });
        this.app.use('/api/tasks', new tasks_routes_1.default().router());
    }
}
exports.default = new Server().app;
