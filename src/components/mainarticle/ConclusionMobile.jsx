import creditStyles from "../../styles/mainCredits.module.css";
import envelope from "../../assets/images/letter.svg";
import cat1 from "../../assets/images/cats/10.jpeg";
import cat2 from "../../assets/images/cats/8.jpeg";
import backArrow from "../../assets/images/Union.svg";
import back from "../../assets/images/back_to_start.svg";
import { easeInOut, motion, MotionConfig, stagger } from "motion/react";
import bylines from "../../data/bylines.json";
import { NavLink } from "react-router";

const Conclusion = () => {
  const joinBylines = (bylines) => {
    switch (bylines.length) {
      case 0:
        return "";
      case 1:
        return bylines[0];
      case 2:
        return bylines[0] + " and " + bylines[1];
      default:
        return (
          bylines.slice(0, -1).join(", ") +
          " and " +
          bylines[bylines.length - 1]
        );
    }
  };

  const endVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: easeInOut },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #fffae9 0, transparent 500px)",
        paddingTop: "15vw",
      }}
    >
      <MotionConfig
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={envelope}
          className={creditStyles.envelope}
          style={{ rotate: "-10deg" }}
        />
        <motion.section
          className={creditStyles.letter}
          style={{ rotate: "5deg", width: "120%" }}
        >
          <p>
            In spite of the challenges to their welfare, the Cateneans persist,
            with many still wandering around campus, bringing comfort and joy to
            those they encounter. Their mere presence in the hallways, paths, on
            top of tables, or peeking from corners deeply resonates with many
            Ateneans.
          </p>
          <p>
            “Seeing and interacting with [the cats] distracts [the faculty] from
            [the] stress … [it] makes the work worthwhile,” says Buenafe. Truly,
            the impact of this four-legged community is felt, and they have
            become intertwined with the daily happenings of the regular Atenean.
          </p>
          <p>
            The Cateneans hold a cherished place in the hearts of many Ateneans,
            completing the tapestry of Loyola’s vibrant campus culture. These
            furry, feline friends have the unique ability to brighten days and
            give meaning to the service of the devoted individuals, like
            Buenafe, Rampola, Haberia, and June*, who nurture them with
            unwavering compassion and care.
          </p>
        </motion.section>
      </MotionConfig>
      <article
        className={creditStyles.polaroid}
        style={{
          transform: "rotate(-10deg)",
        }}
      >
        <img src={cat1} />
      </article>
      <article
        className={creditStyles.polaroid}
        style={{
          transform: "rotate(10deg)",
          bottom: "8vh",
          left: "8vw",
        }}
      >
        <img src={cat2} />
      </article>
      <section className={creditStyles.buttons}>
        <NavLink to="/game" className={creditStyles.button}>
          Play game
        </NavLink>
        <NavLink to="/map" className={creditStyles.button}>
          View map
        </NavLink>
        <a href="#start" className={creditStyles.back}>
          <img src={back} />
        </a>
      </section>
      <section className={creditStyles.bylines}>
        {bylines.map(({ header, bylines }) => (
          <>
            <h1>{header}</h1>
            <p>{joinBylines(bylines)}</p>
          </>
        ))}
      </section>
    </div>
  );
};

export default Conclusion;
