import styles from "../styles/game.module.css";
import Map from "../assets/images/game/map.svg";
import VantLogo from "../assets/images/game/VantLogo.svg";
import Droppable from "../components/game/Droppable";
import { DndContext, closestCenter } from '@dnd-kit/core';

function Game() {
  return (
    <DndContext>
      <section className={styles}>
        <main>
          <div className={styles.heading}>
            <img src={VantLogo}></img>
            <h1>Find Meow<br /> way back home</h1>
          </div>
          <div className={styles.gamearea}>
            <Droppable id="droppable1" className={styles.droppable} style={{ left: '270px', top: '240px' }} />
            <Droppable id="droppable2" className={styles.droppable} style={{ left: '230px', top: '90px' }} />
            <Droppable id="droppable3" className={styles.droppable} style={{ right: '170px', top: '90px' }} />
            <Droppable id="droppable4" className={styles.droppable} style={{ right: '105px', bottom: '220px' }} />
            <Droppable id="droppable5" className={styles.droppable} style={{ left: '40px', bottom: '190px' }} />
            <img src={Map}></img>
            <h1 className={styles.submit}>Submit</h1>
          </div>
        </main>
        <aside>
          {/* nav bar section */}
        </aside>
      </section>
    </DndContext>
  );
}

export default Game;
