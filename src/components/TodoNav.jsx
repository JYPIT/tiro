import styles from './TodoNav.module.css';

export default function TodoNav({ todos, types, setType }) {
  const handleClick = (e) => {
    setType(e.target.name);
  };

  return (
    <nav className={styles.nav}>
      {types.map((i, index) => (
        <button key={index} name={i} onClick={handleClick}>
          {i}
        </button>
      ))}
    </nav>
  );
}
