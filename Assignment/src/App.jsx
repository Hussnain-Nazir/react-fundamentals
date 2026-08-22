import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Owns the todos state. Add/toggle/delete are defined here and passed
// down as props, since props are enough for a tree this shallow.
export default function App() {
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

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo</h1>
        <span className="todo-count">
          {pending.length === 0 ? "All caught up" : `${pending.length} left`}
        </span>
      </header>

      <TodoForm onAdd={addTodo} />

      <TodoList
        title="Pending"
        todos={pending}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        emptyMessage="No pending todos."
      />
      <TodoList
        title="Completed"
        todos={completed}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        emptyMessage="Nothing completed yet."
      />
    </div>
  );
}
