import styles from "../styles/BuildingWriteup.module.css";
import bg from "../assets/images/Background.svg";
import arrow from "../assets/images/Union.svg";
import back from "../assets/images/Back.svg";
import { useMediaQuery } from "react-responsive";
import { useLoaderData, Link } from "react-router";

export default function BuildingWriteup() {
  const data = useLoaderData();
  const isMobile = useMediaQuery({ query: '(max-width: 699px)' });

  const NavArrows = () => (
    <section className={styles.navArrows}>
      <Link to={`/${data.back.toLowerCase()}`}>
        <section className={`${styles.link} ${styles.back}`}>
          <img src={arrow} />
          <p>{data.back.toUpperCase()}</p>
        </section>
      </Link>
      <Link to={`/${data.next.toLowerCase()}`}>
        <section className={`${styles.link} ${styles.next}`}>
          <p>{data.next.toUpperCase()}</p>
          <img src={arrow} style={{ transform: "scaleX(-1)" }} />
        </section>
      </Link>
    </section>
  );

  return (
    <main
      className={styles.main}
      style={{
        background: `center / cover no-repeat url(${bg}), ${data.bgColor}`
      }}
    >
      <img
        src={back}
        className={styles.backButton}
      />
      <section className={styles.writeup}>
        {isMobile && <NavArrows />}
        <section className={styles.heading}>
          <img src={`src/assets/images/${data.bldgImage}`} />
          <section className={styles.titleCaption}>
            <h1 style={{ color: data.nameColor }}>{data.name}</h1>
            <h2 style={{ color: data.captionColor }}>{data.caption}</h2>
          </section>
        </section>
        <p className={styles.content}>
          {data.article}
        </p>
      </section>
      <section className={styles.cats}>
        <article>
          <img src={`src/assets/images/cats/${data.cats[0].pic}`} />
          <p style={{ color: data.nameColor }} >{data.cats[0].name}</p>
        </article>
        <article>
          <img src={`src/assets/images/cats/${data.cats[1].pic}`} />
          <p style={{ color: data.nameColor }} >{data.cats[1].name}</p>
        </article>
        {!isMobile && <NavArrows />}
      </section>
    </main>
  );
}
