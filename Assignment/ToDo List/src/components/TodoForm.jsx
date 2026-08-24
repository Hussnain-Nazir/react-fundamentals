import { useState } from "react";
import { useTodos } from "../context/TodoContext";

/* Controlled input for creating a new todo. Keeps its own draft text
in state, then calls addTodo (from context) to commit it. */
export default function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs doing?"
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        Add
      </button>
    </form>
  );
}
