import Folder from "../models/folder";
import { Request, Response } from "express";

export const getAllFolders = async (req: Request, res: Response) => {
  try {
    const result = await Folder.find({});

    if (result.length === 0) {
      return res.json({ message: "There's no folder." });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting all folders!", error);
  }
};

export const createFolder = async (req: Request, res: Response) => {
  const { folderName } = req.body;
  try {
    const newFolder = new Folder({
      name: folderName,
    });

    const alreadyExist = await Folder.find({ name: folderName }).exec();
    if (alreadyExist.length) {
      return res.json({ message: "Folder already exist." });
    }
    const result = await newFolder.save();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error creating new folder.", error);
  }
};

export const deleteFolder = async (req: Request, res: Response) => {
  const folderId = req.params.folderId;
  try {
    const folder = await Folder.findById(folderId);
    if (!folder) {
      return res.status(404).json({ message: "Folder does not exist" });
    }

    const result = await Folder.findByIdAndDelete(folderId);
    res.status(200).json({
      message: `Folder ${result?.name} has been deleted successfully!`,
    });
  } catch (error) {
    console.error("Error deleting");
  }
};

export const updateFolder = async (req: Request, res: Response) => {
  const folderId = req.params.folderId;
  const { folderName } = req.body;
  try {
    const folder = await Folder.findById(folderId);
    if (!folder) {
      return res.status(404).json({ message: "Folder does not exist" });
    }
    const result = await Folder.findByIdAndUpdate(folderId, {
      name: folderName,
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Error updating a folder!", error);
  }
};
