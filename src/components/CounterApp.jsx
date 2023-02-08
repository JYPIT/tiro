import { useState } from 'react';
import Counter from './Counter';

export default function CounterApp() {
  const [isShow, setIsShow] = useState(true);
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='countBar'>
        Total Couont: {count}
        {count > 5 ? '🔥' : '❄️'}
        <button onClick={() => setIsShow((prev) => !prev)}>Show</button>
      </div>
      {isShow && <Counter total={count} onClick={handleClick} />}
      {isShow && <Counter total={count} onClick={handleClick} />}
    </div>
  );
}
