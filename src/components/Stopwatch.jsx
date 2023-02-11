import { useState, useEffect } from 'react';
import styles from './Stopwatch.module.css';

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  function timeConverter(item) {
    const msec = item % 100;
    const sec = Math.floor(item / 100) % 60;
    const min = Math.floor(item / 6000) % 60;
    const hour = Math.floor(item / 360000);
    return (
      <div>
        <span>
          {hour.toString().padStart(2, '0')}:{min.toString().padStart(2, '0')}:{sec.toString().padStart(2, '0')}.
        </span>
        <span>{msec.toString().padStart(2, '0')}</span>
      </div>
    );
  }

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  const handleStopWatch = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setTime(0);
    setLaps([]);
  };

  // 함수를 호출하니 반응이 느려져 time lap이 올바르게 찍히지 않아 onClick 함수에서 직접 호출 처리
  //   const handleLaps = () => {
  //     setLaps([...laps, time]);
  //     console.log(laps);
  //   };

  return (
    <div className={styles.wrapper}>
      <h1>Stop Watch</h1>
      <div className={styles.time}>{timeConverter(time)}</div>
      <div>
        <button onClick={handleStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
        {isRunning ? null : <button onClick={handleReset}>Reset</button>}
        <button onClick={() => setLaps([...laps, time])}>Laps</button>
      </div>
      <ul className={styles.lapsBox}>
        <h1>----- Laps -----</h1>
        {laps.map((lap, index) => (
          <li className={styles.laps} key={index}>
            {timeConverter(lap)}
          </li>
        ))}
      </ul>
    </div>
  );
}
