import styles from "../../styles/game.module.css";
import { motion, AnimatePresence, easeInOut } from "motion/react";

export default function EllipseBG() {
  const transitionOps = { ease: easeInOut, duration: 0.15 };

  return (
    <AnimatePresence>
      <motion.div
        key="ellipse-outer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={transitionOps}
        className={`${styles.ellipseOuter}`}
      />
      <motion.div
        key="ellipse-inner"
        className={styles.ellipseInner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transitionOps}
        exit={{ opacity: 0 }}
      />
    </AnimatePresence>
  );
}
