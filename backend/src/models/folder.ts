import { Schema, model, Document, Types } from "mongoose";

interface IFolder extends Document {
  name: string;
  createdAt: Date;
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
});

const Folder = model<IFolder>("Folder", FolderSchema);

export default Folder;
