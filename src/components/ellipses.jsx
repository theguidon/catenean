import styles from "./ellipses.module.css";
import { motion } from "motion/react";
export default function Ellipses({ style, children }) {
  return (
    <motion.div className={styles.outerEllipse} style={{ ...style }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className={styles.innerEllipse}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}
