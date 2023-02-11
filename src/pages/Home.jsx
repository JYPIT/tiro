import styles from './Home.module.css';
import Todo from './Todo';
import CalenderGrid from '../components/CalenderGrid';
import { Link } from 'react-router-dom';

export default function Home() {
  const pivotDate = new Date();
  const year = new Date(pivotDate).getFullYear();
  const month = new Date(pivotDate).getMonth();
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <span>TIME IS RUNNING OUT</span>
        <div>a</div>
      </section>
      <section className={styles.section2}>
        <Link to="/calender">
          <CalenderGrid year={year} month={month} pivotDate={pivotDate} />
        </Link>
      </section>
      <section className={styles.section3}>
        <Todo />
      </section>
    </div>
  );
}
