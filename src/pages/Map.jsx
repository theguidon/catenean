import styles from "../styles/Map.module.css";
import arete from "../assets/images/buildings/arete.svg";
import areteCat from "../assets/images/cats/illustrations/arete.svg";
import ctc from "../assets/images/buildings/ctc-som.svg";
import ctcCat from "../assets/images/cats/illustrations/ctc-som.svg";
import ears from "../assets/images/cats/illustrations/Ears.svg";
import { Link } from "react-router";

const CatButton = ({ label, slug, style }) => {
  return (
    <Link url={`/building/${slug}`} style={style}>
      <div className={styles.catButton}>
        <img src={ears} />
        <div>
          <p>
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
}

const Map = () => {
  const buildingData = {
    "arete": {
      position: { bottom: "22vh", left: "5vw" },
      building: arete,
      cat: { src: areteCat, style: { bottom: "-4vh", left: "-5vw" } },
      button: { label: "ARETÉ", style: { bottom: 0, right: "1vw" } }
    },
    "ctc-som": {
      position: { bottom: "22vh", right: "7vw" },
      building: ctc,
      cat: { src: ctcCat, style: { bottom: "-8vh", left: "-6vw" } },
      button: { label: "ctc-som", style: { bottom: "-2vh", right: "-1vw" } }
    },
  }
  return (
    <main className={styles.main}>
      {Object.entries(buildingData).map(([key, data]) => (
        <div key={key} className={styles.location} style={data.position}>
          <div>
            <img className={styles.building} src={data.building} />
            <img className={styles.cat} src={data.cat.src} style={data.cat.style} />
            <CatButton slug={data.button.slug} label={data.button.label} style={data.button.style} />
          </div>
        </div>
      ))}
    </main>
  );
}

export default Map;
