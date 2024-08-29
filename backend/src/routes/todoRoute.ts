import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todoController";

const router = express.Router();

router.get("/:folderId", getAllTodos);
router.post("/:folderId", createTodo);
router.put("/:todoId", updateTodo);
router.delete("/:todoId", deleteTodo);

export default router;
