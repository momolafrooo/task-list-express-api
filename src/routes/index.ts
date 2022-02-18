import express from "express";
import { JWT } from "../config/jwt";
import AuthController from "../controllers/auth.controller";
import TaskController from "../controllers/task.controller";
export const router = express.Router();

/**
 * TASK ROUTES
 **/
router.post("/tasks", JWT.verifyAccessToken, TaskController.saveTask);
router.get("/tasks", JWT.verifyAccessToken, TaskController.getAllTasks);
router.get("/current-user/tasks", JWT.verifyAccessToken, TaskController.getCurrentUserTasks);
router.get("/tasks/:id", JWT.verifyAccessToken, TaskController.getTaskById);
router.put("/tasks/:id", JWT.verifyAccessToken, TaskController.updateTaskById);
router.delete("/tasks/:id", JWT.verifyAccessToken, TaskController.deleteTaskById);

/**
 * AUTH ROUTES
 **/
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
