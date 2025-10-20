import styles from "../../styles/IntroDesktop.module.css";
import ellipses1 from "../../assets/images/intro/ellipses1.svg";
import ellipses2 from "../../assets/images/intro/ellipses2.svg";
import photos1 from "../../assets/images/intro/photos1.png";
import photos2 from "../../assets/images/intro/photos2.png";
import photo from "../../assets/images/intro/photo.png";
import line from "../../assets/images/intro/line.svg";
import hearts from "../../assets/images/intro/hearts.svg";
import cloud from "../../assets/images/cloud.svg";
import RBR from "../../assets/images/intro/RBR.svg";

export default function IntroDesktop() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={`${styles.text} ${styles.text1}`}>
          <img src={ellipses2} alt="" className={styles.ellipses} />
          <p>
            NOT EVERY home has a furry feline companion, but within the Loyola
            Heights campus, one is certain to encounter&nbsp;them.
          </p>
        </div>
        <div className={styles.graphics}>
          <img
            src={cloud}
            alt=""
            className={`${styles.cloud} ${styles.cloud1}`}
          />
          <img
            src={cloud}
            alt=""
            className={`${styles.cloud} ${styles.cloud2}`}
          />
          <img
            src={cloud}
            alt=""
            className={`${styles.cloud} ${styles.cloud3}`}
          />
        </div>
      </div>
      <div className={`${styles.section} ${styles.section2}`}>
        <div className={`${styles.text} ${styles.text2}`}>
          <img src={ellipses2} alt="" className={styles.ellipses} />
          <p>
            The Ateneo’s cast of cats are endearingly monikered as the
            “Cateneans”. They quietly comfort stressed students and employees
            with a single glance, stretch leisurely across guard’s desks,
            scamper casually along the walkways, or nap on the cafeteria chairs
            next to their human companions without a care in the&nbsp;world.
          </p>
        </div>
        <div className={styles.graphics}>
          <img src={photos1} alt="" className={styles.catPhotos1} />
          <img src={photos2} alt="" className={styles.catPhotos2} />
          <img src={hearts} alt="" className={styles.hearts} />
          <img src={photo} alt="" className={styles.catPhoto} />
          <img src={line} alt="" className={styles.line} />
          <img src={line} alt="" className={styles.line2} />
        </div>
      </div>
      <div className={`${styles.section} ${styles.section3}`}>
        <div className={`${styles.text} ${styles.text2}`}>
          <img src={ellipses2} alt="" className={styles.ellipses} />
          <p>
            Those who have pets know what it is like to show their animal
            friends off, to go above and beyond for them, to maintain their
            well-being, and to miss them sorely after long stretches
            of&nbsp;separation.
          </p>
        </div>
      </div>
      <div className={styles.graphics}>
        <img src={RBR} alt="" className={styles.RBR} />
      </div>
    </div>
  );
}
