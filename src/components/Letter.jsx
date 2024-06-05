import styles from "../styles/Letter.module.css";
import letter from "../assets/images/letter.svg";

const Letter = ({ isLetterVisible, setIsLetterVisible, setPage }) => {
  return isLetterVisible ? (
    <div className={styles.letterContainer}>
      <div className={styles.letter}>
        <img src={letter} />
        <div className={styles.text}>
          <p>To: You</p>
          <p>From: Isabel Victorino and Alyssa E. Duque</p>
          <h2>Here is a letter for you!</h2>
        </div>
        <div
          className={styles.read}
          onClick={() => {
            setIsLetterVisible(false);
            setPage("letter");
          }}
        >
          Read
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Letter;
