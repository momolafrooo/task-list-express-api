import express from "express";
import AuthController from "../controllers/auth.controller";
import TaskController from "../controllers/task.controller";
export const router = express.Router();

/**
 * TASK ROUTES
 **/
router.post("/tasks", TaskController.saveTask);
router.get("/tasks", TaskController.getAllTasks);
router.get("/tasks/:id", TaskController.getTaskById);
router.put("/tasks/:id", TaskController.updateTaskById);
router.delete("/tasks/:id", TaskController.deleteTaskById);

/**
 * AUTH ROUTES
 **/
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
