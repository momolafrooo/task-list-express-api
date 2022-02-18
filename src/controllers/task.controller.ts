import { Request, Response, NextFunction } from "express";
import TaskService from "../services/task.service";

export default class TaskController {
  // SAVE TASK
  public static saveTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await TaskService.saveTask(req.body);

      // RETURN RESPONSE
      res.json(tasks);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };

  // GET ALL TASKS
  public static getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks = await TaskService.getAllTasks();

      // RETURN RESPONSE
      return res.json(tasks);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };

  // GET TASK BY ID
  public static getTaskById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const task = await TaskService.getTaskById(parseInt(id));

      if (!task) return res.status(404).json({ message: "Task Not Found" });

      // RETURN RESPONSE
      return res.json(task);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };

  // UPDATE TASK BY ID
  public static updateTaskById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const task = await TaskService.updateTaskById(parseInt(id), req.body);

      // RETURN RESPONSE
      return res.json(task);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };

  // DELETE TASK BY ID
  public static deleteTaskById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const task = await TaskService.deleteTaskById(parseInt(id));

      // RETURN RESPONSE
      return res.json(task);
    } catch (error) {
      // RETURN ERROR
      next(error);
    }
  };
}
