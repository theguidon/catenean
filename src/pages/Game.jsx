import styles from "../styles/game.module.css";
import Map from "../assets/images/game/Map.svg";
import VantLogo from "../assets/images/game/VantLogo.svg";
import Droppable from "../components/game/Droppable";
import Draggable from "../components/game/Draggable";
import paopao from "../assets/images/game/cats/paopao.svg";
import homecats from "../assets/images/game/cats/homecats.svg";
import twocats from "../assets/images/game/cats/twocats.svg";
import threecats from "../assets/images/game/cats/threecats.svg";
import arete from "../assets/images/game/buildings/arete.svg";
import mvp from "../assets/images/game/buildings/mvp.svg";
import faura from "../assets/images/game/buildings/faura.svg";
import schmitt from "../assets/images/game/buildings/schmitt.svg";
import ctc from "../assets/images/game/buildings/ctc.svg";
import catButton from "../assets/images/game/NavIcons/Cats.svg";
import bldgButton from "../assets/images/game/NavIcons/Buildings.svg";
import clueButton from "../assets/images/game/NavIcons/Clues.svg";
import menuButton from "../assets/images/game/NavIcons/Instructions.svg";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { useState } from "react";

function Game() {
  const dragCats = {
    "dragCat1": twocats,
    "dragCat2": threecats,
    "dragCat3": paopao,
    "dragCat4": homecats,
  };

  const dragBldgs = {
    "dragBldg1": faura,
    "dragBldg2": schmitt,
    "dragBldg3": arete,
    "dragBldg4": mvp,
    "dragBldg5": ctc,
  };

  const dragPics = {
    cat: dragCats,
    building: dragBldgs
  }


  const [drags, setDrags] = useState({
    cat: [
      "dragCat1",
      "dragCat2",
      "dragCat3",
      "dragCat4",
    ],
    building: [
      "dragBldg1",
      "dragBldg2",
      "dragBldg3",
      "dragBldg4",
      "dragBldg5",
    ]
  });

  const [menu, setMenu] = useState("cat");

  const [dropState, setDropState] = useState({
    droppable1: { "cat": null, "building": null },
    droppable2: { "cat": null, "building": null },
    droppable3: { "cat": null, "building": null },
    droppable4: { "cat": null, "building": null },
    droppable5: { "cat": null, "building": null },
  });

  function isDropped(dropId) {
    return dropState[dropId]["building"];
  }

  function restoreDrag(picture, menu) {
    if (picture) {
      const dragId = Object.keys(dragPics[menu]).find((id) => dragPics[menu][id] == picture);
      const dragsCopy = { ...drags };
      dragsCopy[menu].push(dragId);
      setDrags(dragsCopy);
    }
  }

  function removeDrag(dragId, menu) {
    const dragsCopy = { ...drags };
    dragsCopy[menu] = dragsCopy[menu].filter((id) => id != dragId);
    setDrags(dragsCopy);
  }

  function dropItem(dropId, dragId, key) {
    const dropCopy = { ...dropState };
    dropCopy[dropId][key] = dragPics[menu][dragId];
    // restore building & cat to drags
    restoreDrag(dropCopy[dropId][key], key);
    setDropState(dropCopy);
  }

  function handleDragEnd(event) {
    const dropCopy = { ...dropState };
    if (event.over && event.over.id.startsWith("droppable")) {
      dropItem(event.over.id, event.active.id, menu);
      removeDrag(event.active.id, menu);
      // restore building & cat to drags
      // if (dropCopy[event.over.id][menu]) {
      //   restoreDrag(dropCopy[event.over.id][menu], menu);
      // }
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
            <Droppable
              id="droppable1"
              className={`${styles.droppable} ${isDropped("droppable1") ? styles.dropped : ''}`}
              style={{ left: '255px', top: '220px' }}>
              <img src={dropState["droppable1"].building} />
              <img src={dropState["droppable1"].cat} />
            </Droppable>
            <Droppable
              id="droppable2"
              className={`${styles.droppable} ${isDropped("droppable2") ? styles.dropped : ''}`}
              style={{ left: '230px', top: '60px' }}>
              <img src={dropState["droppable2"].building} />
              <img src={dropState["droppable2"].cat} />
            </Droppable>
            <Droppable
              id="droppable3"
              className={`${styles.droppable} ${isDropped("droppable3") ? styles.dropped : ''}`}
              style={{ right: '160px', top: '60px' }}>
              <img src={dropState["droppable3"].building} />
              <img src={dropState["droppable3"].cat} />
            </Droppable>
            <Droppable
              id="droppable4"
              className={`${styles.droppable} ${isDropped("droppable4") ? styles.dropped : ''}`}
              style={{ right: '80px', bottom: '210px' }}>
              <img src={dropState["droppable4"].building} />
              <img src={dropState["droppable4"].cat} />
            </Droppable>
            <Droppable
              id="droppable5"
              className={`${styles.droppable} ${isDropped("droppable5") ? styles.dropped : ''}`}
              style={{ left: '24px', bottom: '180px' }}>
              <img src={dropState["droppable5"].building} />
              <img src={dropState["droppable5"].cat} />
            </Droppable>
            <img src={Map}></img>
            <h1 className={styles.submit}>Submit</h1>
          </div>
        </main>
        <aside className={styles.draggables}>
          {
            drags[menu].map((id) => (
              <Draggable key={id} id={id}>
                <img src={dragPics[menu][id]} />
              </Draggable>
            ))
          }
        </aside>
        <aside className={styles.buttons}>
          <p>00:00</p>
          <button onClick={() => setMenu("cat")} style={{ rotate: "15deg" }}>
            <img src={catButton} />
          </button>
          <button onClick={() => setMenu("building")} style={{ rotate: "-15deg" }}>
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
