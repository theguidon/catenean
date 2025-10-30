import { transform } from "motion";
import cloud from "../../assets/images/cloud_desktop.svg";
import paopao from "../../assets/images/cats/17.png";
import styles from "../../styles/ComeAndGoDesktop.module.css";

const ComeAndGoDesktop = () => {
  return (
    <section className={styles.container}>
      <img src={cloud} className={styles.cloud} />
      <section className={styles.content}>
        <p
          style={{
            alignSelf: "flex-start",
            top: "5%",
            left: "12%"
          }}>
          Johnson recounts the day Pao-Pao was run over because of the &quot;reckless imprudence of drivers.&quot; He first heard the news of Pao-Pao&apos;s passing before his 5:00PM class. When he came back at 6:30PM, he recalled a crowd of around 70 students gathering by Schmitt Hall before they headed to the SOM Forest, where Pao-Pao was buried.
        </p>
        <img src={paopao} className={styles.paopao} />
        <p
          style={{
            alignSelf: "flex-end",
            right: "5%",
            bottom: "5%"
          }}>
          &quot;These small things which are part of our experience, [...] they&apos;re more important than we think. Sometimes, we only notice them when they&apos;re absent, [...] we realize how much we&apos;ve missed them&mdash;how much of the experience they are&quot;<br />Johnson says.
        </p>
      </section>
      <img src={cloud} className={styles.cloud} style={{ transform: "scaleX(-1)" }} />
    </section>
  );
}

export default ComeAndGoDesktop;
