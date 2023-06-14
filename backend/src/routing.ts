import { postTodo, getTodos, deleteTodo } from "./controllers";
import { IncomingMessage, ServerResponse } from "http";

export const handleRequest = (req: any, res: any, path: string, query: any) => {
  if (path === "/todos" && req.method === "GET") {
    getTodos(req, res);
  } else if (path === "/todos" && req.method === "POST") {
    postTodo(req, res);
  } else if (path.startsWith("/todos/") && req.method === "DELETE") {
    deleteTodo(req, res, path);
  } else {
    res.statusCode = 404;
    res.end();
  }
};
