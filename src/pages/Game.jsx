import styles from "../styles/game.module.css";
import Map from "../assets/images/game/map.svg";
import { DndContext, closestCenter } from '@dnd-kit/core';

function Game() {
  return (
    <>
    <section className={styles}>
      <h1>Find Meow way back home</h1>
        <main className={styles.gamearea}>
          <img src={Map}></img>
          <h1 className={styles.submit}>Submit</h1>
        </main>
        <aside>
          
        </aside>
    </section>
    </>
  );
}

export default Game;
