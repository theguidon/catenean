import { Outlet } from "react-router";
import CloudLeft from "../assets/images/game/CloudLeft.svg";
import CloudRight from "../assets/images/game/CloudRight.svg";
import styles from "../styles/game.module.css";
import { BgMusic3 } from "../hooks/sounds.jsx";
import Map from "../assets/images/map.svg";
import MapHover from "../assets/images/map-hover.svg";
import Article from "../assets/images/article.svg";
import ArticleHover from "../assets/images/article_hover_notext.svg";
import MenuBar from "../components/MenuBar.jsx";

export function GameIntroLayout() {
  return (
    <>
      <Outlet />
      <img
        src={CloudLeft}
        className={styles.cloud}
        style={{
          height: "28vh",
          position: "absolute",
          left: "-10vw",
          top: "2vh",
          animationDelay: -1.5,
        }}
      />
      <img
        src={CloudRight}
        className={styles.cloud}
        style={{
          height: "25vh",
          position: "absolute",
          left: "30vw",
          top: "-5vh",
        }}
      />
      <img
        src={CloudLeft}
        className={styles.cloud}
        style={{
          height: "28vh",
          position: "absolute",
          right: "-5vw",
          top: "-5vh",
          animationDelay: -2,
        }}
      />
      <MenuBar
        icons={[
          {
            defaultImg: Article,
            hoverImg: ArticleHover,
            label: "Article",
            link: "/",
          },
          {
            defaultImg: Map,
            hoverImg: MapHover,
            label: "Map",
            link: "/map",
          },
        ]}
      />
    </>
  );
}

export function GameLayout() {
  return (
    <main className={styles.main}>
      <BgMusic3 />
      <Outlet />
    </main>
  );
}
