import { Outlet } from "react-router";
import styles from "../styles/game.module.css";

export default function GameLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
