import express from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController";

const taskRoutes = express.Router();

taskRoutes.post("/tarefas", asyncHandler(createTask));
taskRoutes.get("/tarefas", asyncHandler(getAllTasks));
taskRoutes.get("/tarefas/:id", asyncHandler(getTaskById));
taskRoutes.put("/tarefas/:id", asyncHandler(updateTask));
taskRoutes.delete("/tarefas/:id", asyncHandler(deleteTask));

export default taskRoutes;
