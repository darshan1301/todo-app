import { Schema, model, Document, Types } from "mongoose";

interface ITodo extends Document {
  heading: string;
  description: string;
  status: "pending" | "completed";
  dueDate: Date;
  createdAt: Date;
  user: Types.ObjectId;
  folder: Types.ObjectId;
}

const TodoSchema = new Schema<ITodo>({
  heading: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  folder: {
    type: Schema.Types.ObjectId,
    ref: "Folder",
    required: true,
  },
  dueDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const Todo = model("Todo", TodoSchema);

export default Todo;
