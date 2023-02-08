import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
        <Link to='/calender'>달력</Link>
        <Link to='/todo'>할 일</Link>
      </div>
      <div className={styles.logo}>
        <Link to='/'>Tiro</Link>
      </div>
      <div className={styles.navItem}>
        <Link to='/timetools'>타이머</Link>
      </div>
    </nav>
  );
}
