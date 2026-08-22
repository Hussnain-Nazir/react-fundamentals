import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./context/TodoContext";

/* Reads the shared todo state via useTodos() and renders the header
and the pending/completed lists. */
export default function App() {
  const { pending, completed } = useTodos();

  return (
    <div className="todo-app">
      <header className="todo-header">
        <h1>Todo</h1>
        <span className="todo-count">
          {pending.length === 0 ? "All caught up" : `${pending.length} left`}
        </span>
      </header>

      <TodoForm />

      <TodoList title="Pending" todos={pending} emptyMessage="No pending todos." />
      <TodoList title="Completed" todos={completed} emptyMessage="Nothing completed yet." />
    </div>
  );
}
