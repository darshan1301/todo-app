import express, { Request, Response } from "express";
import connectDB from "./db/connectDB";
import todosRoute from "./routes/todoRoute";
import folderRoute from "./routes/folderRoute";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3000;

const dbURL: string = "mongodb://127.0.0.1:27017/todo-app";

connectDB(dbURL);

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript with Express!");
});

// app.use("/user", userRoute);
app.use("/todos", todosRoute);
app.use("/folder", folderRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
