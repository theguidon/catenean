import styles from "../styles/game.module.css";
import Map from "../assets/images/game/map.svg";
import VantLogo from "../assets/images/game/VantLogo.svg";
import Droppable from "../components/game/Droppable";
import Draggable from "../components/game/Draggable";
import paopao from "../assets/images/game/cats/paopao.svg";
import homecats from "../assets/images/game/cats/homecats.svg";
import twocats from "../assets/images/game/cats/twocats.svg";
import threecats from "../assets/images/game/cats/threecats.svg";
import catButton from "../assets/images/game/NavIcons/Cats.svg";
import bldgButton from "../assets/images/game/NavIcons/Buildings.svg";
import clueButton from "../assets/images/game/NavIcons/Clues.svg";
import menuButton from "../assets/images/game/NavIcons/Instructions.svg";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { useState } from "react";

function Game() {
  const dragCats = {
    "draggable1": twocats,
    "draggable2": threecats,
    "draggable3": paopao,
    "draggable4": homecats,
  };

  const [cats, setCats] = useState([
    "draggable1",
    "draggable2",
    "draggable3",
    "draggable4",
  ]);

  const [dropState, setDropState] = useState({
    "droppable1": null,
    "droppable2": null,
    "droppable3": null,
    "droppable4": null,
    "droppable5": null
  });

  function setDropCat(dropId, dragId) {
    const dropCopy = { ...dropState };
    dropCopy[dropId] = dragCats[dragId];
    setDropState(dropCopy);
  }

  function handleDragEnd(event) {
    if (event.over && event.over.id.startsWith("droppable")) {
      setDropCat(event.over.id, event.active.id);
      setCats(cats.filter((cat) => cat != event.active.id));
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <section>
        <main>
          <div className={styles.heading}>
            <img src={VantLogo}></img>
            <h1>Find Meow<br /> way back home</h1>
          </div>
          <div className={styles.gamearea}>
            <Droppable id="droppable1" className={styles.droppable} style={{ left: '270px', top: '240px' }}>
              <img src={dropState["droppable1"]} />
            </Droppable>
            <Droppable id="droppable2" className={styles.droppable} style={{ left: '230px', top: '90px' }}>
              <img src={dropState["droppable2"]} />
            </Droppable>
            <Droppable id="droppable3" className={styles.droppable} style={{ right: '170px', top: '90px' }}>
              <img src={dropState["droppable3"]} />
            </Droppable>
            <Droppable id="droppable4" className={styles.droppable} style={{ right: '105px', bottom: '220px' }}>
              <img src={dropState["droppable4"]} />
            </Droppable>
            <Droppable id="droppable5" className={styles.droppable} style={{ left: '40px', bottom: '190px' }}>
              <img src={dropState["droppable5"]} />
            </Droppable>
            <img src={Map}></img>
            <h1 className={styles.submit}>Submit</h1>
          </div>
        </main>
        <aside className={styles.draggables}>
          {cats.map((catId) => (
            <Draggable key={catId} id={catId}>
              <img src={dragCats[catId]} />
            </Draggable>
          ))}
        </aside>
        <aside className={styles.buttons}>
          <p>00:00</p>
          <button style={{ rotate: "15deg" }}>
            <img src={catButton} />
          </button>
          <button style={{ rotate: "-15deg" }}>
            <img src={bldgButton} />
          </button>
          <button style={{ rotate: "15deg" }}>
            <img src={clueButton} />
          </button>
          <button style={{ rotate: "-15deg" }}>
            <img src={menuButton} />
          </button>
        </aside>
      </section>
    </DndContext>
  );
}

export default Game;
