import buildings from "../data/locations.json";
import styles from "../styles/BuildingWriteup.module.css";
import bg from "../assets/images/Background.svg";

export default function BuildingWriteup() {
  const data = buildings[0];
  return (
    <main
      className={styles.main}
      style={{
        background: `center / cover no-repeat url(${bg}), ${data.bgColor}`
      }}
    >
      <section className={styles.writeup}>
        <section className={styles.heading}>
          <img src={`src/assets/images/${data.bldgImage}`} />
          <section className={styles.titleCaption}>
            <h1 style={{ color: data.nameColor }}>{data.name}</h1>
            <h2 style={{ color: data.captionColor }}>{data.caption}</h2>
          </section>
        </section>
        <p className={styles.content}>
          {data.article}
        </p>
      </section>
    </main>
  );
}
