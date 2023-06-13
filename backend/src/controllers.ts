import { IncomingMessage, ServerResponse } from "http";
import { Todo } from "./todo";

const todos: Todo[] = [];

export const handleRequest = (
  req: IncomingMessage,
  res: ServerResponse,
  path: string,
  query: any
) => {
  if (path === "/todos" && req.method === "GET") {
    // Get all todos
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(todos));
  } else if (path === "/todos" && req.method === "POST") {
    // Create a new todo
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newTodo: Todo = JSON.parse(body);
      todos.push(newTodo);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      res.end(JSON.stringify(newTodo));
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
};
