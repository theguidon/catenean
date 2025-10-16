import { useState, useEffect, useRef } from 'react';
import styles from "../../styles/InCaringMobile.module.css";
import building from "../../assets/images/schmitt-hall-w-deco.svg";
import mag1 from "../../assets/images/mag1.svg";
import catImg from "../../assets/images/two_cats_plain.png";

const InCaringMobile = () => {
  const [isMag1Visible, setIsMag1Visible] = useState(false);
  const [isCatsVisible, setIsCatsVisible] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  const mag1Ref = useRef(null);
  const catsRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsMag1Visible(true);
          observer.unobserve(mag1Ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (mag1Ref.current) observer.observe(mag1Ref.current);
    return () => {
      if (mag1Ref.current) observer.unobserve(mag1Ref.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsQuoteVisible(true);
          observer.unobserve(quoteRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => {
      if (quoteRef.current) observer.unobserve(quoteRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCatsVisible(true);
          observer.unobserve(catsRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (catsRef.current) observer.observe(catsRef.current);
    return () => {
      if (catsRef.current) observer.unobserve(catsRef.current);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.mainArticle}>
        <h3>In caring, caution, and commitment</h3>

        <img className={styles.building} src={building} alt="asset of schmitt hall"/>

        <p>
          To maintain students’ and the campus cats’ safety, one of AGILA’s
          projects is tracking the campus cats and their needs by conducting{" "}
          <a href="https://lionshome.org/agila/">regular cat census.</a> However,
          AGILA President Tobiel Guce mentions that doing this has proven
          difficult since the pandemic mainly due to miscommunication caused by
          personnel changes within the Ateneo Institute of Sustainability (AIS)
          and the Ateneo Community Cat Program (ACCaP).
        </p>

        <p>
          AGILA, ACCaP, and AIS normally collaborate with each other on
          initiatives that help the Cateneans, including AGILA’s cat census.
          Guce notes that because they are an organization of college students,
          they cannot access areas outside of the LS campus to complete their
          records. ACCaP and AIS normally helped them fill the gaps of this
          limitation.
        </p>

        <p>
          Furthermore, AIS is concerned with promoting campus biodiversity while{" "}
          <a href="https://paws.org.ph/paws-ateneo-launch-program-for-stray-cats-on-campus/">
            ACCaP
          </a>{" "}
          manages the cat population through various University-wide programs.
        </p>

        <img 
          ref={mag1Ref} 
          className={`${styles.imgStyle} ${isMag1Visible ? styles.animateTilt : ''}`} 
          src={mag1} 
          alt="image of cat"
        />

        <div 
          ref={quoteRef} 
          className={`${styles.quoteContainer} ${isQuoteVisible ? styles.animateQuote : ''}`}
        >
          <p className={styles.quote}>
            <span>
              “The best thing [students] can do regarding animal welfare advocacy,
              and in support of AGILA na rin, [is to] act with empathy,”
            </span>
          </p>
        </div>
        
        <p style={{ marginBottom: "3rem" }}>Guce suggests.</p>

        <p>
          For him, supporting animal welfare advocacy means being persons for
          others, which is inclusive of other forms of life. This practice can
          manifest through slowing vehicles down for animals and segregating
          trash so that stray animals do not try to eat them.
        </p>

        <p>
          Through caring for the Cateneans and their safety, a deeper
          understanding of animal welfare advocacy may become easier to develop.
          Many students and faculty of the Ateneo already have a fondness for
          the campus cats, and it is seen in how easy it is to get caught up in
          being affectionate with them. “They’re fun to watch, they’re fun to
          look at, they’re adorable, they’re photogenic. They’re malambing
          (affectionate), and there are a lot of Ateneans who are missing their
          pets at home,” Guce says.
        </p>

        <img
          ref={catsRef}
          className={`${styles.twoCats} ${isCatsVisible ? styles.animateCats : ''}`}
          src={catImg}
          alt="image of 2 cats"
        />
        
        <p>
          Those with pets at home may find it easy to approach the cats with
          their existing familiarity in handling pets, but this may pose a
          danger in dealing with the Cateneans. Guce warns that the cats are
          still regarded as unsocialized animals and prefer to be kept feral, as
          it helps maintain their independence and role as pest control on
          campus.
        </p>
      </div>
    </main>
  );
};

export default InCaringMobile;