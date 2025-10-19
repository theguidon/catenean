import styles from "../../styles/IntroDesktop.module.css";
import ellipses1 from "../../assets/images/intro/ellipses1.svg";
import ellipses2 from "../../assets/images/intro/ellipses2.svg";
import photos from "../../assets/images/intro/photos.png";
import photo from "../../assets/images/intro/photo.png";
import line from "../../assets/images/intro/line.svg";

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
        <div className={styles.graphics}></div>
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
          <img src={photos} alt="" className={styles.catPhotos} />
          <img src={photo} alt="" className={styles.catPhoto} />
          <img src={line} alt="" className={styles.line} />
        </div>
      </div>
      <div className={`${styles.section} ${styles.section2}`}>
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
    </div>
  );
}
