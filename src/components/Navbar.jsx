import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { BsFillCalendarDayFill } from 'react-icons/bs';
import { FcTodoList } from 'react-icons/fc';
import { RxLapTimer } from 'react-icons/rx';
import { AiOutlineSetting } from 'react-icons/ai';
export default function Navbar() {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <nav className={styles.nav}>
      <div>
        <Link className={styles.navIcon} to="/calender">
          <BsFillCalendarDayFill />
        </Link>
        <Link className={styles.navIcon} to="/todo">
          <FcTodoList />
        </Link>
      </div>
      <Link to="/">
        <span className={styles.logo}>TIRO</span>
      </Link>

      <div>
        <Link className={styles.navIcon} to="/timetools">
          <RxLapTimer />
        </Link>
        <Link className={styles.navIcon}>
          <AiOutlineSetting />
        </Link>
      </div>
    </nav>
  );
}
