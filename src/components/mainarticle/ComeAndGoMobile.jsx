import styles from "../../styles/ComeAndGoMobile.module.css";
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
        <div className={styles.centerImageWrapper}>
          <img src={cloudCat} />
        </div>
        <p className={styles.quote}>
          These small things which are part of our experience, [...] they’re
          more important than we think. Sometimes, we only notice them when
          they're absent, [...] we realize how much we’ve missed them—how much
          of the experience they are
        </p>
        <p>Johnson says.</p>
        <p>
          The Cateneans stand as a testament to the human capacity to go above
          and beyond for animals. Resuello, Buenafe, Johnson, and the AGILA
          members are only among countless people who give animals the same
          value as fellow humans. The Ateneo community’s efforts of caring for
          the campus cats only concretize the importance of empathy and respect
          for other living beings. Be it animals or another human, the
          interconnectedness of the world’s inhabitants reflect a need for
          respect, kindness, and empathy to build safe communities for all.
        </p>
        <p className={styles.bigCloud}>
          <img src={cloud} className={styles.cloud} />
          <img src={cloud} className={styles.cloud} />
          <img src={cloud} className={styles.cloud} />
          <img src={bigCloud} />
          <p>
            Beyond attention and affection, love has manifested in the Ateneo
            community through a commitment to caring for the Cateneans and an
            acknowledgement of their value as living beings.
          </p>
        </p>
        <p>With reports by Gabrielle Christina A. Cortes</p>
      </div>
      <section className={styles.credits}>
        <div className={styles.grassCatContainer}>
          <img src={grass} className={styles.grass} />
          <img src={paopao} className={styles.paopao} />
          <div className={styles.navigationButtons}>
            <button>
              <a href="#">Back to Top</a>
            </button>
            <button onClick={() => setPage("map")}>Meet the cateneans!</button>
          </div>
        </div>
        <div className={styles.creditsNames}>
          <div>
            <h3>Written&nbsp;by</h3>
            <p>Isabel&nbsp;Victorino and Alyssa&nbsp;E.&nbsp;Duque</p>
          </div>
          <div>
            <h3>Photos&nbsp;by</h3>
            <p>need bylines no bylines</p>
          </div>
          <div>
            <h3>Designed&nbsp;by</h3>
            <p>
              Bea&nbsp;Gan, Juan&nbsp;Lacanienta, Frants&nbsp;Reyes, and
              Razel&nbsp;Tan
            </p>
          </div>
          <div>
            <h3>Developed&nbsp;by</h3>
            <p>
              Luigi&nbsp;Rodriguez, Ysabella&nbsp;B.&nbsp;Panghulan,
              Chesca&nbsp;Reyes, and Waleed&nbsp;Lugod
            </p>
          </div>
        </div>
      </section>
      <img src={brownEllipses} className={styles.brownEllipses} />
      <img src={brownEllipses} className={styles.brownEllipses} />
      <img src={bigHeart} className={styles.bigHeart} />
      <div className={styles.pawContainer}>
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
      </div>
      <div>
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
      </div>
    </main>
  );
};

export default ComeAndGo;
