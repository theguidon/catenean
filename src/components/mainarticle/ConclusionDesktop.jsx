import envelope from "../../assets/images/letter.svg";
import creditStyles from "../../styles/mainCredits.module.css";
import paopao from "../../assets/images/paopao.png";
import bylines from "../../data/bylines.json";
import joinBylines from "../../utils/joinBylines";
import cat1 from "../../assets/images/cats/1.jpeg";
import cat2 from "../../assets/images/cats/2.jpeg";
import string1 from "../../assets/images/conclusion_string1.svg";
import string2 from "../../assets/images/conclusion_string2.svg";
import { easeInOut, easeOut, motion, spring } from "motion/react";

const ConclusionDesktop = () => {
  const bounceAnimation = {
    whileInView: {
      scaleY: [0, 1.5, 1],
    },
    transition: {
      type: spring,
      stiffness: 100,
      animationDuration: 0.2,
      bounce: 0.2,
    },
  };
  return (
    <section
      style={{
        display: "flex",
        flexFlow: "row",
        alignItems: "end",
        overflowY: "clip",
        height: "100vh",
        position: "relative",
      }}
    >
      <img
        src={string1}
        style={{
          position: "absolute",
          top: 0,
          right: 300,
        }}
      />
      <img
        src={string2}
        style={{
          position: "absolute",
          top: 0,
          left: -1200,
        }}
      />
      <section className={creditStyles.polaroidContainer}>
        <article
          className={creditStyles.polaroid}
          style={{
            rotate: "10deg",
            animation: `3s ease-in-out 0s infinite alternate-reverse ${creditStyles.swing}`,
            transformOrigin: "top center",
          }}
        >
          <img src={cat2} />
        </article>
        <article
          className={creditStyles.polaroid}
          style={{
            top: "-15%",
            right: 380,
            rotate: "-10deg",
            animation: `3s ease-in-out 0s infinite alternate-reverse ${creditStyles.swing}`,
            transformOrigin: "top right",
          }}
        >
          <img src={cat1} />
        </article>
        <motion.img
          src={envelope}
          className={`${creditStyles.envelopeDesktop} ${creditStyles.envelope}`}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{
            position: "absolute",
            zIndex: 50,
          }}
        />
      </section>
      <motion.section
        className={creditStyles.letter}
        initial={{ top: "10vh", rotate: 0 }}
        whileInView={{ top: "7vh", rotate: "5deg" }}
        whileHover={{ top: "3vh", rotate: "7deg" }}
        transition={{ duration: 0.75, ease: easeInOut }}
        style={{
          height: "100vh",
          position: "relative",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
          style={{
            marginBottom: "36px",
          }}
        >
          In spite of the challenges to their welfare, the Cateneans persist,
          with many still wandering around campus, bringing comfort and joy to
          those they encounter. Their mere presence in the hallways, paths, on
          top of tables, or peeking from corners deeply resonates with many
          Ateneans.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut, delay: 0.75 }}
        >
          “Seeing and interacting with [the cats] distracts [the faculty] from
          [the] stress … [it] makes the work worthwhile,” says Buenafe. Truly,
          the impact of this four-legged community is felt, and they have become
          intertwined with the daily happenings of the regular Atenean.
        </motion.p>
      </motion.section>
      <motion.section
        className={creditStyles.letter}
        initial={{ top: "35vh", rotate: 0 }}
        whileInView={{ top: "32vh", rotate: "-5deg" }}
        whileHover={{ top: "30vh", rotate: "-7deg" }}
        transition={{ duration: 0.75, ease: easeInOut, delay: 0.2 }}
        style={{
          height: "100vh",
          position: "relative",
          minWidth: 528,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
        >
          The Cateneans hold a cherished place in the hearts of many Ateneans,
          completing the tapestry of Loyola’s vibrant campus culture. These
          furry, feline friends have the unique ability to brighten days and
          give meaning to the service of the devoted individuals, like Doc
          Buenafe, Miss Rampola, Miss Haberia, and Sir June* who nurture them
          with unwavering compassion and care.
        </motion.p>
      </motion.section>
      <motion.img
        src={paopao}
        whileInView={bounceAnimation.whileInView}
        transition={bounceAnimation.transition}
        style={{
          position: "relative",
          width: 400,
          zIndex: 50,
          right: 130,
        }}
      />
      <section
        className={creditStyles.bylines}
        style={{
          marginTop: "15vh",
          marginRight: 100,
          width: "70ch",
          alignSelf: "start",
          padding: 0,
        }}
      >
        {bylines.map(({ header, bylines }) => (
          <>
            <h1>{header}</h1>
            <p>{joinBylines(bylines)}</p>
          </>
        ))}
      </section>
    </section>
  );
};

export default ConclusionDesktop;
