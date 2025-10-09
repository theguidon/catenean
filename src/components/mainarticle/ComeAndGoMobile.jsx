import styles from "../../styles/ComeAndGoMobile.module.css";
import building from "../../assets/images/location-faura-building.svg";
import squiggle from "../../assets/images/squiggle.svg";
import MapFold from "../../assets/images/location-map-fold.svg";
import cat1 from "../../assets/images/cats/2.jpeg";
import cat2 from "../../assets/images/cats/7.jpeg";
import cat3 from "../../assets/images/cats/6.jpeg";
import photoCardsLine from "../../assets/images/photo-cards-line.svg";
import helloCat from "../../assets/images/hello-cat.png";
import cloud from "../../assets/images/cloud.svg";
import heartCatSmall1 from "../../assets/images/heart-cat-small-1.png";
import heartCatSmall2 from "../../assets/images/heart-cat-small-2.png";
import heartCatSmall3 from "../../assets/images/heart-cat-small-3.png";
import heartCatBig from "../../assets/images/heart-cat-big.png";
import circleCat from "../../assets/images/circle-cat.png";
import mag1 from "../../assets/images/mag1.png";
import mag2 from "../../assets/images/mag2.png";
import heartHighFive from "../../assets/images/heart-high-five.svg";
import cloudCat from "../../assets/images/cloud-cat.png";
import bigCloud from "../../assets/images/big-cloud.png";
import grass from "../../assets/images/grass.png";
import paopao from "../../assets/images/paopao.png";
import brownEllipses from "../../assets/images/brown-ellipses.svg";
import bigHeart from "../../assets/images/big-heart.svg";
import threeCats from "../../assets/images/three-cats.png";
import paw from "../../assets/images/paw.svg";
import heart from "../../assets/images/heart.svg";

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

        <p>
          Johnson recounts the day Pao-Pao was run over because of “the reckless
          imprudence of drivers.” He first heard the news of Pao-Pao’s passing
          before his 5:00 PM class. When he came back at 6:30 PM, he recalled a
          crowd of around 70 students gathering by the Schmitt Hall before they
          headed to the SOM Forest, where Pao-Pao was buried.
        </p>
      </div>
    </main>
  );
};

export default ComeAndGo;
