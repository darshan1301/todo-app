import Todo from "../models/todo";
import Folder from "../models/folder";
import { Request, Response } from "express";

export const getAllTodos = async (req: Request, res: Response) => {
  const { folderId } = req.params;
  try {
    const result = await Todo.find({ folder: folderId });

    if (!result.length) {
      return res.json({ message: "There's no item." });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting all todos in this folder.", error);
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { folderId } = req.params;
  const { description } = req.body;

  try {
    const folder = await Folder.findById(folderId);
    if (!folder) {
      return res.json({ message: "Folder does not exist." });
    }

    const todo = new Todo({
      description,
      folder: folderId,
    });

    const result = await todo.save();

    res.status(200).json(result);
  } catch (error) {
    console.error("Error creating new todo.", error);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const todoId = req.params.todoId;

  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ message: "Todo does not exist" });
    }
    const updatedTodo = {
      ...todo.toObject(),
      ...req.body,
    };
    const result = await Todo.findByIdAndUpdate(todoId, updatedTodo);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating a todo!", error);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { todoId } = req.params;
  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ message: "Todo does not exist" });
    }

    const result = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({ message: "Todo successfully deleted" });
  } catch (error) {
    console.error("Error deleting a todo!", error);
  }
};
