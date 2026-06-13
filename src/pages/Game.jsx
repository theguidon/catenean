import styles from "../styles/game.module.css";
import Pin from "../assets/images/game/placeholders/Pin.svg";
import Star from "../assets/images/game/placeholders/Star.svg";
import Paw from "../assets/images/game/placeholders/Paw.svg";
import House from "../assets/images/game/placeholders/House.svg";
import Fish from "../assets/images/game/placeholders/Fish.svg";

export default function Game() {
  const catNames = ["Dongyan", "Hakaw", "One Eye", "Ponpon", "Princess"];
  return (
    <section className={styles.gameTable}>
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
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Quirk</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Star} />
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Personality</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Paw} />
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Spot</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Pin} />
        </section>
      ))}
      <section className={styles.catHeader}>
        <h1>Fave Food</h1>
      </section>
      {Array.from({ length: 5 }).map((ix) => (
        <section key={`location-${ix}`} className={styles.catCell}>
          <img src={Pin} />
        </section>
      ))}
    </section>
  );
}
