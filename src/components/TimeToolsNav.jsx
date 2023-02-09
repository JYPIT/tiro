import styles from "./TimeToolsNav.module.css";

export default function TimerNav({ setIsTimer }) {
  return (
    <nav className={styles.nav}>
      <button onClick={() => setIsTimer(true)}>Timer</button>
      <button onClick={() => setIsTimer(false)}>Stopwatch</button>
    </nav>
  );
}
