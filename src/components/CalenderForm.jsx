import { useState } from 'react';

export default function CalenderForm({ update, scheduleDate }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    update(parseInt(scheduleDate), text);
    setText('');
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="이벤트 입력..." value={text} onChange={handleChange} />
    </form>
  );
}
