import creditStyles from "../../styles/mainCredits.module.css";
import envelope from "../../assets/images/letter.svg";
import paopao from "../../assets/images/cats/2.jpeg";
import backArrow from "../../assets/images/Union.svg";
import back from "../../assets/images/back_to_start.svg";
import { easeInOut, motion, MotionConfig, stagger } from "motion/react";
import bylines from "../../data/bylines.json"
import { NavLink } from "react-router";

const Conclusion = () => {

  const joinBylines = (bylines) => {
    switch (bylines.length) {
      case 0: return "";
      case 1: return bylines[0];
      case 2: return bylines[0] + " and " + bylines[1];
      default: return bylines.slice(0, -1).join(", ") + " and " + bylines[bylines.length - 1];
    }
  }

  const endVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: easeInOut }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut }
    }
  }

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #fffae9 0, transparent 500px)',
        paddingTop: '15vw'
      }}
    >
      <motion.img
        initial="hidden"
        whileInView="show"
        variants={endVariants}
        src={envelope}
        className={creditStyles.envelope}
        style={{ rotate: "-10deg" }}
      />
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={endVariants}
        className={creditStyles.letter}
        transition={{ delay: 1 }}
        style={{ rotate: "5deg", width: "120%" }}
      >
        <p>The Cateneans stand as a testament to the human capacity
          to go above and beyond for animals. Resuello, Beunafe, Johnson, and
          the AGILA members are only among countless people who give the animals
          the same value as fellow humans.</p>
        <p>The Ateneo community&apos;s efforts of caring for the campus cats only concretize
          the importance of empathy and respect for other living beings. Be it animals
          or another human, the interconnectedness of the world&apos;s inhabitants reflect a need for respect, kindness, and empathy to build safe communities for all.
        </p>
        <p>Beyond attention and affection, love has manifested in the Ateneo community through a commitment to caring for the Cateneans and an acknowledgement of their value as living beings.</p>
      </motion.section>
      <motion.article
        initial="hidden"
        whileInView="show"
        variants={endVariants}
        className={creditStyles.polaroid}
        style={{
          rotate: "-10deg",
          right: "10%"
        }}
      >
        <img
          src={paopao}
          alt="A catenean."
        />
      </motion.article>
      <motion.article
        initial="hidden"
        whileInView="show"
        variants={endVariants}
        className={creditStyles.polaroid}
        style={{
          rotate: "10deg",
          left: "10%",
          bottom: 120
        }}
        transition={{ duration: 0.500, ease: easeInOut, delay: 0.5 }}
      >
        <img
          src={paopao}
          alt="A catenean."
        />
      </motion.article>
      <section className={creditStyles.buttons}>
        <NavLink to="/game" className={creditStyles.button}>Play game</NavLink>
        <NavLink to="/map" className={creditStyles.button}>View map</NavLink>
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
