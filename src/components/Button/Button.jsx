import styles from "./Button.module.css";

export function Button({ countGame, children, onClick }) {
  return (
    <div>
      {!countGame ? null : <p>Осталось попыток: {countGame}</p>}
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
