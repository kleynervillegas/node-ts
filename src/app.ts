import express from "express";
// import TasksRoutes from './routes/tasks/tasks.routes';
import config from './config/config';
import bodyParser from 'body-parser';
import morgan from 'morgan'
import cors from 'cors'

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(morgan('dev'));

//configurar permisos de servidor
const corsOption = {
    origin: 'http://localhost:3000'
}
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.set('port', config.port|| 3000);

// app.get('/',(req,res) => {
//     res.json({message: "hola"});
// }); 

// app.use('/api/tasks',TasksRoutes);

export default app;