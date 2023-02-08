import styles from './Calender.module.css';

export default function Calender() {
  const days = 31;
  const daysArray = [];

  for (let index = 1; index <= days; index++) {
    daysArray.push(index);
  }

  return (
    <div className={styles.wrapper}>
      <h1>Calender</h1>
      <div className={styles.calender}>
        {daysArray.map((day) => (
          <div key={day}>
            {day}
            <ul>
              <li>안녕</li>
              <li>안녕</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
