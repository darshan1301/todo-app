import { Schema, model, Document, Types } from "mongoose";

interface ITodo extends Document {
  description: string;
  status: "pending" | "completed";
  folder: Types.ObjectId;
}

const TodoSchema = new Schema<ITodo>({
  description: {
    type: String,
    required: true,
    unique: false,
  },
  folder: {
    type: Schema.Types.ObjectId,
    ref: "Folder",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const Todo = model("Todo", TodoSchema);

export default Todo;
