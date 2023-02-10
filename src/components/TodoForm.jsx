import styles from './TodoForm.module.css';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), text: text, isChecked: false });
    setText('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="입력해주세요..." maxLength="45" onChange={handleChange} />
      </form>
    </div>
  );
}
