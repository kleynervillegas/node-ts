import express from "express";
import TasksRoutes from './routes/tasks/tasks.routes';
import config from './config/config';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cors from 'cors'

class Server {
    // set app to be of type express.Application
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    //#region Application config
    public config(): void {
        this.app.emit('ready');
        const router: express.Router = express.Router()
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.json({ type: 'this.application/*+json' }));
        this.app.use(morgan('dev'));
        //configurar permisos de servidor
        const corsOption = {
            origin: 'http://localhost:3000'
        }
        // parse this.application/x-www-form-urlencoded
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors());
        // parse this.application/json
        this.app.use(bodyParser.json());
        this.app.set('port', config.port || 3000);
    }

    public routes(): void {

        this.app.get('/', (req, res) => {
            res.json({ message: "hola" });
        });

        this.app.use('/api/tasks', new TasksRoutes().router());
    }
}

export default new Server().app