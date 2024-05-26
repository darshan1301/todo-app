import { Schema, model, Document, Types } from "mongoose";

interface IFolder extends Document {
  name: string;
  createdAt: Date;
  user: Types.ObjectId;
  todos: Types.ObjectId[];
}

const FolderSchema = new Schema<IFolder>({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Todo",
      required: true,
      default: [],
    },
  ],
});

const Folder = model<IFolder>("Folder", FolderSchema);

export default Folder;
