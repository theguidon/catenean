import styles from "../styles/Map.module.css";
import arete from "../assets/images/buildings/arete.svg";
import areteCat from "../assets/images/cats/illustrations/arete.svg";
import ctc from "../assets/images/buildings/ctc-som.svg";
import ctcCat from "../assets/images/cats/illustrations/ctc-som.svg";
import faura from "../assets/images/buildings/faura.svg";
import fauraCat from "../assets/images/cats/illustrations/faura.svg";
import mvp from "../assets/images/buildings/mvp.svg";
import mvpCat from "../assets/images/cats/illustrations/mvp.svg";
import schmitt from "../assets/images/buildings/schmitt.svg";
import schmittCat from "../assets/images/cats/illustrations/schmitt.svg";
import ears from "../assets/images/cats/illustrations/Ears.svg";
import { Link } from "react-router";

const CatButton = ({ label, slug, style }) => {
  return (
    <Link to={`/location/${slug}`} style={style}>
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
      position: { bottom: "15%", left: "8%" },
      building: arete,
      cat: { src: areteCat, style: { bottom: "-4vh", left: "-5vw" } },
      button: { label: "ARETÉ", style: { bottom: 0, right: "1vw" } }
    },
    "ctc-som": {
      position: { bottom: "15%", right: "6%" },
      building: ctc,
      cat: { src: ctcCat, style: { bottom: "-8vh", left: "-6vw" } },
      button: { label: "ctc-som", style: { bottom: "-2vh", right: "-1vw" } }
    },
    "faura": {
      position: { top: "45%", right: "31%" },
      building: faura,
      cat: { src: fauraCat, style: { bottom: "-8vh", left: "-5vw" } },
      button: { label: "faura", style: { bottom: "-5vh", right: "-1vw" } }
    },
    "mvp": {
      position: { top: "15%", right: "32%" },
      building: mvp,
      cat: { src: mvpCat, style: { bottom: "-13vh", left: "-8vw" } },
      button: { label: "MVP", style: { bottom: "-11vh", right: "-1vw" } }
    },
    "schmitt": {
      position: { top: "12%", right: "5%" },
      building: schmitt,
      cat: { src: schmittCat, style: { bottom: "-22vh", left: "-8vw" } },
      button: { label: "schmitt", style: { bottom: "-16vh", right: "-1vw" } }
    },
  }
  return (
    <main className={styles.main}>
      <div className={styles.cloud}>
        <p>Visit each cat to learn about the fascinating tales they hold about campus life. Discover the hidden nooks, legendary landmarks, and cherished memories through the eyes of our beloved feline friends and their loving partners, the caretakers.</p>
      </div>
      {Object.entries(buildingData).map(([key, data]) => (
        <div key={key} className={styles.location} style={data.position}>
          <div>
            <img className={styles.building} src={data.building} />
            <img className={styles.cat} src={data.cat.src} style={data.cat.style} />
            <CatButton slug={key} label={data.button.label} style={data.button.style} />
          </div>
        </div>
      ))}
    </main>
  );
}

export default Map;
