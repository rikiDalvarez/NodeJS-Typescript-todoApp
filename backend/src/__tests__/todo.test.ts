import { Todo } from "../todo";

describe("Todo interface", () => {
  it("should have the required properties", () => {
    const todo: Todo = {
      id: 1,
      title: "Sample Todo",
      completed: false,
    };

    expect(todo).toHaveProperty("id");
    expect(todo).toHaveProperty("title");
    expect(todo).toHaveProperty("completed");
  });
});
