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
import { BgMusic3 } from "../hooks/sounds.jsx";
import { useState } from "react";
import { shuffle } from "remeda";
import { useStopwatch } from "react-timer-hook";
import { Link } from "react-router";

const catNames = ["Dongyan", "Hakaw", "One Eye", "Ponpon", "Princess"];

function isInSameColumn(answers, traits) {
  // check if a set of traits is under the same cat
  for (const cat of catNames) {
    let allTraitsFulfilled = true;
    for (const trait in traits) {
      if (answers[trait][cat].answer !== traits[trait]) {
        allTraitsFulfilled = false;
        break;
      }
    }
    if (allTraitsFulfilled) {
      return true;
    }
  }
  return false;
}

const clues = [
  {
    text: "The lazy cat lives in the building beside the Catenean named after a dumpling.",
    clearCondition: (answers) =>
      answers["Personality"]["Dongyan"].answer === "Lazy" ||
      answers["Personality"]["One Eye"].answer === "Lazy",
  },
  {
    text: "This curious cat is a resident of the modern building that's home to artists.",
    clearCondition: (answers) =>
      isInSameColumn(answers, { Personality: "Curious", Location: Arete }),
  },
  {
    text: "Princess loves riding the elevators of this sprawling multi-floor complex.",
    clearCondition: (answers) =>
      answers["Quirk"]["Princess"].answer === "Rides the elevator" &&
      answers["Location"]["Princess"].answer === CTCSOM,
  },
  {
    text: "Princess is not fond of eating anything wet.",
    clearCondition: (answers) =>
      answers["Fave Food"]["Princess"].answer &&
      answers["Fave Food"]["Princess"].answer.length > 0 &&
      answers["Fave Food"]["Princess"].answer !== "Wet food",
  },
  {
    text: "This feisty resident of Faura Hall got his battle scars after fighting a crow.",
    clearCondition: (answers) =>
      isInSameColumn(answers, { Location: Faura, Quirk: "Fought a crow" }),
  },
  {
    text: "Hakaw runs the halls and offices of this building situated northeast of Faura.",
    clearCondition: (answers) =>
      answers["Fave Spot"]["Hakaw"].answer === "Department offices" &&
      answers["Location"]["Hakaw"].answer === "Scmitt",
  },
  {
    text: "Hakaw, though not a picky cat, needs a chilly drink to feel refreshed.",
    clearCondition: (answers) =>
      answers["Fave Food"]["Hakaw"].answer === "Eats anything" &&
      answers["Quirk"]["Hakaw"].answer == "Drinks cold water",
  },
  {
    text: "Dongyan loves people-watching atop his perch in this building.",
    clearCondition: (answers) =>
      answers["Fave Spot"]["Dongyan"].answer === "Guard's table" &&
      answers["Location"]["Dongyan"].answer === "MVP",
  },
  {
    text: "Liver spread is the ideal snack of choice for this MVP resident.",
    clearCondition: (answers) =>
      isInSameColumn(answers, { "Fave Food": "Liver spread", Location: MVP }),
  },
  {
    text: "Schmitt Hall is home to this clingy Catenean, named after a seafood dimsum classic.",
    clearCondition: (answers) =>
      answers["Location"]["Hakaw"].answer === Schmitt &&
      answers["Personality"]["Hakaw"].answer === "Clingy",
  },
  {
    text: "Ponpon's youthful and curious nature usually gets him in trouble.",
    clearCondition: (answers) =>
      answers["Quirk"]["Ponpon"].answer === "The youngest" &&
      answers["Personality"]["Ponpon"].answer === "Curious",
  },
];

const answerKey = {
  Picture: {
    Dongyan: "/assets/cats/new/dongyanCompressed.webp",
    Hakaw: "/assets/cats/new/hakawCompressed.webp",
    "One Eye": "/assets/cats/new/oneeyeCompressed.webp",
    Ponpon: "/assets/cats/new/ponponCompressed.webp",
    Princess: "/assets/cats/new/princessCompressed.webp",
  },
  Location: {
    Dongyan: MVP,
    Hakaw: Schmitt,
    "One Eye": Faura,
    Ponpon: Arete,
    Princess: CTCSOM,
  },
  Quirk: {
    Dongyan: "Stubby tail",
    Hakaw: "Drinks cold water",
    "One Eye": "Fought a crow",
    Ponpon: "The youngest",
    Princess: "Rides the elevator",
  },
  Personality: {
    Dongyan: "Lazy",
    Hakaw: "Clingy",
    "One Eye": "Feisty",
    Ponpon: "Curious",
    Princess: "Sassy",
  },
  "Fave Spot": {
    Dongyan: "Guard's table",
    Hakaw: "Department offices",
    "One Eye": "Building Facade",
    Ponpon: "Parking lot",
    Princess: "Elevators",
  },
  "Fave Food": {
    Dongyan: "Liver spread",
    Hakaw: "Eats anything",
    "One Eye": "Kibble",
    Ponpon: "Wet food",
    Princess: "Dry food",
  },
};

const initialAnswers = {
  Picture: {
    Dongyan: { answer: "", correct: false },
    Hakaw: { answer: "", correct: false },
    "One Eye": { answer: "", correct: false },
    Ponpon: { answer: "", correct: false },
    Princess: { answer: "", correct: false },
  },
  Location: {
    Dongyan: { answer: null, correct: false },
    Hakaw: { answer: null, correct: false },
    "One Eye": { answer: null, correct: false },
    Ponpon: { answer: null, correct: false },
    Princess: { answer: null, correct: false },
  },
  Quirk: {
    Dongyan: { answer: "", correct: false },
    Hakaw: { answer: "", correct: false },
    "One Eye": { answer: "", correct: false },
    Ponpon: { answer: "", correct: false },
    Princess: { answer: "", correct: false },
  },
  Personality: {
    Dongyan: { answer: "", correct: false },
    Hakaw: { answer: "", correct: false },
    "One Eye": { answer: "", correct: false },
    Ponpon: { answer: "", correct: false },
    Princess: { answer: "", correct: false },
  },
  "Fave Spot": {
    Dongyan: { answer: "", correct: false },
    Hakaw: { answer: "", correct: false },
    "One Eye": { answer: "", correct: false },
    Ponpon: { answer: "", correct: false },
    Princess: { answer: "", correct: false },
  },
  "Fave Food": {
    Dongyan: { answer: "", correct: false },
    Hakaw: { answer: "", correct: false },
    "One Eye": { answer: "", correct: false },
    Ponpon: { answer: "", correct: false },
    Princess: { answer: "", correct: false },
  },
};

function CatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.catButton}
      style={{ width: "12em", margin: 0 }}
    >
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

// might make state a reducer
// make component for the cells im kms
export function GameTable({
  openOptionsModal,
  hasAnswer,
  getAnswer,
  checkAnswer,
  submitClicked,
}) {
  function GameCell({ trait, name, placeholder }) {
    return (
      <button
        key={`${trait}-${name}`}
        onClick={() => openOptionsModal(name, trait)}
        className={`${styles.catCell} ${submitClicked ? (checkAnswer(trait, name) ? styles.correctCell : styles.wrongCell) : ""}`}
      >
        {hasAnswer(trait, name) ? (
          trait === "Location" ? (
            <img
              src={getAnswer(trait, name)}
              style={{ maxHeight: "70%", maxWidth: "80%" }}
            />
          ) : (
            <p>{getAnswer(trait, name)}</p>
          )
        ) : (
          <img
            src={placeholder}
            style={{ height: placeholder === Fish ? "50%" : "70%" }}
          />
        )}
        <div className={styles.catCellHover}>
          <p>Guess Answer</p>
        </div>
      </button>
    );
  }

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
          className={`${styles.picFrame} ${submitClicked ? (checkAnswer("Picture", name) ? styles.correctFrame : styles.wrongFrame) : ""}`}
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
        <GameCell trait="Location" name={name} placeholder={House} />
      ))}
      <section className={styles.catHeader}>
        <h1>Quirk</h1>
      </section>
      {catNames.map((name) => (
        <GameCell trait="Quirk" name={name} placeholder={Paw} />
      ))}
      <section className={styles.catHeader}>
        <h1>Personality</h1>
      </section>
      {catNames.map((name) => (
        <GameCell trait="Personality" name={name} placeholder={Cat} />
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Spot</h1>
      </section>
      {catNames.map((name) => (
        <GameCell trait="Fave Spot" name={name} placeholder={Box} />
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Food</h1>
      </section>
      {catNames.map((name) => (
        <GameCell trait="Fave Food" name={name} placeholder={Fish} />
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

function Timer() {
  const { minutes, seconds } = useStopwatch({ autoStart: true });
  return (
    <p className={styles.timer}>
      {padNumber(minutes)}:{padNumber(seconds)}
    </p>
  );
}

export default function Game() {
  const [currentCat, setCurrentCat] = useState("Dongyan");
  const [currentTrait, setCurrentTrait] = useState("Fave Spot");
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [answers, setAnswers] = useState(initialAnswers);
  const [submitClicked, setSubmitClicked] = useState(false);

  function openOptionsModal(cat, trait) {
    setCurrentCat(cat);
    setCurrentTrait(trait);
    setShowOptionsModal(true);
  }

  function closeOptionsModal() {
    setShowOptionsModal(false);
  }

  function clearExistingAnswer(trait, cat, answer) {
    // if answer exists in another cat, clear it first
    let newAnswers = { ...answers };
    for (const otherCat in newAnswers[trait]) {
      if (cat !== otherCat && newAnswers[trait][otherCat].answer === answer) {
        newAnswers[trait][otherCat].answer = null;
      }
    }
    return newAnswers;
  }

  function setAnswer(trait, cat, answer) {
    clearExistingAnswer(trait, cat, answer);
    let newAnswers = { ...answers };
    newAnswers[trait][cat].answer = answer;
    setAnswers(newAnswers);
  }

  function hasAnswer(trait, cat) {
    return answers[trait][cat].answer && answers[trait][cat].answer.length > 0;
  }

  function getAnswer(trait, cat) {
    return answers[trait][cat].answer;
  }

  function checkAllAnswers() {
    let newAnswers = { ...answers };
    for (const trait in answers) {
      for (const cat in answers[trait]) {
        const isCorrect = answers[trait][cat].answer === answerKey[trait][cat];
        newAnswers[trait][cat].correct = isCorrect;
      }
    }

    setAnswers(newAnswers);
  }

  // sorry nalang
  function isCorrect(trait, cat) {
    return answers[trait][cat].correct;
  }

  return (
    <section className={styles.gameArea}>
      <BgMusic3 />
      <GameTable
        openOptionsModal={openOptionsModal}
        hasAnswer={hasAnswer}
        getAnswer={getAnswer}
        checkAnswer={isCorrect}
        submitClicked={submitClicked}
      />
      <section className={styles.menuSide}>
        <section className={styles.gameOpts}>
          <Timer />
          <button className={styles.instructionBtn}>
            <img src={QMark} />
          </button>
          <section style={{ display: "flex", alignItems: "center" }}>
            <Link
              to="/"
              className={styles.exitBtn}
              style={{ color: "#205950" }}
            >
              x
            </Link>
            <CatButton
              onClick={() => {
                checkAllAnswers();
                setSubmitClicked(true);
              }}
            />
          </section>
        </section>
        <section className={styles.checklist}>
          <ul>
            {clues.map((clue) => (
              <li
                className={
                  clue.clearCondition(answers) ? styles.clearedClue : ""
                }
              >
                <p>{clue.text}</p>
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
