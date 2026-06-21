import styles from "../styles/game.module.css";
import Box from "../assets/images/game/placeholders/Box.svg";
import Cat from "../assets/images/game/placeholders/Cat.svg";
import Paw from "../assets/images/game/placeholders/Paw.svg";
import House from "../assets/images/game/placeholders/House.svg";
import Fish from "../assets/images/game/placeholders/Fish.svg";
import QMark from "../assets/images/game/qmark.svg";
import ears from "../assets/images/cats/illustrations/Ears.svg";

const AnswerKey = {
  Location: {
    Dongyan: "MVP",
    Hakaw: "Schmitt",
    OneEye: "Faura",
    Ponpon: "Aretè",
    Princess: "CTC-SOM",
  },
  Quirk: {
    Dongyan: "Stubby tail",
    Hakaw: "Drinks cold water",
    OneEye: "Fought a crow",
    Ponpon: "The youngest",
    Princess: "Rides the elevator",
  },
  Personality: {
    Dongyan: "Stubby tail",
    Hakaw: "Drinks cold water",
    OneEye: "Fought a crow",
    Ponpon: "The youngest",
    Princess: "Rides the elevator",
  },
  "Favorite Spot": {
    Dongyan: "Guard's table",
    Hakaw: "Department offices",
    OneEye: "Building Facade",
    Ponpon: "Parking lot",
    Princess: "Elevators",
  },
  "Favorite Food": {
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

function OptionsModal() {
  return (
    <section className={`${styles.fullScreenLayer} ${styles.optionsLayer}`}>
      <div
        className={styles.fullScreenLayer}
        style={{ background: "rgba(0,0,0,0.3)" }}
      />
      <section className={styles.optionsLabel}></section>
      <section className={styles.optionsModal}></section>
    </section>
  );
}

export function GameTable() {
  const catNames = ["Dongyan", "Hakaw", "One Eye", "Ponpon", "Princess"];
  return (
    <section className={styles.gameTable}>
      {Array.from({ length: catNames.length }).map((_, ix) => (
        <div style={{ gridColumn: ix + 2 }} className={styles.picFrame} />
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
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={House} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Quirk</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Paw} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Personality</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Cat} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Spot</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Box} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Food</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Fish} style={{ height: "50%" }} />
          <div className={styles.catCellHover}>
            <p>Guess Answer</p>
          </div>
        </section>
      ))}
    </section>
  );
}

export default function Game() {
  return (
    <section className={styles.gameArea}>
      <GameTable />
      <section className={styles.menuSide}>
        <section className={styles.gameOpts}>
          <p className={styles.timer}>00:00</p>
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
      <OptionsModal />
    </section>
  );
}
