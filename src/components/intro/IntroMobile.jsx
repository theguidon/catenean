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
      transition: { duration: 1, ease: easeInOut },
    },
    show: {
      opacity: 1,
      transition: { duration: 1, ease: easeInOut },
    },
  };
  return (
    <div id="start" className={styles.main}>
      <div className={`${styles.section} ${styles.section1}`}>
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ delayChildren: stagger(0.8) }}
          className={styles.text}
        >
          <motion.img
            variants={fadeVariants}
            src={ellipses1}
            alt=""
            className={styles.ellipses}
          />
          <motion.p variants={fadeVariants} style={{ marginBottom: "1em" }}>
            TINY PAWS and swaying tails are a common sight in nearly every
            hallway and corridor of the Ateneo.
          </motion.p>
          <motion.p variants={fadeVariants}>
            The Cateneans—as the community has affectionately called the campus
            cats—blend seamlessly among chattering students.
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
            Amid the daily bustle of the Loyola Heights campus, the Cateneans
            take solace in the tiniest nooks and crannies of buildings. These
            feline friends serve as an embodiment of comfort for Ateneans,
            earning a special place in the hearts of students, faculty, and
            staff alike.
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
              zIndex: 30,
            }}
            className={`${styles.polaroid} ${styles.catPhoto}`}
          />
        </div>
      </div>
    </div>
  );
}
