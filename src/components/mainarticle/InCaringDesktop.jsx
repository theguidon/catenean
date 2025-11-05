import styles from "../../styles/InCaringDesktop.module.css";
import mvp from "../../assets/images/mvp-1.svg";
import mag1 from "../../assets/images/mag1.svg";
import mag2 from "../../assets/images/mag2.svg";
import bushes from "../../assets/images/bushes.svg";
import grass from "../../assets/images/grass.svg";

const InCaringDesktop = () => {
  return (
    <main className={styles.scrollContainer}>
      <div className={styles.page}>
        <div className={styles.titlepage}>
          <h3>In caring, caution, and commitment</h3>
          <img className={styles.mvp} src={mvp} alt="MVP Building" />
        </div>
        <img className={styles.grass} src={grass} alt="Grass" />
        <img className={styles.bushes} src={bushes} alt="Bushes" />
      </div>

      <div className={styles.mainArticle}>
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
          <p className={styles.quote}>
            <span>
              “The best thing [students] can do regarding animal welfare advocacy,
              and in support of AGILA na rin, [is to] act with empathy,”
            </span>
          </p>
          <p style={{ marginBottom: "3rem" }}>Guce suggests.</p>
        </div>
      </div>

      <div className={styles.mainArticle}>
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

        <img className={styles.mag2} src={mag2} alt="Cat Magnifying Glass 2" />
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
    </main>
  );
};

export default InCaringDesktop;