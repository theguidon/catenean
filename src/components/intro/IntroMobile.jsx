import styles from "../../styles/IntroMobile.module.css";
import ellipses1 from "../../assets/images/intro/ellipses1.svg";
import ellipses2 from "../../assets/images/intro/ellipses2.svg";
import photos1 from "../../assets/images/intro/photos1.png";
import photos2 from "../../assets/images/intro/photos2.png";
import photo from "../../assets/images/intro/photo.png";
import hearts from "../../assets/images/intro/hearts.svg";
import cloud from "../../assets/images/cloud.svg";
import RBR from "../../assets/images/intro/RBR.svg";
import cat from "../../assets/images/intro/cat.svg";
import grass from "../../assets/images/background-grass.svg";
import { easeInOut, motion, stagger } from "motion/react";

export default function IntroMobile() {
  const fadeVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 1, ease: easeInOut }
    },
    show: {
      opacity: 1,
      transition: { duration: 1, ease: easeInOut }
    },
  }
  return (
    <div id="start" className={styles.main}>
      <div className={`${styles.section} ${styles.section1}`}>
        <motion.div initial="hidden" animate="show" transition={{ delayChildren: stagger(0.8) }} className={styles.text}>
          <motion.img variants={fadeVariants} src={ellipses1} alt="" className={styles.ellipses} />
          <motion.p variants={fadeVariants} >
            NOT EVERY home has a furry feline companion, but within the Loyola
            Heights campus, one is certain to encounter&nbsp;them.
          </motion.p>
        </motion.div>
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
          <img src={grass} alt="" className={styles.grass} />
          <img src={RBR} alt="" className={styles.RBR} />
          <motion.img
            src={cat}
            alt=""
            className={styles.cat}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          />
        </div>
      </div>
      <div className={`${styles.section} ${styles.section2}`}>
        <div className={styles.text}>
          <img src={ellipses2} alt="" className={styles.ellipses} />
          <p>
            The Ateneo’s cast of cats are endearingly monikered as the
            “Cateneans”. They quietly comfort stressed students and employees
            with a single glance, stretch leisurely across guard’s desks,
            scamper casually along the walkways, or nap on the cafeteria chairs
            next to their human companions without a care in the&nbsp;world.
          </p>
          <br />
          <p>
            Those who have pets know what it is like to show their animal
            friends off, to go above and beyond for them, to maintain their
            well-being, and to miss them sorely after long stretches
            of&nbsp;separation.
          </p>
          <br />
          <p>
            In an enduring display of love, students, faculty, and staff alike
            show that love for animals is just as important as love for
            anyone&nbsp;else.
          </p>
        </div>
        <div className={styles.graphics}>
          <img
            src={photos1}
            alt=""
            className={`${styles.polaroid} ${styles.catPhotos1}`}
          />
          <img
            src={photos2}
            alt=""
            className={`${styles.polaroid} ${styles.catPhotos2}`}
          />
          <img src={hearts} alt="" className={styles.hearts} />
          <img
            src={photo}
            alt=""
            style={{
              zIndex: 30
            }}
            className={`${styles.polaroid} ${styles.catPhoto}`}
          />
        </div>
      </div>
    </div>
  );
}
