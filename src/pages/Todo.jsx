import styles from './Todo.module.css';
import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoNav from '../components/TodoNav';
import TodoItem from '../components/TodoItem';
import { useEffect } from 'react';

const todoTypes = ['All', 'Doing', 'Done'];

export default function Todo() {
  const [todos, setTodos] = useState(getTodosFromStorage());
  const [todotype, setTodoType] = useState(todoTypes[0]);

  console.log(localStorage.getItem('todos'));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
    <div className={styles.container}>
      <TodoNav todos={todos} types={todoTypes} setType={setTodoType} />
      <section className={styles.todo}>
        <ul className={styles.todoList}>
          {filtered.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateTodo={handleUpdate} deleteTodo={handleDelete} />
          ))}
        </ul>
      </section>
      <section className={styles.todoForm}>
        <TodoForm addTodo={handleAdd} />
      </section>
    </div>
  );
}

function getTodosFromStorage() {
  const todos = JSON.parse(localStorage.getItem('todos'));
  return todos ? todos : [{ id: 1676195075946, text: 'test', isChecked: false }];
}
