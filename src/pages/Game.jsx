import styles from "../styles/game.module.css";
import Pin from "../assets/images/game/placeholders/Pin.svg";
import Star from "../assets/images/game/placeholders/Star.svg";
import Paw from "../assets/images/game/placeholders/Paw.svg";
import House from "../assets/images/game/placeholders/House.svg";
import Fish from "../assets/images/game/placeholders/Fish.svg";

export default function Game() {
  const catNames = ["Dongyan", "Hakaw", "One Eye", "Ponpon", "Princess"];
  const categories = [
    { name: "Location", icon: Pin },
    { name: "Quirk", icon: Star },
    { name: "Personality", icon: Paw },
    { name: "Fave Spot", icon: House },
    { name: "Fave Food", icon: Fish },
  ];
  const CategoryRow = (category) => {
    return (
      <>
        <h1 className={category.catHeader}>{category}</h1>
        <section className={category.catCell}>
          <img src={category.icon} />
        </section>
      </>
    );
  };
  return (
    <section className={styles.gameTable}>
      {catNames.map((name) => (
        <h1 key={name} className={styles.nameHeader}>
          {name}
        </h1>
      ))}
      {categories.map((category) => (
        <CategoryRow key={category.name} category={category} />
      ))}
    </section>
  );
}
