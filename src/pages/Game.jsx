import styles from "../styles/game.module.css";
import Box from "../assets/images/game/placeholders/Box.svg";
import Cat from "../assets/images/game/placeholders/Cat.svg";
import Paw from "../assets/images/game/placeholders/Paw.svg";
import House from "../assets/images/game/placeholders/House.svg";
import Fish from "../assets/images/game/placeholders/Fish.svg";
import QMark from "../assets/images/game/qmark.svg";
import ears from "../assets/images/cats/illustrations/Ears.svg";
import MVP from "../assets/images/buildings/no-shadow/mvp.svg";
import Schmitt from "../assets/images/buildings/no-shadow/schmitt.svg";
import Faura from "../assets/images/buildings/no-shadow/faura.svg";
import Arete from "../assets/images/buildings/no-shadow/arete.svg";
import CTCSOM from "../assets/images/buildings/no-shadow/ctc-som.svg";
import { useState } from "react";
import { shuffle } from "remeda";
import { useStopwatch } from "react-timer-hook";

const answerKey = {
  Location: {
    Dongyan: MVP,
    Hakaw: Schmitt,
    OneEye: Faura,
    Ponpon: Arete,
    Princess: CTCSOM,
  },
  Quirk: {
    Dongyan: "Stubby tail",
    Hakaw: "Drinks cold water",
    OneEye: "Fought a crow",
    Ponpon: "The youngest",
    Princess: "Rides the elevator",
  },
  Personality: {
    Dongyan: "Lazy",
    Hakaw: "Clingy",
    OneEye: "Feisty",
    Ponpon: "Curious",
    Princess: "Sassy",
  },
  "Fave Spot": {
    Dongyan: "Guard's table",
    Hakaw: "Department offices",
    OneEye: "Building Facade",
    Ponpon: "Parking lot",
    Princess: "Elevators",
  },
  "Fave Food": {
    Dongyan: "Liver spread",
    Hakaw: "Eats anything",
    OneEye: "Kibble",
    Ponpon: "Wet food",
    Princess: "Dry food",
  },
};

function CatButton() {
  return (
    <button className={styles.catButton} style={{ width: "12em", margin: 0 }}>
      <img src={ears} />
      <p style={{ padding: "12px 0" }}>Submit</p>
    </button>
  );
}

function OptionsModal({ trait, cat, options, closeOptionsModal }) {
  return (
    <section className={`${styles.fullScreenLayer} ${styles.optionsLayer}`}>
      <div
        className={styles.fullScreenLayer}
        style={{ background: "rgba(0,0,0,0.3)" }}
      />
      <section className={styles.optionsLabel}>
        <p>{`${trait} of ${cat}`}</p>
      </section>
      <section className={styles.optionsModal}>
        {options &&
          options.map((option) => (
            <button onClick={closeOptionsModal} className={styles.optionButton}>
              {["Location", "Picture"].includes(trait) ? (
                <img src={option} />
              ) : (
                option
              )}
            </button>
          ))}
      </section>
    </section>
  );
}

export function GameTable({ openOptionsModal }) {
  const catNames = ["Dongyan", "Hakaw", "One Eye", "Ponpon", "Princess"];
  return (
    <section className={styles.gameTable}>
      {catNames.map((name, ix) => (
        <div
          key={`${name}-pic`}
          style={{ gridColumn: ix + 2 }}
          className={styles.picFrame}
        />
      ))}
      {catNames.map((name, ix) => (
        <section
          style={{ gridColumn: ix + 2 }}
          key={name}
          className={styles.nameHeader}
        >
          <h1>{name}</h1>
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Location</h1>
      </section>
      {catNames.map((name) => (
        <button
          key={`location-${name}`}
          onClick={() => openOptionsModal(name, "Location")}
          className={styles.catCell}
        >
          <img src={House} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </button>
      ))}
      <section className={styles.catHeader}>
        <h1>Quirk</h1>
      </section>
      {catNames.map((name) => (
        <button
          key={`quirk-${name}`}
          onClick={() => openOptionsModal(name, "Quirk")}
          className={styles.catCell}
        >
          <img src={Paw} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </button>
      ))}
      <section className={styles.catHeader}>
        <h1>Personality</h1>
      </section>
      {catNames.map((name) => (
        <button
          key={`personality-${name}`}
          onClick={() => openOptionsModal(name, "Personality")}
          className={styles.catCell}
        >
          <img src={Cat} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </button>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Spot</h1>
      </section>
      {catNames.map((name) => (
        <section
          key={`spot-${name}`}
          onClick={() => openOptionsModal(name, "Fave Spot")}
          className={styles.catCell}
        >
          <img src={Box} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Food</h1>
      </section>
      {catNames.map((name) => (
        <section
          key={`food-${name}`}
          onClick={() => openOptionsModal(name, "Fave Food")}
          className={styles.catCell}
        >
          <img src={Fish} style={{ height: "50%" }} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
    </section>
  );
}

// have to make this because the timer keeps shuffling
// the options every second
const gameOptions = {
  Location: shuffle(Object.values(answerKey["Location"])),
  Quirk: shuffle(Object.values(answerKey["Quirk"])),
  Personality: shuffle(Object.values(answerKey["Personality"])),
  "Fave Spot": shuffle(Object.values(answerKey["Fave Spot"])),
  "Fave Food": shuffle(Object.values(answerKey["Fave Food"])),
};

function getOptionsFromTrait(trait) {
  return gameOptions[trait];
}

function padNumber(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}

export default function Game() {
  const [currentCat, setCurrentCat] = useState("Dongyan");
  const [currentTrait, setCurrentTrait] = useState("Fave Spot");
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const { minutes, seconds } = useStopwatch({ autoStart: true });

  function openOptionsModal(cat, trait) {
    setCurrentCat(cat);
    setCurrentTrait(trait);
    setShowOptionsModal(true);
  }

  function closeOptionsModal() {
    setShowOptionsModal(false);
  }

  return (
    <section className={styles.gameArea}>
      <GameTable openOptionsModal={openOptionsModal} />
      <section className={styles.menuSide}>
        <section className={styles.gameOpts}>
          <p className={styles.timer}>
            {padNumber(minutes)}:{padNumber(seconds)}
          </p>
          <button className={styles.instructionBtn}>
            <img src={QMark} />
          </button>
          <section style={{ display: "flex", alignItems: "center" }}>
            <button className={styles.exitBtn}>x</button>
            <CatButton />
          </section>
        </section>
        <section className={styles.checklist}></section>
      </section>
      {showOptionsModal && (
        <OptionsModal
          trait={currentTrait}
          cat={currentCat}
          options={getOptionsFromTrait(currentTrait)}
          closeOptionsModal={closeOptionsModal}
        />
      )}
    </section>
  );
}
