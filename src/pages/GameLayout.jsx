import { Outlet } from "react-router";
import CloudLeft from "../assets/images/game/CloudLeft.svg";
import CloudRight from "../assets/images/game/CloudRight.svg";
import styles from "../styles/game.module.css";

export default function GameLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
      <img
        src={CloudLeft}
        className={styles.cloud}
        style={{
          height: "28vh",
          position: "absolute",
          left: "-10vw",
          top: "2vh",
          animationDelay: -1.5,
        }}
      />
      <img
        src={CloudRight}
        className={styles.cloud}
        style={{
          height: "25vh",
          position: "absolute",
          left: "30vw",
          top: "-5vh",
        }}
      />
      <img
        src={CloudLeft}
        className={styles.cloud}
        style={{
          height: "28vh",
          position: "absolute",
          right: "-5vw",
          top: "2vh",
          animationDelay: -2,
        }}
      />
    </main>
  );
}
