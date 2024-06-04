import styles from "../styles/credits.module.css";
import exit from "../assets/images/exit.svg";

const Credits = ({ isCreditsVisible, setIsCreditsVisible }) => {
  return isCreditsVisible ? (
    <div className={styles.credits}>
      <div className={styles.creditsNames}>
      <img src={exit} className={styles.exit} onClick={() => setIsCreditsVisible(false)} />
        <div>
          <h3>Written&nbsp;by</h3>
          <p>Isabel&nbsp;Victorino and Alyssa&nbsp;E.&nbsp;Duque</p>
        </div>
        <div>
          <h3>Photos&nbsp;by</h3>
          <p>need bylines no bylines</p>
        </div>
        <div>
          <h3>Designed&nbsp;by</h3>
          <p>
            Bea&nbsp;Gan, Juan&nbsp;Lacanienta, Frants&nbsp;Reyes, and
            Razel&nbsp;Tan
          </p>
        </div>
        <div>
          <h3>Developed&nbsp;by</h3>
          <p>
            Luigi&nbsp;Rodriguez, Ysabella&nbsp;B.&nbsp;Panghulan,
            Chesca&nbsp;Reyes, and Waleed&nbsp;Lugod
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Credits;
