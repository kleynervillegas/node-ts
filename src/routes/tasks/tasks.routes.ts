
import { Router, Request, Response } from 'express';
import TaskContrller from '../../controllers/tasks/taskController';
// import { ResponseService } from '../../services/Response/Response';
// import { status } from '../../config/response';
// import CoinController from '../../controllers/Coin/Coin';
// import { validatedKeyCST } from '../../services/middlewares/middlewares';
export default class TasksRoutes {

    constructor(){ }   


    router() {

        const router: Router = Router();
        const taskContrller = new TaskContrller();

        router.post('/', async (req: Request, res: Response) => {

            await taskContrller.create(req.body,res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        });

        router.get('/:id', async (req: Request, res: Response) => {           
            const { id } = req.params
            await taskContrller.getOne(id).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        });

        router.get('/', async (req: Request, res: Response) => {

            await taskContrller.create(req.body,res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        });
        router.delete('/:id', async (req: Request, res: Response) => {

            await taskContrller.create(req.body,res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        });

        router.put('/:id', async (req: Request, res: Response) => {

            await taskContrller.create(req.body,res).then(data => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(200).json(error);
            });
        });

        return router;
    }

}