/* Renders a single todo row. Has no state of its own - it only calls
 the functions its parent passed down. */
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item${todo.completed ? " completed" : ""}`}>
      <button
        className={`todo-checkbox${todo.completed ? " checked" : ""}`}
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Mark as pending" : "Mark as completed"}
      >
        ✓
      </button>
      <span className={`todo-text${todo.completed ? " completed" : ""}`}>
        {todo.text}
      </span>
      <button
        className="todo-delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  );
}
