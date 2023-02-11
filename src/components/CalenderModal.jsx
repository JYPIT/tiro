import styles from './CalenderModal.module.css';
import { useNavigate } from 'react-router-dom';
import CalenderForm from './CalenderForm';

export default function CalenderModal({ findedSchedule, deleteSchedule, updateSchedules, dayMatch }) {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.overlay} onClick={() => navigate('/calender')}></div>
      <div className={styles.modal}>
        {findedSchedule.map((schedule) => (
          <li key={schedule.id}>
            {schedule.context}
            <button onClick={() => deleteSchedule(schedule.id)}>delete</button>
          </li>
        ))}
        <CalenderForm update={updateSchedules} scheduleDate={findedSchedule.date || dayMatch.params.dayId} />
      </div>
    </>
  );
}
