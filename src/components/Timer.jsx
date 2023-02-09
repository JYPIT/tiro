import { useState, useRef, useEffect } from "react";
import styles from "./Timer.module.css";

export default function TimeCalculator() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);

  //   const tempHour = hour ? hour : 0;
  //   const tempMin = min ? min : 10;
  //   const tempSec = sec ? sec : 0;

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <span className={styles.time}>{`${hour.toString().padStart(2, "0")}h:${min.toString().padStart(2, "0")}m:${sec.toString().padStart(2, "0")}s`}</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="number" value={hour.toString().padStart(2, "0")} onChange={(e) => setHour(e.target.value)} />
        <input type="number" value={min.toString().padStart(2, "0")} onChange={(e) => setMin(e.target.value)} />
        <input type="number" value={sec.toString().padStart(2, "0")} onChange={(e) => setSec(e.target.value)} />
        <button onClick={handleStartTimer}>{isRunning ? "Stop" : "Start"}</button>
      </form>
    </div>
  );
}
