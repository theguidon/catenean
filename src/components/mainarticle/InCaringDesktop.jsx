import styles from "../../styles/InCaringDesktop.module.css";
import mvp from "../../assets/images/buildings/no-shadow/mvp.svg";
import mag1 from "../../assets/images/mag1.svg";
import mag2 from "../../assets/images/mag2.svg";
import bush from "../../assets/images/bush-left.svg"
import blush from "../../assets/images/Blur-Desktop.svg";
import title from "../../assets/images/incaring-title-desktop.svg";
import { easeInOut } from "motion";
import { motion } from "motion/react";

const InCaringDesktop = () => {
  const quoteVariants = {
    show: {
      opacity: 1,
      transition: { duration: 1, delayChildren: 1, ease: easeInOut }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 1, delayChildren: 1, ease: easeInOut }
    }
  }

  const quoteChildVariants = {
    show: {
      opacity: 1,
      transition: { duration: 1, ease: easeInOut }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 1, ease: easeInOut }
    }
  }
  return (
    <main className={styles.scrollContainer}>
      <div className={styles.page}>
        <img
          src={blush}
          style={{
            width: "100%",
            position: "absolute",
            left: 0,
            top: "2vh",
          }}
        />
        <div className={styles.titlepage}>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: easeInOut }}
            src={title} />
          <motion.img
            className={styles.mvp}
            src={mvp}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.75, type: "spring", bounce: 0.5, delay: 0.8 }}
            viewport={{ amount: 0.6, once: true }}
            alt="MVP Building" />
        </div>
        <motion.img
          className={styles.bushes}
          src={bush}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          viewport={{ amount: 0.8, once: true }}
          style={{ left: 0 }} />
        <motion.img
          className={styles.bushes}
          src={bush}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 0.2 }}
          viewport={{ amount: 0.5, once: true }}
          style={{ right: 0 }} />
      </div>

      <div className={`${styles.magArticle}`}>
        <img className={styles.mag1} src={mag1} alt="Cat Magnifying Glass 1" />
        <p>
          To maintain students’ and the campus cats’ safety, one of AGILA’s
          projects is tracking the campus cats and their needs by conducting{" "}
          <a href="https://lionshome.org/agila/">regular cat census.</a> However,
          AGILA President Tobiel Guce mentions that doing this has proven
          difficult since the pandemic mainly due to miscommunication caused by
          personnel changes within the Ateneo Institute of Sustainability (AIS)
          and the Ateneo Community Cat Program (ACCaP).
          <br />
          <br />
          AGILA, ACCaP, and AIS normally collaborate with each other on
          initiatives that help the Cateneans, including AGILA’s cat census.
          Guce notes that because they are an organization of college students,
          they cannot access areas outside of the LS campus to complete their
          records. ACCaP and AIS normally helped them fill the gaps of this
          limitation.
        </p>
      </div>

      <div className={styles.mainArticle}>
        <p style={{ marginBottom: "5rem" }}>
          Furthermore, AIS is concerned with promoting campus biodiversity while{" "}
          <a href="https://paws.org.ph/paws-ateneo-launch-program-for-stray-cats-on-campus/">
            {" "}
            ACCaP
          </a>{" "}
          manages the cat population through various University-wide programs.
        </p>

        <div className={styles.quoteContainer}>
          <motion.p variants={quoteVariants} initial="hidden" whileInView="show" className={styles.quote}>
            <motion.span variants={quoteChildVariants}>
              “The best thing [students] can do regarding animal welfare advocacy,
              and in support of AGILA na rin, [is to] act with empathy,”
            </motion.span>
          </motion.p>
          <p style={{ marginBottom: "3rem" }}>Guce suggests.</p>
        </div>
      </div>

      <div className={styles.magArticle}>
        <img className={styles.mag2} src={mag2} alt="Cat Magnifying Glass 2" />
        <p>
          For him, supporting animal welfare advocacy means being persons for
          others, which is inclusive of other forms of life. This practice can
          manifest through slowing vehicles down for animals and segregating
          trash so that stray animals do not try to eat them.
          <br />
          <br />
          Through caring for the Cateneans and their safety, a deeper understanding
          of animal welfare advocacy may become easier to develop. Many students and
          faculty of the Ateneo already have a fondness for the campus cats, and it is
          seen in how easy it is to get caught up in being affectionate with them. “They’re
          fun to watch, they’re fun to look at, they’re adorable, they’re photogenic.
          They’re malambing (affectionate), and there are a lot of Ateneans who are missing
          their pets at home,” Guce says.
        </p>

      </div>

      <div className={styles.mainArticle}>
        <p>
          Those with pets at home may find it easy to approach the cats with their existing
          familiarity in handling pets, but this may pose a danger in dealing with the Cateneans.
          Guce warns that the cats are still regarded as unsocialized animals and prefer to be kept
          feral, as it helps maintain their independence and role as pest control on campus.
          <br />
          <br />
          Those with pets at home may find it easy to approach the cats with their existing
          familiarity in handling pets, but this may pose a danger in dealing with the Cateneans.
          Guce warns that the cats are still regarded as unsocialized animals and prefer to be kept
          feral, as it helps maintain their independence and role as pest control on campus.
        </p>
      </div>
    </main >
  );
};

export default InCaringDesktop;
