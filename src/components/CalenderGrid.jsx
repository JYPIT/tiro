import styles from './CalenderGrid.module.css';
import { useNavigate, useMatch } from 'react-router-dom';
import CalenderModal from './CalenderModal';
import { useState } from 'react';
import { useEffect } from 'react';

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = Date.parse(new Date().toDateString());

export default function CalenderGrid({ year, month, pivotDate }) {
  const navigate = useNavigate();
  const dayMatch = useMatch('/calender/:dayId');

  const [schedules, setSchedules] = useState(getSchedulesFromStorage());
  useEffect(() => {
    localStorage.setItem('schedules', JSON.stringify(schedules));
  }, [schedules]);

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
    <div className={styles.container}>
      <div className={styles.week}>
        {week.map((w, index) => (
          <span key={index}>{w}</span>
        ))}
      </div>
      {/* TODO: 전월/다음월 스케쥴 표시 */}
      <div className={styles.calenderGrid}>
        {prevMonth.map((p, index) => (
          <div className={styles.prev} key={index}>
            {p}
          </div>
        ))}
        {schedules &&
          thisMonth.map((day) => (
            <div className={styles.now} key={day.id} onClick={() => handleDayClicked(day.date)}>
              {day.date === today ? <span className={styles.today}>{day.id}</span> : <span className={styles.otherDay}>{day.id}</span>}
              <ul className={styles.schedules}>
                {schedules.map((schedule) => {
                  if (schedule.date === day.date) {
                    return (
                      <li className={styles.scheduleItem} key={schedule.id}>
                        <span>{schedule.context}</span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        {nextMonth.map((n, index) => (
          <div className={styles.next} key={index}>
            {n}
          </div>
        ))}
      </div>
      {findedSchedule && (
        <CalenderModal //
          findedSchedule={findedSchedule}
          deleteSchedule={deleteSchedule}
          updateSchedules={updateSchedules}
          dayMatch={dayMatch}
        />
      )}
    </div>
  );
}

function getSchedulesFromStorage() {
  const schedules = JSON.parse(localStorage.getItem('schedules'));
  return schedules ? schedules : [{ id: 123, date: today, context: '테스트 이벤트' }];
}
