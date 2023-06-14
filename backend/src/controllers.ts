import { Todo } from "./todo";

const todos: Todo[] = [];

function getTodos(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify(todos));
}

function postTodo(req, res) {
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
}

function deleteTodo(req, res, path) {
  console.log("enter");
  const todoId = path.split("/")[2];
  const index = todos.findIndex((todo) => todo.id === Number(todoId));
  console.log({ index });
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.statusCode = 200;
    res.end(JSON.stringify(deletedTodo));
  }
}

export { getTodos, postTodo, deleteTodo };
