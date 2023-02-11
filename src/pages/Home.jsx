import styles from './Home.module.css';
import Calender from './Calender';
import Todo from './Todo';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <span>TIME IS RUNNING OUT</span>
        <div>a</div>
      </section>
      <section className={styles.section2}>
        <Calender />
      </section>
      <section className={styles.section3}>
        <Todo />
      </section>
    </div>
  );
}
