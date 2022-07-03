import Task from '../../models/tasks/Task';
import { getPaginate } from '../../libs/getPaginate';


export default class TaskContrller {

   public async create  (req: any, res: any)  {

        if (!req.body.title) return {status : 400 , message: "content cannot be emty"};
        try {
            const createTask = new Task({
                title: req.body?.title,
                description: req.body.description,
                done: req.body.done ? req.body.done : false,
            })
            const seveTask = await createTask.save();
            res.json({ massage: 'saving a new task', seveTask: seveTask })
        } catch (error:any) {
            res.status(500).json({
                massage: error.massage || "something goes creating a task",
            })
        }
    }
    
    public  async  getAll    (req: any, res: any) {
        try {
            const { size, page, title } = req.query;
    
            const filter = title 
            ? {
                title: { $regex: new RegExp(title), $options: "i" },
            } 
            : {};
            
            const { limit, offset } = getPaginate(page, size);
    
            // const Tasks = await Task.paginate(filter, { offset, limit });
    
            // res.status(200).json(Tasks);
            
        } catch (error:any) {
            res.status(500).json({
                massage: error.massage || 'something goes wrong retrieving the tasks',
            })
        }
    }
    
    public async getOne (id: string) {
        try {
            const task = await Task.findById(id);
    
            if (!task) return {status: 404, massage: `task whit id ${id} does not exists` };

            return {status: 200, data: task };
        } catch (error:any) {
            return { status: 500, massage: error.massage || `Error retrieving task whit id ${id}`, };
        }
    }
    
    public async deleteTask    (req: any, res: any) {
        try {
            const deleteTask = await Task.findByIdAndDelete(req.params.id);
            res.status(200).json('task delete successfull');
        } catch (error:any) {
            res.status(500).json({
                massage: error.massage || `error ${req.params.id}`,
            })
        }
    }
    
    public  async updateTask    (req: any, res: any) {
        try {
            const updateTask = await Task.findByIdAndUpdate(req.params.id, req.params.body);
            res.status(200).json(updateTask);
        } catch (error:any) {
            res.status(500).json({
                massage: error.massage || `error ${req.params.id}`,
            })
        }
    }

}

