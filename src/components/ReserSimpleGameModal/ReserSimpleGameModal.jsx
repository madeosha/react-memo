import styles from "./ReserSimpleGameModal.module.css";

import { Button } from "../Button/Button";

export function ReserSimpleGameModal({ gameDurationSeconds, gameDurationMinutes, onClick, countGame }) {
  return (
    <div className={styles.modal}>
      <h2 className={styles.title}>Осталось попыток: {countGame}</h2>
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      <Button onClick={onClick}>Продолжить</Button>
    </div>
  );
}
