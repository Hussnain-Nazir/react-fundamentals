import { useTodos } from "../context/TodoContext";

/* Renders a single todo row. `todo` is passed in as a prop since it's
this item's own data; toggle/delete are pulled from context since
they act on the shared todo list. */
export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className={`todo-item${todo.completed ? " completed" : ""}`}>
      <button
        className={`todo-checkbox${todo.completed ? " checked" : ""}`}
        onClick={() => toggleTodo(todo.id)}
        aria-label={todo.completed ? "Mark as pending" : "Mark as completed"}
      >
        ✓
      </button>
      <span className={`todo-text${todo.completed ? " completed" : ""}`}>
        {todo.text}
      </span>
      <button
        className="todo-delete-btn"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  );
}
