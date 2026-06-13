import styles from "../../styles/game.module.css";
import { motion, AnimatePresence, easeInOut } from "motion/react";

export default function EllipseBG() {
  const transitionOps = { ease: easeInOut, duration: 0.15 };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "clip",
        display: "grid",
        gridTemplateRows: "100vh",
        gridTemplateColumns: "100vw",
        placeItems: "center",
        position: "absolute",
      }}
    >
      <motion.div
        key="ellipse-outer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={transitionOps}
        className={styles.ellipseOuter}
      />
      <motion.div
        key="ellipse-inner"
        className={styles.ellipseInner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transitionOps}
      />
    </div>
  );
}
