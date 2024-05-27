import styles from "./EndGameLeaderBoardModal.module.css";
import { Button } from "../Button/Button";
import celebrationImageUrl from "../EndGameModal/images/celebration.png";
import { addLeader } from "../../api";
import { useState } from "react";
import { useLeaderContext } from "../../context/hooks/useLeader";
import { useNavigate } from "react-router-dom";

export function EndGameLeaderBoardModal({ gameDurationSeconds, gameDurationMinutes, timeGame, resetGame }) {
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [errorName, setErrorName] = useState(false);
  const { setLiderList } = useLeaderContext();
  const addLeaderBoard = reset => {
    addLeader({ name: nameInput, time: timeGame })
      .then(data => {
        setLiderList(data.leaders.sort((a, b) => a.time - b.time).slice(0, 10));
        reset ? resetGame() : navigate("/liderboard");
      })
      .catch(error => {
        setErrorName(true);
      });
  };
  return (
    <div className={styles.modal}>
      <img className={styles.image} src={celebrationImageUrl} alt={"celebration emodji"} />
      <h2 className={styles.title}>Вы попали на Лидерборд!</h2>
      <input
        className={styles.inputUser}
        type="text"
        placeholder="Пользователь"
        onChange={e => {
          setNameInput(e.target.value);
        }}
      />
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      <Button onClick={() => addLeaderBoard(true)}>Играть снова</Button>
      <div className={styles.goLiderboard} onClick={() => addLeaderBoard(false)}>
        Перейти к лидерборду
      </div>
      {errorName ? <span className={styles.errorName}>Заполни имя, чтобы продолжить</span> : null}
    </div>
  );
}
