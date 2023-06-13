import express, { Request, Response } from "express";
import cors from "cors";
import { Todo } from "./model/todoSchema";

//non - persistence data
let loggedTimes = 1;
let todos: Todo[] = [];

function myLogger(req: Request, res: Response, next: Function) {
  console.log(`logged ${loggedTimes}`);
  loggedTimes += 1;
  next();
}

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(myLogger);

//rounting to controller functions
app.get("/", (req: Request, res: Response) => {
  res.json(todos);
});

app.post("/todos", (req: Request, res: Response) => {
  const { id, title, completed } = req.body;
  const todo = new Todo(id, title, completed);
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
