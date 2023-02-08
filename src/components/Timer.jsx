import { useRef, useState, useEffect } from "react";

export default function Timer() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(3);

  // const tempHour = hour ? hour : 3;
  // const tempMin = min ? min : 0;
  // const tempSec = sec ? sec : 0;

  const initTime = useRef(hour * 3600 + min * 60 + sec);
  const intervalTime = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartTimer = () => setIsRunning((prev) => !prev);

  useEffect(() => {
    if (isRunning) {
      intervalTime.current = setInterval(() => {
        initTime.current -= 1;
        setHour(Math.floor(initTime.current / 3600));
        setMin(Math.floor(initTime.current / 60) % 60);
        setSec(initTime.current % 60);
      }, 1000);
    }
    return () => clearInterval(intervalTime.current);
  }, [isRunning]);

  useEffect(() => {
    if (initTime.current <= 0) {
      clearInterval(intervalTime.current);
      setIsRunning(false);
      console.log("끝");
    }
  }, [sec]);

  return (
    <div>
      <h1>{`${hour} : ${min} : ${sec}`}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="number" value={hour} onChange={(e) => setHour(e.target.value)} />
        <input type="number" value={min} onChange={(e) => setMin(e.target.value)} />
        <input type="number" value={sec} onChange={(e) => setSec(e.target.value)} />
        <button onClick={handleStartTimer}>{isRunning ? "Stop" : "Start"}</button>
      </form>
      {/* <button onClick={() => initTime}>Reset</button> */}
    </div>
  );
}
