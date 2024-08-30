import express, { Request, Response } from "express";
import connectDB from "./db/connectDB";
import todosRoute from "./routes/todoRoute";
import folderRoute from "./routes/folderRoute";

import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "5mb" }));
app.use(cors());

const dbURL: string = process.env.DBLINK as string;

connectDB(dbURL);

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript with Express! API is healthy.");
});

app.use("/todos", todosRoute);
app.use("/folder", folderRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
