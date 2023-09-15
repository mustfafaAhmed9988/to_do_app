import { v4 as uuidv4 } from "uuid";

export const todosReducers = (current, action) => {
  switch (action.type) {
    case "added":
      const newTodos = [
        ...current,
        {
          id: uuidv4(),
          title: action.payload.title,
          body: "",
          isFinished: false,
        },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      console.log(newTodos);
      return newTodos;
    case "deleted":
      const updated = current.filter((e) => e.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(updated));
      return updated;
    case "get":
      const storedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
      return storedTodos;
    case "update":
      const updatedTodo = current.map((e) =>
        e.id === action.payload.id
          ? { ...e, title: action.payload.title, body: action.payload.body }
          : e
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    case "checked":
      const checkedTodo = current.map((e) => {
        if (e.id === action.payload.id) {
          const updatedTodo = {
            ...e, isFinished: !e.isFinished 
          }
          return updatedTodo
        }
        return e;
      });
      localStorage.setItem("todos", JSON.stringify(checkedTodo));
      return checkedTodo;
    default:
      throw Error("unknow actions " + action.type);
  }
};
