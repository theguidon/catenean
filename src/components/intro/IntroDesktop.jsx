import styles from "../../styles/IntroDesktop.module.css";
import cat from "../../assets/images/Cat.svg";
import photos1 from "../../assets/images/intro/photos1.png";
import photos2 from "../../assets/images/intro/photos2.png";
import photo from "../../assets/images/intro/photo.png";
import line from "../../assets/images/intro/line.svg";
import hearts from "../../assets/images/intro/hearts.svg";
import cloud from "../../assets/images/cloud.svg";
import RBR from "../../assets/images/intro/RBR.svg";
import CatBowl from "../../assets/images/Food Bowl.svg";
import { easeInOut, easeOut, motion, spring } from "motion/react";
import { BsFillMouseFill } from "react-icons/bs";
import Ellipses from "../ellipses";
import CatHouse from "../../assets/images/Cat House.svg";
import Bush from "../../assets/images/bush.svg";

export default function IntroDesktop() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Ellipses style={{ height: "80vh", width: "50vw" }}>
          <p style={{ margin: 0, padding: 0 }}>
            <strong>TINY PAWS</strong> and swaying tails are a common sight in
            nearly every hallway and corridor of the Ateneo. The{" "}
            <em>Cateneans</em>&mdash;as the community has affectionately called
            the campus cats&mdash;blend seamlessly among chattering students.
          </p>
        </Ellipses>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: easeInOut, duration: 0.5, delay: 0.25 }}
          className={styles.graphics}
        >
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
        </motion.div>
      </div>
      <div className={`${styles.section} ${styles.section2}`}>
        <Ellipses style={{ height: "80vh", width: "50vw" }}>
          <p style={{ margin: 0, padding: 0 }}>
            Amid the daily bustle of the Loyola Heights campus, the Cateneans
            take solace in the tiniest nooks and crannies of buildings.
          </p>
          <p style={{ margin: 0, marginTop: "2em", padding: 0 }}>
            These feline friends serve as an embodiment of comfort for Ateneans,
            earning a special place in the hearts of students, faculty, and
            staff alike.
          </p>
        </Ellipses>
        <div className={styles.graphics}>
          <img src={hearts} alt="" className={styles.hearts} />
          <img
            src={photo}
            alt=""
            className={`${styles.polaroid} ${styles.catPhoto}`}
          />
          <img src={line} alt="" className={styles.line} />
          <img src={line} alt="" className={styles.line2} />
        </div>
      </div>
      <div className={styles.graphics}>
        <motion.img
          initial={{ left: -100 }}
          animate={{ left: -500 }}
          transition={{ duration: 1.8, ease: easeOut }}
          src={CatHouse}
          style={{ bottom: "5%", position: "absolute", zIndex: 15 }}
        />
        <motion.img
          src={cat}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 50 }}
          transition={{ ease: easeOut, duration: 1.2 }}
          style={{
            position: "absolute",
            height: "30vh",
            bottom: "8vh",
            left: 40,
            zIndex: 20,
          }}
        />
        <motion.img
          src={RBR}
          initial={{ left: -600 }}
          animate={{ left: -800 }}
          transition={{ duration: 1.5, ease: easeOut }}
          alt=""
          className={styles.RBR}
        />
        <motion.img
          src={CatBowl}
          animate={{ scale: [1, 0] }}
          transition={{
            ease: easeInOut,
            duration: 0.25,
          }}
          style={{ bottom: "4%", left: 400, zIndex: 15, position: "absolute" }}
        />
        <motion.img
          src={Bush}
          initial={{ left: -200 }}
          animate={{ left: -500 }}
          transition={{ duration: 2, ease: easeOut }}
          style={{
            position: "absolute",
            bottom: "-5%",
            left: -200,
            height: "20vh",
            zIndex: 15,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: easeInOut, duration: 0.5 }}
          className={styles.photos}
        >
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
        </motion.div>
      </div>
      <div className={styles.scrollIndicator}>
        <BsFillMouseFill size={32} />
        <p>Scroll down to read the article</p>
      </div>
    </div>
  );
}
