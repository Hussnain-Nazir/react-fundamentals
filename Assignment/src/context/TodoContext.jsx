import { createContext, useContext, useState } from "react";

/* Holds the todo list and the actions that operate on it, so any
component under TodoProvider can access them via useTodos(). */
const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Sketch the weekly plan", completed: true },
    { id: 2, text: "Reply to outstanding emails", completed: false },
    { id: 3, text: "Water the plants", completed: false },
  ]);

  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const pending = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  const value = { todos, pending, completed, addTodo, toggleTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- hook needs to live alongside its provider
export function useTodos() {
  const context = useContext(TodoContext);
  if (context === null) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
}
