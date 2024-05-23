import styles from "./Button.module.css";

export function Button({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </div>
  );
}
