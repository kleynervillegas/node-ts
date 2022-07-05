import express from "express";
import { Router, Request, Response } from 'express';
import TasksRoutes from './routes/tasks/tasks.routes';
import config from './config/config';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import {authentication}  from "./Middleware/authentication/authentication";

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
        this.app.set('jwtSecret', config.jwtSecret);      
        this.app.set('port', config.port || 3000);
    }

    public routes(): void {

        this.app.get('/', (req, res) => {
            res.json({ message: "hola" });
        });

        const payload = {
            check:  true,
            user: {
                name: 'kleyner villegas',
                numberid: '20096862',
            }
           };
           const token = jwt.sign(payload, this.app.get('jwtSecret'), {
            expiresIn: 1440
           });
           console.log(token);
           


        this.app.use('/api/tasks',authentication, new TasksRoutes().router());
    }
}

export default new Server().app