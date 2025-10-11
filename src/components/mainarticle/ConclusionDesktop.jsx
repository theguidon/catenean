import envelope from "../../assets/images/letter.svg";
import creditStyles from "../../styles/mainCredits.module.css";
import paopao from "../../assets/images/paopao.png";
import bylines from "../../data/bylines.json";
import joinBylines from "../../utils/joinBylines";
import cat1 from "../../assets/images/cats/1.jpeg";
import cat2 from "../../assets/images/cats/2.jpeg";
import { easeInOut, easeOut, motion } from "motion/react";
import { useState } from "react";

const ConclusionDesktop = () => {
  return (
    <section
      style={{
        display: "flex",
        flexFlow: "row",
        alignItems: "end",
        overflowY: "clip",
        overflowX: "scroll",
        height: "100vh",
        background: "#f2daad"
      }}
    >
      <section
        style={{
          alignSelf: "center",
          position: "relative",
          height: "50%",
          minWidth: "600px"
        }}
      >
        <article
          className={creditStyles.polaroid}
          style={{
            width: 220,
            padding: 12,
            paddingBottom: 54,
            position: "absolute",
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
            width: 220,
            padding: 12,
            paddingBottom: 54,
            position: "absolute",
            left: "25%",
            top: "-20%",
            rotate: "-10deg",
            animation: `3s ease-in-out 0s infinite alternate-reverse ${creditStyles.swing}`,
            transformOrigin: "top right"
          }}
        >
          <img src={cat1} />
        </article>
        <motion.img
          src={envelope}
          className={`${creditStyles.envelopeDesktop} ${creditStyles.envelope}`}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          style={{
            position: "absolute",
            zIndex: 50,
          }}
        />
      </section>
      <motion.section
        className={creditStyles.letter}
        style={{
          height: "100vh",
          position: "relative",
          top: "5vh",
          rotate: "5deg",
          minWidth: 528,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
          style={{
            marginBottom: "36px"
          }}
        >The Cateneans stand as a testament to the human capacity
          to go above and beyond for animals. Resuello, Beunafe, Johnson, and
          the AGILA members are only among countless people who give the animals
          the same value as fellow humans.</motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut, delay: 0.75 }}
        >The Ateneo community&apos;s efforts of caring for the campus cats only concretize
          the importance of empathy and respect for other living beings. Be it animals
          or another human, the interconnectedness of the world&apos;s inhabitants reflect a need for respect, kindness, and empathy to build safe communities for all.
        </motion.p>
      </motion.section>
      <section
        className={creditStyles.letter}
        style={{
          height: "100vh",
          position: "relative",
          top: "30vh",
          rotate: "-5deg",
          minWidth: 528,
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: easeInOut }}
        >Beyond attention and affection, love has manifested in the Ateneo community through a commitment to caring for the Cateneans and an acknowledgement of their value as living beings.
        </motion.p>
      </section>
      <img
        src={paopao}
        style={{
          position: "relative",
          width: 400,
          zIndex: 50,
          right: 130
        }}
      />
      <section
        className={creditStyles.bylines}
        style={{
          minWidth: 448,
          marginTop: "10vh",
          alignSelf: "start",
          marginLeft: -80
        }}
      >
        {bylines.map(({ header, bylines }) => (
          <>
            <h1>{header}</h1>
            <p>{joinBylines(bylines)}</p>
          </>
        ))}
      </section>
    </section >
  );
}

export default ConclusionDesktop;
