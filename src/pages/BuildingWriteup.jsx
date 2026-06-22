import styles from "../styles/BuildingWriteup.module.css";
import bg from "../assets/images/Background.svg";
import arrow from "../assets/images/Union.svg";
import back from "../assets/images/Back.svg";
import { useMediaQuery } from "react-responsive";
import { useLoaderData, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useSwipeable } from "react-swipeable";

export default function BuildingWriteup() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 699px)" });
  const isSmallMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate(`/location/${data.next.toLowerCase()}`),
    onSwipedRight: () => navigate(`/location/${data.back.toLowerCase()}`),
    preventScrollOnSwipe: false,
    trackMouse: false,
  });

  const NavArrows = ({ isHeader = false }) => (
    <section
      className={`${styles.navArrows} ${isHeader ? styles.headerNav : ""}`}
    >
      <Link to={`/location/${data.back.toLowerCase()}`} className={styles.link}>
        <motion.section
          initial={{ scale: 1 }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{
            type: "spring",
            duration: 0.25,
            bounce: 0.1,
            bounceDamping: 50,
            stiffness: 500,
          }}
          className={`${styles.link} ${styles.back}`}
        >
          <img src={arrow} alt="Previous" />
          {!isSmallMobile && (
            <p>{data.back === "arete" ? "ARETÉ" : data.back.toUpperCase()}</p>
          )}
          {isSmallMobile && (
            <p className={styles.mobileNavText}>
              {data.back === "arete" ? "ARETÉ" : data.back.toUpperCase()}
            </p>
          )}
        </motion.section>
      </Link>
      <Link to={`/location/${data.next.toLowerCase()}`} className={styles.link}>
        <motion.section
          initial={{ scale: 1 }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{
            type: "spring",
            duration: 0.25,
            bounce: 0.1,
            bounceDamping: 50,
            stiffness: 500,
          }}
          className={`${styles.link} ${styles.next}`}
        >
          {!isSmallMobile && (
            <p>{data.next === "arete" ? "ARETÉ" : data.next.toUpperCase()}</p>
          )}
          {isSmallMobile && (
            <p className={styles.mobileNavText}>
              {data.next === "arete" ? "ARETÉ" : data.next.toUpperCase()}
            </p>
          )}
          <img src={arrow} style={{ transform: "scaleX(-1)" }} alt="Next" />
        </motion.section>
      </Link>
    </section>
  );

  return (
    <main
      {...handlers}
      className={styles.main}
      style={{
        background: `${isSmallMobile ? "top center / 100% auto" : "center / cover"} no-repeat url(${bg}), ${data.bgColor}`,
      }}
    >
      {isSmallMobile ? (
        <header className={styles.mobileHeader}>
          <NavArrows isHeader={true} />
          <Link to="/map" className={styles.mobileBackButtonWrapper}>
            <img
              src={back}
              className={styles.mobileBackButton}
              alt="Back to Map"
            />
          </Link>
        </header>
      ) : (
        <Link to="/map">
          <img src={back} className={styles.backButton} alt="Back to Map" />
        </Link>
      )}

      <section className={styles.writeup}>
        {isMobile && !isSmallMobile && <NavArrows />}
        <section className={styles.heading}>
          <img
            src={`/assets/buildings/no-shadow/${data.bldgImage}`}
            alt={data.name}
          />
          <section className={styles.titleCaption}>
            <h1
              style={{
                color: data.nameColor,
              }}
            >
              {data.name}
            </h1>
          </section>
        </section>

        <p className={styles.content}>{data.article}</p>
      </section>

      <section className={styles.cats}>
        {data.cats.map((cat, index) => (
          <article key={index}>
            <img src={`/assets/cats/${cat.pic}`} alt={cat.name} />
            <p style={{ color: data.nameColor }}>{cat.name}</p>
          </article>
        ))}
        {!isMobile && <NavArrows />}
      </section>
    </main>
  );
}
