import styles from './CalenderGrid.module.css';
import { useNavigate, useMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import CalenderModal from './CalenderModal';

const today = Date.parse(new Date().toDateString());

export default function CalenderGrid({ year, month, pivotDate }) {
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState();
  useEffect(() => {
    fetch('data/schedules.json')
      .then((res) => res.json())
      .then((data) => setSchedules(data.schedules));
  }, []);

  const prevMonth = [];
  const thisMonth = [];
  const nextMonth = [];

  const prevLastDay = new Date(year, month, 0).getDate();
  const firstDay = new Date(pivotDate.setDate(1)).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let i = firstDay - 1; -1 < i; i--) {
    prevMonth.push(prevLastDay - i);
  }

  for (let i = 1; i <= lastDay; i++) {
    thisMonth.push({ id: i, date: Date.parse(new Date(year, month, i)) });
  }

  for (let i = 1; i <= 42 - (prevMonth.length + thisMonth.length); i++) {
    nextMonth.push(i);
  }

  const dayMatch = useMatch('/calender/:dayId');

  const findedSchedule = dayMatch && schedules.filter((schedule) => schedule.date + '' === dayMatch.params.dayId);

  const updateSchedules = (date, text) => {
    setSchedules([...schedules, { id: Date.now(), date: date, context: text }]);
  };
  const deleteSchedule = (deleteId) => {
    const filtered = schedules.filter((schedule) => schedule.id !== deleteId);
    setSchedules(filtered);
  };

  const handleDayClicked = (date) => {
    navigate(`/calender/${date}`);
  };

  return (
    <>
      <div className={styles.calenderGrid}>
        {prevMonth.map((p, index) => (
          <div className={styles.prev} key={index}>
            {p}
          </div>
        ))}
        {schedules &&
          thisMonth.map((day) => (
            <div className={styles.now} key={day.id} onClick={() => handleDayClicked(day.date)}>
              {day.date === today ? <span className={styles.today}>{day.id}</span> : <span>{day.id}</span>}
              {schedules.map((schedule) => {
                if (schedule.date === day.date) {
                  return <li key={schedule.id}>{schedule.context}</li>;
                }
                return null;
              })}
            </div>
          ))}
        {nextMonth.map((n, index) => (
          <div className={styles.next} key={index}>
            {n}
          </div>
        ))}
        {findedSchedule && (
          <CalenderModal //
            findedSchedule={findedSchedule}
            deleteSchedule={deleteSchedule}
            updateSchedules={updateSchedules}
            dayMatch={dayMatch}
          />
        )}
      </div>
    </>
  );
}
