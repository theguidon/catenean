import { easeInOut, motion, stagger } from "motion/react";
import cloud from "../../assets/images/cloud_desktop.svg";
import paopao from "../../assets/images/cats/17.png";
import catHearts from "../../assets/images/cats-with-hearts.png";
import styles from "../../styles/ComeAndGoDesktop.module.css";

const ComeAndGoDesktop = () => {
  const transition = { duration: 1, ease: easeInOut }
  const parVariants = {
    show: { color: "rgb(82,34,34,1)", transition },
    hidden: { color: "rgb(82,34,34,0)", transition }
  }

  return (
    <section className={styles.container}>
      <section className={styles.titleArea}>
        <h1>Cats come<br />and go</h1>
      </section>
      <img src={cloud} className={styles.cloud} />
      <section style={{ padding: "10vh 20vw", height: "100vh", width: "100vw", background: "#fffae9", display: "flex", flexFlow: "column nowrap", alignItems: "space-between", gap: "15vh" }}>
        <p>Despite the feline companions being a comforting presence on campus, they <a href="">live far shorter</a> than humans. Nonetheless, concerned individuals such as the AGILA team, certain faculty, and custodial staff still strive to ensure that the Cateneans experience a good quality of life while they are around.
        </p>
        <img src={catHearts} style={{ height: "45vh" }} />
      </section>
      <motion.section initial="hidden" whileInView="show" transition={{ delayChildren: stagger(2, { startDelay: 1 }) }} className={styles.content}>
        <motion.p
          viewport={{ amount: "all" }}
          variants={parVariants}
          style={{
            alignSelf: "flex-start",
            top: "5%",
            left: "12%"
          }}
        >
          In the heartbreaking event that a beloved Cateneans passes, members of the community always show up. When beloved Schmitt Hall resident Paopao lost his life in a vehicular accident, an outpouring of support was seen on social media, with submissions flooding the student-forum ADMU Freedom Wall. Students, staff, and professors expressed their grief online, with many sharing their heartfelt experiences with Paopao.
        </motion.p>
        <img src={paopao} className={styles.paopao} />
        <motion.p
          variants={parVariants}
          viewport={{ amount: 1 }}
          style={{
            alignSelf: "flex-end",
            right: "5%",
            bottom: "5%"
          }}
        >
          Moreover, calls for accountability and greater support for AGILA’s initiatives spread, with some posts featuring “#JusticeForPaoPao” in their lines of text.
        </motion.p>
      </motion.section>
      <img src={cloud} className={styles.cloud} style={{ transform: "scaleX(-1)" }} />
    </section>
  );
}

export default ComeAndGoDesktop;
