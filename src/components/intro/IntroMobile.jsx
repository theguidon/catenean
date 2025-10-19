import styles from "../../styles/Intro.module.css";
import ellipses1 from "../../assets/images/intro/ellipses1.svg";
import ellipses2 from "../../assets/images/intro/ellipses2.svg";

export default function IntroMobile() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.text}>
          <p>
            NOT EVERY home has a furry feline companion, but within the Loyola
            Heights campus, one is certain to encounter&nbsp;them.
          </p>
        </div>
        <div className={styles.graphics}>
          <img src={ellipses1} alt="" className={styles.ellipses} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.text}>
          <p>
            The Ateneo’s cast of cats are endearingly monikered as the
            “Cateneans”. They quietly comfort stressed students and employees
            with a single glance, stretch leisurely across guard’s desks,
            scamper casually along the walkways, or nap on the cafeteria chairs
            next to their human companions without a care in the&nbsp;world.
          </p>
          <br />
          <p>
            Those who have pets know what it is like to show their animal
            friends off, to go above and beyond for them, to maintain their
            well-being, and to miss them sorely after long stretches
            of&nbsp;separation.
          </p>
          <br />
          <p>
            In an enduring display of love, students, faculty, and staff alike
            show that love for animals is just as important as love for
            anyone&nbsp;else.
          </p>
        </div>
        <div className={styles.graphics}>
          <img src={ellipses2} alt="" className={styles.ellipses} />
        </div>
      </div>
    </div>
  );
}
