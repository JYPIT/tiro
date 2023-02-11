import styles from './CalenderHeader.module.css';

const today = new Date();

export default function CalenderHeader({ setPivotYear, setPivotMonth, year, month }) {
  const clickYearLeft = () => {
    setPivotYear((prev) => prev - 1);
  };
  const clickYearRight = () => {
    setPivotYear((prev) => prev + 1);
  };
  const clickMonthLeft = () => {
    setPivotMonth((prev) => prev - 1);
  };
  const clickMonthRight = () => {
    setPivotMonth((prev) => prev + 1);
  };
  const clickToday = () => {
    setPivotYear(today.getFullYear());
    setPivotMonth(today.getMonth());
  };
  return (
    <div className={styles.container}>
      <section className={styles.year}>
        <button onClick={clickYearLeft}>⬅️</button>
        {year}
        <button onClick={clickYearRight}>➡️</button>
      </section>
      <section className={styles.month}>
        <button onClick={clickMonthLeft}>⬅️</button>
        {(month % 12) + 1}월<button onClick={clickMonthRight}>➡️</button>
      </section>
      <button className={styles.today} onClick={clickToday}>
        <span>Happy Today 😊</span>
        <span>Today</span>
      </button>
    </div>
  );
}
