import express, { Request, Response, NextFunction } from "express";
import TaskController from "../controllers/task.controller";
export const router = express.Router();

/* GET home page. */
router.post("/tasks", TaskController.saveTask);
router.get("/tasks", TaskController.getAllTasks);
router.get("/tasks/:id", TaskController.getTaskById);
router.put("/tasks/:id", TaskController.updateTaskById);
router.delete("/tasks/:id", TaskController.deleteTaskById);
