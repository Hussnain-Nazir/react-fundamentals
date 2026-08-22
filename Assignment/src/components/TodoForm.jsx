import { useState } from "react";

/* Controlled input for creating a new todo. Keeps its own draft text
 in state, hands the finished value up via onAdd, then clears itself. */
export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return; // ignore empty/whitespace-only submissions
    onAdd(trimmed);
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
