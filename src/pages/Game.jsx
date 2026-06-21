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

// todo: add win conditions for clues
const clues = [
  "The lazy cat lives in the building beside the Catenean named after a dumpling.",
  "This curious cat is a resident of the modern building that's home to artists.",
  "Princess loves riding the elevators of this sprawling multi-floor complex.",
  "Princess is not fond of eating anything wet.",
  "This feisty resident of Faura Hall got his battle scars after fighting a crow.",
  "Hakaw runs the halls and offices of this building situated northeast of Faura.",
  "Hakaw, though not a picky cat, needs a chilly drink to feel refreshed.",
  "Dongyan loves people-watching atop his perch in this building.",
  "Liver spread is the ideal snack of choice for this MVP resident.",
  "Schmitt Hall is home to this clingy Catenean, named after a seafood dimsum classic.",
  "Ponpon's youthful and curious nature usually gets him in trouble.",
];

const answerKey = {
  Picture: {
    Dongyan: "/assets/cats/new/dongyanCompressed.webp",
    Hakaw: "/assets/cats/new/hakawCompressed.webp",
    OneEye: "/assets/cats/new/oneeyeCompressed.webp",
    Ponpon: "/assets/cats/new/ponponCompressed.webp",
    princess: "/assets/cats/new/princessCompressed.webp",
  },
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

const initialAnswers = {
  Picture: {
    Dongyan: "",
    Hakaw: "",
    OneEye: "",
    Ponpon: "",
    princess: "",
  },
  Location: {
    Dongyan: null,
    Hakaw: null,
    OneEye: null,
    Ponpon: null,
    Princess: null,
  },
  Quirk: {
    Dongyan: "",
    Hakaw: "",
    OneEye: "",
    Ponpon: "",
    Princess: "",
  },
  Personality: {
    Dongyan: "",
    Hakaw: "",
    OneEye: "",
    Ponpon: "",
    Princess: "",
  },
  "Fave Spot": {
    Dongyan: "",
    Hakaw: "",
    OneEye: "",
    Ponpon: "",
    Princess: "",
  },
  "Fave Food": {
    Dongyan: "",
    Hakaw: "",
    OneEye: "",
    Ponpon: "",
    Princess: "",
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

function OptionsModal({ trait, cat, options, closeOptionsModal, setAnswer }) {
  function onOptionClick(answer) {
    setAnswer(trait, cat, answer);
    closeOptionsModal();
  }

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
            <button
              onClick={() => onOptionClick(option)}
              className={styles.optionButton}
            >
              {["Location", "Picture"].includes(trait) ? (
                <img
                  src={option}
                  className={`${trait == "Location" ? styles.locationBtn : styles.picBtn}`}
                />
              ) : (
                option
              )}
            </button>
          ))}
      </section>
    </section>
  );
}

export function GameTable({ openOptionsModal, hasAnswer, getAnswer }) {
  const catNames = ["Dongyan", "Hakaw", "One Eye", "Ponpon", "Princess"];
  return (
    <section className={styles.gameTable}>
      {catNames.map((name, ix) => (
        <button
          onClick={() => openOptionsModal(name, "Picture")}
          key={`${name}-pic`}
          style={{
            gridColumn: ix + 2,
            background: hasAnswer("Picture", name)
              ? `no-repeat center / cover url(${getAnswer("Picture", name)})`
              : "#d9d9d9",
          }}
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
          {hasAnswer("Location", name) ? (
            <img
              src={getAnswer("Location", name)}
              style={{ maxHeight: "70%", maxWidth: "80%" }}
            />
          ) : (
            <img src={House} />
          )}
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
          {hasAnswer("Quirk", name) ? (
            <p>{getAnswer("Quirk", name)}</p>
          ) : (
            <img src={Paw} />
          )}
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
          {hasAnswer("Personality", name) ? (
            <p>{getAnswer("Personality", name)}</p>
          ) : (
            <img src={Cat} />
          )}
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </button>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Spot</h1>
      </section>
      {catNames.map((name) => (
        <button
          key={`spot-${name}`}
          onClick={() => openOptionsModal(name, "Fave Spot")}
          className={styles.catCell}
        >
          {hasAnswer("Fave Spot", name) ? (
            <p>{getAnswer("Fave Spot", name)}</p>
          ) : (
            <img src={Box} />
          )}
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </button>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Food</h1>
      </section>
      {catNames.map((name) => (
        <button
          key={`food-${name}`}
          onClick={() => openOptionsModal(name, "Fave Food")}
          className={styles.catCell}
        >
          {hasAnswer("Fave Food", name) ? (
            <p>{getAnswer("Fave Food", name)}</p>
          ) : (
            <img src={Fish} style={{ height: "50%" }} />
          )}
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </button>
      ))}
    </section>
  );
}

// have to make this because the timer keeps shuffling
// the options every second
const gameOptions = {
  Picture: shuffle(Object.values(answerKey["Picture"])),
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
  const [answers, setAnswers] = useState(initialAnswers);
  const { minutes, seconds } = useStopwatch({ autoStart: true });

  function openOptionsModal(cat, trait) {
    setCurrentCat(cat);
    setCurrentTrait(trait);
    setShowOptionsModal(true);
  }

  function closeOptionsModal() {
    setShowOptionsModal(false);
  }

  function setAnswer(trait, cat, answer) {
    let newAnswers = { ...answers };
    newAnswers[trait][cat] = answer;
    setAnswers(newAnswers);
  }

  function hasAnswer(trait, cat) {
    return answers[trait][cat] && answers[trait][cat].length > 0;
  }

  function getAnswer(trait, cat) {
    return answers[trait][cat];
  }

  return (
    <section className={styles.gameArea}>
      <GameTable
        openOptionsModal={openOptionsModal}
        hasAnswer={hasAnswer}
        getAnswer={getAnswer}
      />
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
        <section className={styles.checklist}>
          <ul>
            {clues.map((clue) => (
              <li>
                <p>{clue}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
      {showOptionsModal && (
        <OptionsModal
          trait={currentTrait}
          cat={currentCat}
          options={getOptionsFromTrait(currentTrait)}
          closeOptionsModal={closeOptionsModal}
          setAnswer={setAnswer}
        />
      )}
    </section>
  );
}
