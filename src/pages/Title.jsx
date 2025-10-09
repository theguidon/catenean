import styles from "../styles/Title.module.css";
import paw from "../assets/images/paw-brown.svg";
import title from "../assets/images/title.svg";

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
          <img src={title} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Title;
