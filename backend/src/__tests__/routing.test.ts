import { handleRequest } from "../routing";
import { postTodo, getTodos, deleteTodo } from "../controllers";

jest.mock("../controllers", () => ({
  getTodos: jest.fn(),
  postTodo: jest.fn(),
  deleTodo: jest.fn(),
}));

describe("routing", () => {
  it("GET /todos should call getTodos function", () => {
    const req = { method: "GET" };
    const res = { statusCode: 200, setHeader: jest.fn(), end: jest.fn() };

    handleRequest(req, res, "/todos", {});

    expect(getTodos).toHaveBeenCalledWith(req, res);
  });

  it("POST /todos should call postTodo function", () => {
    const req = { method: "POST" };
    const res = { statusCode: 200, setHeader: jest.fn(), end: jest.fn() };

    handleRequest(req, res, "/todos", {});

    expect(postTodo).toHaveBeenCalledWith(req, res);
  });
});
