import styles from './CalenderModal.module.css';
import { useNavigate } from 'react-router-dom';
import CalenderForm from './CalenderForm';
import { BsTrash } from 'react-icons/bs';

export default function CalenderModal({ findedSchedule, deleteSchedule, updateSchedules, dayMatch }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.overlay} onClick={() => navigate('/calender')}></div>
      <div className={styles.modal}>
        <ul className={styles.schedules}>
          {findedSchedule.map((schedule) => (
            <li key={schedule.id}>
              <span className={styles.scheduleItem}>
                {schedule.context}{' '}
                <button className={styles.deleteBtn} onClick={() => deleteSchedule(schedule.id)}>
                  <BsTrash />
                </button>
              </span>
            </li>
          ))}
        </ul>
        <CalenderForm update={updateSchedules} scheduleDate={findedSchedule.date || dayMatch.params.dayId} />
      </div>
    </>
  );
}
