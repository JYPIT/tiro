import styles from './Calender.module.css';
import { useState } from 'react';

const today = new Date();
const today_date = today.getDate();
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export default function Calender() {
  const prevDayArray = [];
  const dayArray = [];
  const nextDayArray = [];
  const [pivotYear, setPivotYear] = useState(2023);
  const [pivotMonth, setPivotMonth] = useState(1); //0-11
  const pivotDate = new Date(pivotYear, pivotMonth, 1);
  const year = new Date(pivotDate).getFullYear();
  const month = new Date(pivotDate).getMonth(); //0-11

  const prevLastDay = new Date(year, month, 0).getDate();
  const firstDay = new Date(pivotDate.setDate(1)).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let i = firstDay - 1; -1 < i; i--) {
    prevDayArray.push(prevLastDay - i);
  }

  for (let i = 1; i <= lastDay; i++) {
    dayArray.push(i);
  }
  for (let i = 1; i <= 42 - (prevDayArray.length + dayArray.length); i++) {
    nextDayArray.push(i);
  }

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
      {year}년
      <div>
        <button onClick={clickMonthLeft}>⬅️</button> {(month % 12) + 1}월<button onClick={clickMonthRight}>➡️</button>
      </div>
      <button onClick={clickToday}>Today</button>
      <div className={styles.week}>
        {week.map((w, index) => (
          <span key={index}>{w}</span>
        ))}
      </div>
      <div className={styles.calenderGrid}>
        {prevDayArray.map((p, index) => (
          <div className={styles.prev} key={index}>
            {p}
          </div>
        ))}
        {dayArray.map((day, index) => (
          <div className={styles.now} key={index} onClick={(e) => console.log(e)}>
            {<span>{day}</span>}
          </div>
        ))}
        {nextDayArray.map((n, index) => (
          <div className={styles.next} key={index}>
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
