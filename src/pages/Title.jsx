import styles from "../styles/Title.module.css";
import paw from "../assets/images/paw-brown.svg";

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
    </section>
  );
}

export default Title;
