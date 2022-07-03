// import Task from '../../models/tasks/Task';
// import { getPaginate } from '../../libs/getPaginate';


// export class TaskContrller () {

//     async function  create  (req: Request, res: Response)  {

//         if (!req.body.title) return res.status(400).send({ message: "content cannot be emty" });
//         try {
//             const createTask = new Task({
//                 title: req.body?.title,
//                 description: req.body.description,
//                 done: req.body.done ? req.body.done : false,
//             })
//             const seveTask = await createTask.save();
//             res.json({ massage: 'saving a new task', seveTask: seveTask })
//         } catch (error) {
//             res.status(500).json({
//                 massage: error.massage || "something goes creating a task",
//             })
//         }
//     }
    
//     pubilc function  getAll = async (req, res) => {
//         try {
//             const { size, page, title } = req.query;
    
//             const filter = title 
//             ? {
//                 title: { $regex: new RegExp(title), $options: "i" },
//             } 
//             : {};
            
//             const { limit, offset } = getPaginate(page, size);
    
//             const Tasks = await Task.paginate(filter, { offset, limit });
    
//             res.status(200).json(Tasks);
            
//         } catch (error) {
//             res.status(500).json({
//                 massage: error.massage || 'something goes wrong retrieving the tasks',
//             })
//         }
//     }
    
//     pubilc function  getOne = async (req, res) => {
//         const { id } = req.params
//         try {
//             const task = await Task.findById(id);
    
//             if (!task)
//                 return res
//                     .status(404)
//                     .json({ massage: `task whit id ${id} does not exists` });
    
//             res.status(200).json(task);
//         } catch (error) {
//             res.status(500).json({
//                 massage: error.massage || `Error retrieving task whit id ${id}`,
//             })
//         }
//     }
    
//     pubilc function  deleteTask = async (req, res) => {
//         try {
//             const deleteTask = await Task.findByIdAndDelete(req.params.id);
//             res.status(200).json('task delete successfull');
//         } catch (error) {
//             res.status(500).json({
//                 massage: error.massage || `error ${req.params.id}`,
//             })
//         }
//     }
    
//     pubilc function  updateTask = async (req, res) => {
//         try {
//             const updateTask = await Task.findByIdAndUpdate(req.params.id, req.params.body);
//             res.status(200).json(updateTask);
//         } catch (error) {
//             res.status(500).json({
//                 massage: error.massage || `error ${req.params.id}`,
//             })
//         }
//     }

// }

