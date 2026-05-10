import styles from "./ellipses.module.css";
export default function Ellipses({ style, children }) {
  return (
    <div className={styles.outerEllipse} style={{ ...style }}>
      <div className={styles.innerEllipse}>
        {children}
      </div>
    </div>
  );
}
