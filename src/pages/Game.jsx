import styles from "../styles/game.module.css";
import Map from "../assets/images/game/map.svg";
import VantLogo from "../assets/images/game/VantLogo.svg";
import { DndContext, closestCenter } from '@dnd-kit/core';

function Game() {
  return (
    <>
    <section className={styles}>
        <main>
        <div className={styles.nav}>
          <img src={VantLogo}></img>
          <h1>Find Meow  <br/> way back home</h1>
        </div>
          <div className={styles.gamearea}>
            <img src={Map}></img>
            <h1 className={styles.submit}>Submit</h1>
          </div>
        </main>
        <aside>
          <div>

          </div>
        </aside>
    </section>
    </>
  );
}

export default Game;
