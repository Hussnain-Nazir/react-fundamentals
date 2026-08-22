import TodoItem from "./TodoItem";

// Renders one labeled group of todos (e.g. "Pending" or "Completed").
// Falls back to an empty-state message when the group has nothing in it.
export default function TodoList({ title, todos, onToggle, onDelete, emptyMessage }) {
  return (
    <section className="todo-section">
      <h2 className="todo-section-title">
        {title} ({todos.length})
      </h2>
      {todos.length === 0 ? (
        <p className="todo-empty">{emptyMessage}</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  );
}
