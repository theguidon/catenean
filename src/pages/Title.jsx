import styles from "../styles/Title.module.css";
import paw from "../assets/images/paw-brown.svg";
import title from "../assets/images/title.svg";
import startButton from "../assets/images/start-button.svg";

function Title() {
  return (
    <section className={styles.main}>
      <div className={styles.bg}>
        {[...Array(7).keys()].map((e, i) => (
          <div>
            {i % 2 != 0 ? <div /> : <></>}
            {[...Array(10).keys()].map(() => (
              <img src={paw} alt="" />
            ))}
            {i % 2 == 0 ? <div /> : <></>}
          </div>
        ))}
      </div>
      <div className={styles.fg}>
        <div className={styles.title}>
          <img src={title} alt="What the Cateneans Teach Us About Love" />
          <p>Written by Isabel Victorino and Alyssa E. Duque</p>
        </div>
        <button>
          <img src={startButton} alt="Start" />
        </button>
      </div>
    </section>
  );
}

export default Title;
