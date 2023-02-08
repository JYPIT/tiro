import styles from './Home.module.css';
import Calender from './Calender';
import Todo from './Todo';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section1}>
        <img
          src='https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          alt='이미지 준비중...'
        ></img>
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
