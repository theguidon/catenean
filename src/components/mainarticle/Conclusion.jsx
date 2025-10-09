import creditStyles from "../../styles/mainCredits.module.css";
import envelope from "../../assets/images/letter.svg";
import paopao from "../../assets/images/cats/2.jpeg";
import back from "../../assets/images/back_to_start.svg";
import { easeInOut, motion, MotionConfig } from "motion/react";
import bylines from "../../data/bylines.json"

const Conclusion = () => {

  const joinBylines = (bylines) => {
    switch (bylines.length) {
      case 0: return "";
      case 1: return bylines[0];
      case 2: return bylines[0] + " and " + bylines[1];
      default: return bylines.slice(0, -1).join(", ") + " and " + bylines[bylines.length - 1];
    }
  }
  return (
    <>
      <MotionConfig
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.500, ease: easeInOut }}
      >
        <motion.img
          src={envelope}
          className={creditStyles.envelope}
          style={{ rotate: "-10deg" }}
        />
        <motion.section
          className={creditStyles.letter}
          style={{ rotate: "5deg" }}
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
      </MotionConfig>
      <section className={creditStyles.buttons}>
        <button className={creditStyles.button}>Play game</button>
        <button className={creditStyles.button}>View map</button>
        <button className={creditStyles.back}>
          <img src={back} />
        </button>
      </section>
      <section className={creditStyles.bylines}>
        {bylines.map(({ header, bylines }) => (
          <>
            <h1>{header}</h1>
            <p>{joinBylines(bylines)}</p>
          </>
        ))}
      </section>
    </>
  );
};

export default Conclusion;
