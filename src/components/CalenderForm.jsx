import { useState } from 'react';

export default function CalenderForm({ update, scheduleDate }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    update(parseInt(scheduleDate), text);
    setText('');
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const checkEnterKey = (e) => {
    if (text.length >= 1) {
      return;
    }
    if (e.key === 'Enter') {
      alert('입력된 이벤트가 없습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="이벤트 입력..." value={text} maxLength="18" onKeyDown={(e) => checkEnterKey(e)} onChange={handleChange} />
    </form>
  );
}
