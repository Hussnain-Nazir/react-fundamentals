import TodoItem from "./TodoItem";

/* Only takes what's local display config (which todos, what to label
them). No onToggle/onDelete pass-through — TodoItem gets those from
context directly. */
export default function TodoList({ title, todos, emptyMessage }) {
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
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </section>
  );
}
