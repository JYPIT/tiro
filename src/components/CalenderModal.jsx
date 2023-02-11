import styles from './CalenderModal.module.css';
import { Navigate } from 'react-router-dom';
import CalenderForm from './CalenderForm';

export default function CalenderModal({ findedSchedule, deleteSchedule, updateSchedules, dayMatch }) {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={() => Navigate('/calender')}></div>
      <div className={styles.modal}>
        {findedSchedule.map((schedule) => (
          <li key={schedule.id}>
            {schedule.context}
            <button onClick={() => deleteSchedule(schedule.id)}>delete</button>
          </li>
        ))}
        <CalenderForm update={updateSchedules} scheduleDate={findedSchedule.date || dayMatch.params.dayId} />
      </div>
    </div>
  );
}
