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
    <div>
      <button onClick={clickYearLeft}>⬅️</button>
      {year}
      <button onClick={clickYearRight}>➡️</button>
      <button onClick={clickMonthLeft}>⬅️</button>
      {(month % 12) + 1}월<button onClick={clickMonthRight}>➡️</button>
      <button onClick={clickToday}>Today</button>
    </div>
  );
}
