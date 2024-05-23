import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./LeaderBoardPage.module.css";
import { useEffect } from "react";
import { getLeaders } from "../../api";
import { useLeaderContext } from "../../context/hooks/useLeader";

export const LeaderBoardPage = () => {
  const { liderList, setLiderList } = useLeaderContext();

  useEffect(() => {
    getLeaders()
      .then(data => {
        setLiderList(data.leaders.sort((a, b) => a.time - b.time).slice(0, 10));
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [setLiderList]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titlePage}>Лидерборд</div>
        <Link to="/game/9">
          <Button>Начать игру</Button>
        </Link>
      </div>
      <div className={styles.rowTable}>
        <div className={styles.rowTable__positionTitle}>Позиция</div>
        <div className={styles.rowTable__userTitle}>Пользователь</div>
        <div className={styles.rowTable__timeTitle}>Время</div>
      </div>
      {liderList.map((lider, index) => (
        <div key={lider.id} className={styles.rowTable}>
          <div className={styles.rowTable__position}># {index + 1}</div>
          <div className={styles.rowTable__user}>{lider.name}</div>
          <div className={styles.rowTable__time}>{lider.time}</div>
        </div>
      ))}
    </div>
  );
};
