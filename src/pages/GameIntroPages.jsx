import styles from "../styles/game.module.css";
import Ellipses from "../components/ellipses.jsx";
import EllipseBG from "../components/gameintro/ellipsesBG.jsx";
import Back from "../assets/images/game/Back.svg";
import ThreeCats from "../assets/images/three-cats.png";
import Next from "../assets/images/game/Next.svg";
import { Link } from "react-router";
import { motion, easeInOut } from "motion/react";

export function GamePage1() {
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
          <img src={Back} />
        </Link>
        <Link to="/game/intro/2">
          <img src={Next} />
        </Link>
      </motion.section>
    </>
  );
}

export function GamePage2() {
  return (
    <>
      <Ellipses style={{ width: "80%", position: "relative", bottom: "9vh" }}>
        <p
          style={{
            fontFamily: "Solway",
            fontWeight: "bold",
            fontSize: "3.5em",
          }}
        >
          &ldquo;Meow, it seems as though we have wandered a bit too far this
          time! Would you be so kind as to lead us back home?&rdquo;
        </p>
      </Ellipses>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 0.5, delay: 0.75 }}
        src={ThreeCats}
        style={{ position: "absolute", bottom: "-3vh", height: "70vh" }}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, duration: 0.25, delay: 0.75 }}
        className={styles.pageButtons}
      >
        <Link to="/game/intro/1">
          <img src={Back} />
        </Link>
        <Link to="/game/play">
          <img src={Next} />
        </Link>
      </motion.section>
    </>
  );
}
