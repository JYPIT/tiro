import styles from './Calender.module.css';
import { useState } from 'react';
import CalenderGrid from '../components/CalenderGrid';
import CalenderHeader from '../components/CalenderHeader';

export default function Calender() {
  const [pivotYear, setPivotYear] = useState(2023);
  const [pivotMonth, setPivotMonth] = useState(1); //0-11
  const pivotDate = new Date(pivotYear, pivotMonth, 1);
  const year = new Date(pivotDate).getFullYear();
  const month = new Date(pivotDate).getMonth(); //0-11

  return (
    <div className={styles.container}>
      <CalenderHeader //
        setPivotYear={setPivotYear}
        setPivotMonth={setPivotMonth}
        year={year}
        month={month}
      />

      <CalenderGrid year={year} month={month} pivotDate={pivotDate} />
    </div>
  );
}
