import styles from "../styles/game.module.css";
import Ellipses from "../components/ellipses.jsx";
import EllipseBG from "../components/gameintro/ellipsesBG.jsx";
import Back from "../assets/images/game/Back.svg";
import ThreeCats from "../assets/images/three-cats.png";
import Next from "../assets/images/game/Next.svg";
import { Link } from "react-router";
import { motion, easeInOut } from "motion/react";
import { useBoings } from "../hooks/sounds.jsx";
import { bounceTransition } from "../utils/constants.js";

export function GamePage1() {
  const boings = useBoings();
  const paragraphs = [
    "Roaming the Ateneo's countless hallways and sleeping in the snuggest of nooks and crannies, the Cateneans make their presence known as members of our very community.",
    "With curiosity and chaos coursing through their veins, our furry friends can't help but stick their whiskers into the farthest spots and corners, as if in a quest for treasures and treats!",
    "Sometimes, our meowing explorers just need a little help.",
  ];
  return (
    <>
      <EllipseBG />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 0.25, delay: 0.7 }}
        style={{
          width: "100%",
          height: "100%",
          padding: "20% 25%",
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          textAlign: "center",
        }}
      >
        {paragraphs.map((text, ix) => (
          <p key={ix} style={{ marginBottom: "1em" }}>
            {text}
          </p>
        ))}
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 0.25, delay: 0.7 }}
        className={styles.pageButtons}
      >
        <Link to="/game/intro">
          <motion.img
            whileHover={{ scale: [1, 1.1] }}
            onMouseEnter={boings[Math.floor(Math.random() * 3)]}
            transition={bounceTransition}
            src={Back}
          />
        </Link>
        <Link to="/game/intro/2">
          <motion.img
            whileHover={{ scale: [1, 1.1] }}
            onMouseEnter={boings[Math.floor(Math.random() * 3)]}
            transition={bounceTransition}
            src={Next}
          />
        </Link>
      </motion.section>
    </>
  );
}

export function GamePage2() {
  const boings = useBoings();
  return (
    <>
      <Ellipses
        style={{
          width: "80%",
          position: "relative",
          bottom: "-2vh",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Solway",
            fontWeight: "bold",
            fontSize: "2.5em",
          }}
        >
          &ldquo;Meow, it seems as though we have wandered a bit too far this
          time! Would you be so kind as to lead us back home?&rdquo;
        </h1>
        <p style={{ marginTop: "2vh" }}>
          With the Cateneans scattered around campus, let&apos;s guide them back
          with this handy list of clues and match our feline friends to their
          respective homes.
        </p>
      </Ellipses>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 0.5, delay: 0.75 }}
        src={ThreeCats}
        style={{ position: "absolute", bottom: "-7vh", height: "70vh" }}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 0.25, delay: 0.75 }}
        className={styles.pageButtons}
      >
        <Link to="/game/intro/1">
          <motion.img
            whileHover={{ scale: [1, 1.1] }}
            onMouseEnter={boings[Math.floor(Math.random() * 3)]}
            transition={bounceTransition}
            src={Back}
          />
        </Link>
        <Link to="/game/play">
          <motion.img
            whileHover={{ scale: [1, 1.1] }}
            onMouseEnter={boings[Math.floor(Math.random() * 3)]}
            transition={bounceTransition}
            src={Next}
          />
        </Link>
      </motion.section>
    </>
  );
}
