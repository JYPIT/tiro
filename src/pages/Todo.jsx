import styles from './Todo.module.css';
import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoNav from '../components/TodoNav';
import TodoItem from '../components/TodoItem';

const todoTypes = ['All', 'Doing', 'Done'];

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todotype, setTodoType] = useState(todoTypes[0]);

  const handleAdd = (add) => {
    setTodos([...todos, add]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deletedId) => {
    setTodos(todos.filter((todo) => todo.id !== deletedId));
  };

  const getFiltered = () => {
    if (todotype === 'All') return todos;
    else if (todotype === 'Doing') {
      return todos.filter((todo) => todo.isChecked === false);
    } else return todos.filter((todo) => todo.isChecked === true);
  };

  const filtered = getFiltered();

  return (
    <div className={styles.wrapper}>
      <TodoNav todos={todos} types={todoTypes} setType={setTodoType} />
      <article className={styles.todo}>
        <ul>
          {filtered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateTodo={handleUpdate} deleteTodo={handleDelete} />
          ))}
        </ul>
      </article>
      <TodoForm addTodo={handleAdd} />
    </div>
  );
}
