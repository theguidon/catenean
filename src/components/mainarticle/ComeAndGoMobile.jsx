import styles from "../../styles/ComeAndGoMobile.module.css";
import building from "../../assets/images/location-faura-building.svg";
import cloud1 from "../../assets/images/cloud1.svg";
import cloud2 from "../../assets/images/cloud2.svg";
import cat1 from "../../assets/images/cats/17.png";
import heart1 from "../../assets/images/heart1.svg";

const ComeAndGo = ({ setPage }) => {
  return (
    <main className={styles.main}>
      <div className={styles.mainArticle}>
        <h3>Cats come and go</h3>
        <img className={styles.building} src={building} />

        <p>
          Encountering a Catenean is practically unavoidable, with one or two
          always roaming around each corner.
        </p>
        <p>
          Johnson says that a lot of the Cateneans were born and raised on
          campus. Cateneans have learned to acquaint themselves with the areas
          they frequent and the humans who greet them.
        </p>
        <p>
          “Pao-Pao was here before a lot of students came, and he stayed here
          after a lot [had] graduated,” Johnson shares. As years go on, many of
          those familiar faces do not return, but the Cateneans remain. Some of
          them are lucky enough to reach old age, some succumb to sickness, and
          some unfortunately fall victim to human callousness.
        </p>

        <div className={styles.cloudWrapper}>
          <img className={styles.cloud1} src={cloud1} />
          <img className={styles.cloud2} src={cloud2} />
          <div className={styles.cat1}>
            <img className={styles.cat1} src={cat1} />
            <img className={styles.heart1} src={heart1} />
          </div>
        </div>

        <div style={{ backgroundColor: "#FFFAE9", padding: "1rem 0 1rem" }}>
          {" "}
          <p>
            Johnson recounts the day Pao-Pao was run over because of “the
            reckless imprudence of drivers.” He first heard the news of
            Pao-Pao’s passing before his 5:00 PM class. When he came back at
            6:30 PM, he recalled a crowd of around 70 students gathering by the
            Schmitt Hall before they headed to the SOM Forest, where Pao-Pao was
            buried.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ComeAndGo;
