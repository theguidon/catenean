import { easeInOut, motion, stagger } from "motion/react";
import cloud from "../../assets/images/cloud_desktop.svg";
import paopao from "../../assets/images/cats/17.png";
import styles from "../../styles/ComeAndGoDesktop.module.css";
import faura from "../../assets/images/buildings/no-shadow/faura.svg";
import bush1 from "../../assets/images/bush-left.svg";
import bush2 from "../../assets/images/bush-right.svg";
import title from "../../assets/images/comeandgo-title-desktop.svg";
import blush from "../../assets/images/Blur-Desktop.svg";

const ComeAndGoDesktop = () => {
  const transition = { duration: 0.5, ease: easeInOut }
  const parVariants = {
    show: { color: "rgb(82,34,34,1)", transition },
    hidden: { color: "rgb(82,34,34,0)", transition }
  }

  return (
    <section className={styles.container}>
      <section className={styles.titleArea}>
        <motion.img
          src={bush1}
          className={styles.bush}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          viewport={{ amount: 0.5 }}
        />
        <section className={styles.building}>
          <img src={blush} className={styles.blush} />
          <motion.img
            src={title}
            className={styles.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: easeInOut }}
          />
          <motion.img
            src={faura}
            className={styles.buildingPic}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.75, type: "spring", bounce: 0.5, delay: 0.8 }}
            viewport={{ amount: 0.6 }}
          />
        </section>
        <motion.img
          src={bush2}
          className={styles.bush}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 0.2 }}
          viewport={{ amount: 0.5 }}
        />
      </section>
      <img src={cloud} className={styles.cloud} />
      <motion.section initial="hidden" whileInView="show" transition={{ delayChildren: stagger(0.5) }} className={styles.content}>
        <motion.p
          variants={parVariants}
          style={{
            alignSelf: "flex-start",
            top: "5%",
            left: "12%"
          }}
          viewport={{ amount: 0.8 }}
        >
          Johnson recounts the day Pao-Pao was run over because of the &quot;reckless imprudence of drivers.&quot; He first heard the news of Pao-Pao&apos;s passing before his 5:00PM class. When he came back at 6:30PM, he recalled a crowd of around 70 students gathering by Schmitt Hall before they headed to the SOM Forest, where Pao-Pao was buried.
        </motion.p>
        <img src={paopao} className={styles.paopao} />
        <motion.p
          variants={parVariants}
          style={{
            alignSelf: "flex-end",
            right: "5%",
            bottom: "5%"
          }}
          viewport={{ amount: 0.8 }}
        >
          &quot;These small things which are part of our experience, [...] they&apos;re more important than we think. Sometimes, we only notice them when they&apos;re absent, [...] we realize how much we&apos;ve missed them&mdash;how much of the experience they are&quot;<br />Johnson says.
        </motion.p>
      </motion.section>
      <img src={cloud} className={styles.cloud} style={{ transform: "scaleX(-1)" }} />
    </section>
  );
}

export default ComeAndGoDesktop;
