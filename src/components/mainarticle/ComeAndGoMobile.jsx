import styles from "../../styles/ComeAndGoMobile.module.css";
import cloud1 from "../../assets/images/cloud1.svg";
import cloud2 from "../../assets/images/cloud2.svg";
import cat1 from "../../assets/images/cats/17.png";
import FauraCats from "../../assets/images/fauracats.png";
import { easeInOut, motion } from "motion/react";

const ComeAndGo = () => {
  const cloudVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
    hidden: {
      x: 20,
      opacity: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };
  return (
    <div className={styles.mainArticle}>
      <h1>Cats come and go</h1>
      <img src={FauraCats} className={styles.fauraCats} />
      <div className={styles.cloudWrapper}>
        <motion.img
          variants={cloudVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.cloud1}
          src={cloud1}
          viewport={{ once: true }}
        />
        <motion.img
          variants={cloudVariants}
          initial={{ ...cloudVariants.hidden, x: -cloudVariants.hidden.x }}
          whileInView="visible"
          className={styles.cloud2}
          src={cloud2}
          viewport={{ once: true }}
        />
      </div>
      <section className={styles.textContent}>
        <p>
          The work in caring for the Cateneans is not an easy feat, with many
          factors such as disease outbreaks, accidents, and overpopulation
          complicating the efforts of the caretakers.
        </p>
        <p>
          Despite the feline companions being a comforting presence on campus,
          they live far shorter than humans. Nonetheless, concerned individuals
          such as the AGILA team, certain faculty, and custodial staff remain
          committed to ensuring that the Cateneans experience a good quality of
          life while they are around.
        </p>
        <p style={{ marginBottom: "2em" }}>
          Because of this care, the loss of any Catenean is deeply felt by the
          whole Ateneo community. When beloved Schmitt Hall resident Paopao lost
          his life in a vehicular accident, an outpouring of support was seen on
          social media, with submissions flooding the student-forum ADMU Freedom
          Wall. Students, staff, and professors expressed their grief online,
          with many sharing their heartfelt experiences with Paopao.
        </p>
        <img className={styles.cat1} src={cat1} />

        <p>
          Moreover, calls for accountability and greater support for AGILA’s
          initiatives spread, with some posts featuring “#JusticeForPaoPao” in
          their lines of text.
        </p>
      </section>
    </div>
  );
};

export default ComeAndGo;
