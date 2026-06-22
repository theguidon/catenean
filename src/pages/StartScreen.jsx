import styles from "../styles/StartScreen.module.css";
import Title from "../assets/images/title.svg";
import Bush from "../assets/images/bush.svg";
import RBR from "../assets/images/intro/RBR.svg";
import CatSitting from "../assets/images/Cat (Sitting).svg";
import CatHouse from "../assets/images/Cat House.svg";
import CatBowl from "../assets/images/Food Bowl.svg";
import Ears from "../assets/images/cats/illustrations/Ears.svg";
import { AnimatePresence, easeInOut, motion, spring } from "motion/react";
import popSound from "../assets/sounds/sfx/pop.m4a";
import useSound from "use-sound";

export default function StartScreen({ startInteractive }) {
  const [playPop] = useSound(popSound);
  return (
    <section className={styles.container}>
      <AnimatePresence mode="sync">
        <motion.section
          key="start-title"
          exit={{ opacity: 0 }}
          transition={{ ease: easeInOut, duration: 0.5 }}
          className={styles.textCont}
        >
          <img src={Title} />
          <p>
            <em>
              Beyond students and employees who roam the Ateneo campus
              <br />
              exists a four-legged community that also calls the campus home
            </em>
          </p>
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: [1, 1.2] }}
            transition={{
              type: spring,
              stiffness: 520,
              duration: 0.1,
              bounce: 0.1,
            }}
            onMouseOver={playPop}
            onClick={() => {
              playPop();
              startInteractive();
            }}
            className={styles.catButton}
          >
            <img src={Ears} />
            <p>Start</p>
          </motion.button>
        </motion.section>
      </AnimatePresence>
      <section className={styles.graphics}>
        <img src={RBR} style={{ bottom: "-2%", left: -600 }} />
        <img src={CatHouse} style={{ bottom: "5%", left: -100 }} />
        <img src={CatSitting} style={{ bottom: "4%", left: 150 }} />
        <img src={CatBowl} style={{ bottom: "4%", left: 400 }} />
        <img src={Bush} style={{ bottom: "-5%", left: -200, height: "20vh" }} />
      </section>
    </section>
  );
}
