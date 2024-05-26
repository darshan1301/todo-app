import express from "express";
import {
  createFolder,
  deleteFolder,
  getAllFolders,
  updateFolder,
} from "../controllers/folderController";

const router = express.Router();

router.get("/", getAllFolders);
router.post("/", createFolder);
router.put("/:folderId", updateFolder);
router.delete("/:folderId", deleteFolder);

export default router;
