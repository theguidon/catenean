import styles from "../styles/game.module.css";
import EllipseBG from "../components/gameintro/ellipsesBG";
import ears from "../assets/images/cats/illustrations/Ears.svg";
import CatHouse from "../assets/images/Cat House.svg";
import CatSitting from "../assets/images/Cat (Sitting).svg";
import FoodBowl from "../assets/images/Food Bowl.svg";
import { Link } from "react-router";
import { motion, easeInOut, MotionConfig, spring } from "motion/react";
import { useBoings } from "../hooks/sounds.jsx";
import { bounceTransition } from "../utils/constants.js";

function CatButton() {
  const boings = useBoings();
  return (
    <Link to="/game/intro/1">
      <motion.div
        className={styles.catButton}
        initial={{ scale: 1 }}
        whileHover={{ scale: [1, 1.1] }}
        onMouseEnter={boings[Math.floor(Math.random() * 3)]}
        transition={bounceTransition}
      >
        <img src={ears} />
        <p>Start Game</p>
      </motion.div>
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
          bottom: "25vh",
          right: "10%",
        }}
      >
        <h1 style={{ fontSize: "4em" }}>
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
          <motion.img
            src={CatHouse}
            className={styles.catHouse}
            transition={{ ...bounceAnimation.transition, delay: 1 }}
          />
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
