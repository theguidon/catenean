import styles from "../styles/game.module.css";
import ears from "../assets/images/cats/illustrations/Ears.svg";
import CatHouse from "../assets/images/Cat House.svg";
import CatSitting from "../assets/images/Cat (Sitting).svg";
import FoodBowl from "../assets/images/Food Bowl.svg";
import { Link } from "react-router";
import {
  motion,
  AnimatePresence,
  easeInOut,
  MotionConfig,
  spring,
} from "motion/react";

function EllipseBG() {
  const transitionOps = { ease: easeInOut, duration: 0.15 };

  return (
      <AnimatePresence>
        <motion.div
          key="ellipse-outer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
    transition={ transitionOps }
          className={styles.ellipseOuter}
        />
        <motion.div
          key="ellipse-inner"
          className={styles.ellipseInner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={ transitionOps }
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>
  );
}

function CatButton() {
  return (
    <Link to="/intro/1" className={styles.catButton}>
      <img src={ears} />
      <p>Start Game</p>
    </Link>
  );
}

export default function GameIntro() {
  const bounceAnimation = {
    animate: {
      scaleY: [0, 1],
    },
    transition: {
      type: spring,
      stiffness: 300,
      animationDuration: 0.35,
      bounce: 0.5,
    },
  };
  return (
    <>
      <EllipseBG />
      <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: easeInOut, duration: 0.25, delay: 0.7 }}
        style={{
          width: "35%",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          textAlign: "center",
          bottom: "30%",
          right: "15%",
        }}
      >
        <h1>
          Find Meow
          <br />
          way back home
        </h1>
        <p style={{ marginTop: "1em" }}>
          Our beloved Cateneans have been scattered all across campus. Discover
          the quirks that make each Catenean special and use them to help them
          find their way back home.
        </p>
        <CatButton />
      </motion.section>
      <section className={styles.introGraphic}>
        <MotionConfig
          animate={bounceAnimation.animate}
          transition={bounceAnimation.transition}
        >
          <motion.img src={CatHouse} className={styles.catHouse} transition={{ ...bounceAnimation.transition, delay: 1 }} />
          <motion.img
            src={CatSitting}
            className={styles.catSit}
            transition={{ ...bounceAnimation.transition, delay: 1.3 }}
          />
          <motion.img
            src={FoodBowl}
            className={styles.foodBowl}
            transition={{ ...bounceAnimation.transition, delay: 1.5 }}
          />
        </MotionConfig>
      </section>
    </>
  );
}
