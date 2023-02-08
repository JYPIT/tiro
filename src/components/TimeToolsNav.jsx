export default function TimerNav({ setIsTimer }) {
  return (
    <nav>
      <button onClick={() => setIsTimer(true)}>Timer</button>
      <button onClick={() => setIsTimer(false)}>Stopwatch</button>
    </nav>
  );
}
