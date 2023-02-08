import { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  const onClickReset = () => setCount(0);
  return (
    <div className='counter'>
      <span style={{ fontSize: '48px' }}>
        {count}/{total}
      </span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add
      </button>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
}
