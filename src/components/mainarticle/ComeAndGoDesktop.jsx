import { easeInOut, motion, stagger } from "motion/react";
import cloud from "../../assets/images/cloud_desktop.svg";
import paopao from "../../assets/images/cats/17.png";
import catHearts from "../../assets/images/cats-with-hearts.png";
import styles from "../../styles/ComeAndGoDesktop.module.css";

const ComeAndGoDesktop = () => {
  const transition = { duration: 0.75, ease: easeInOut };
  const parVariants = {
    show: { color: "rgb(82,34,34,1)", transition },
    hidden: { color: "rgb(82,34,34,0)", transition },
  };

  const linkVariants = {
    show: { color: "rgb(32,116,164,1)", transition },
    hidden: { color: "rgb(32,116,164,0)", transition },
  };

  return (
    <section className={styles.container}>
      <section className={styles.titleArea}>
        <h1>
          Cats come
          <br />
          and go
        </h1>
      </section>
      <img src={cloud} className={styles.cloud} />
      <section
        style={{
          padding: "10vh 20vw",
          height: "100vh",
          width: "100vw",
          background: "#fffae9",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          gap: "15vh",
        }}
      >
        <section>
          <p style={{ marginBottom: "2em" }}>
            The work in caring for the Cateneans is not an easy feat, with many
            factors such as{" "}
            <a href="https://www.petmd.com/cat/general-health/outdoor-dangers-cats">
              disease outbreaks, accidents, and overpopulation
            </a>{" "}
            complicating the efforts of the caretakers.
          </p>
          <p>
            Despite the feline companions being a comforting presence on campus,
            they{" "}
            <a href="https://www.petmd.com/cat/care/how-long-do-cats-live">
              live far shorter
            </a>{" "}
            than humans. Nonetheless, concerned individuals such as the AGILA
            team, certain faculty, and custodial staff remain committed to
            ensuring that the Cateneans experience a good quality of life while
            they are around.
          </p>
        </section>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          src={catHearts}
          style={{ width: "70%", position: "relative", bottom: "5vh" }}
        />
      </section>
      <motion.section
        initial="hidden"
        whileInView="show"
        transition={{ delayChildren: stagger(2, { startDelay: 1 }) }}
        className={styles.content}
      >
        <motion.p
          viewport={{ amount: "all" }}
          variants={parVariants}
          style={{
            alignSelf: "flex-start",
            top: "5%",
            left: "12%",
          }}
        >
          Because of this care, the loss of any Catenean is deeply felt by the
          whole Ateneo community. When beloved Schmitt Hall resident Paopao{" "}
          <motion.a
            variants={linkVariants}
            href="https://www.facebook.com/photo/?fbid=699889072175925&set=a.463936722437829"
          >
            lost his life
          </motion.a>{" "}
          after being hit by a vehicle, an outpouring of support was seen on
          social media, with{" "}
          <motion.a
            variants={linkVariants}
            href="https://www.facebook.com/profile/100069163320793/search/?q=paopao"
          >
            submissions flooding the student-forum ADMU Freedom Wall
          </motion.a>
          . Students, staff, and professors expressed their grief online, with
          many sharing their heartfelt experiences with Paopao.
        </motion.p>
        <img src={paopao} className={styles.paopao} />
        <motion.p
          variants={parVariants}
          viewport={{ amount: 0.8 }}
          style={{
            alignSelf: "flex-end",
            right: "5%",
            bottom: "5%",
          }}
        >
          Moreover, calls for accountability and greater support for AGILA’s
          initiatives spread, with some posts featuring “#JusticeForPaoPao” in
          their lines of text.
        </motion.p>
      </motion.section>
      <img
        src={cloud}
        className={styles.cloud}
        style={{ transform: "scaleX(-1)" }}
      />
    </section>
  );
};

export default ComeAndGoDesktop;
