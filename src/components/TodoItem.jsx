import styles from './TodoItem.module.css';
import {BsTrash }from 'react-icons/bs';
export default function TodoItem({ todo, updateTodo, deleteTodo }) {
  const handleCheck = (e) => {
    updateTodo({ ...todo, isChecked: e.target.checked });
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={styles.todoItem}>
      <input id={todo.id} type="checkbox" checked={todo.isChecked} onChange={handleCheck} />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={handleDelete}>
        <BsTrash />
      </button>
    </li>
  );
}
