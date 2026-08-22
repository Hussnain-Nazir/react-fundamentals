import { useTodos } from "../context/TodoContext";

/* `todo` still arrives as a prop - it's this item's own data, not
shared state. toggle/delete come from context since they're actions
on the shared list, not something TodoList needs to know about. */
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
