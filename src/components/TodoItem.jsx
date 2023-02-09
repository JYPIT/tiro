export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const handleCheck = (e) => {
    updateTodo({ ...todo, isChecked: e.target.checked });
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <input id="todo" type="checkbox" checked={todo.isChecked} onChange={handleCheck} />
      <label htmlFor="todo">{todo.text}</label>
      <button onClick={handleDelete}>del</button>
    </li>
  );
}
