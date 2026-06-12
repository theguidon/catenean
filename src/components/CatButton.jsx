import { Link } from "react-router";
import { motion, spring } from "motion/react";
import styles from "../styles/Map.module.css";
import ears from "../assets/images/cats/illustrations/Ears.svg";

export default function CatButton({ label, slug, style }) {
  return (
    <Link to={`/location/${slug}`} style={style}>
      <motion.div
        animate={{ scale: [1.1, 1] }}
        whileHover={{ scale: [1, 1.1] }}
        transition={{
          type: spring,
          stiffness: 360,
          duration: 0.1,
          bounce: 0.3,
        }}
        className={styles.catButton}
      >
        <img src={ears} />
        <div>
          <p>{label}</p>
        </div>
      </motion.div>
    </Link>
  );
}
