import express from 'express'
import authMiddleware from '../middleware/auth.js';
import { createTaske, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/taskController.js';

const taskRouter = express.Router();

taskRouter.route('/gp')
    .get(authMiddleware, getTasks)
    .post(authMiddleware, createTaske);

taskRouter.route('/:id/gp')
    .get(authMiddleware, getTaskById)
    .put(authMiddleware, updateTask)
    .delete(authMiddleware, deleteTask);

export default taskRouter;