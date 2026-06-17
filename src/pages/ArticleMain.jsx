import styles from "../styles/ArticleMain.module.css";
import StartScreen from "./StartScreen.jsx";
import IntroDesktop from "../components/intro/IntroDesktop";
import IntroMobile from "../components/intro/IntroMobile";
import FurmiliarFacesMobile from "../components/mainarticle/FurmiliarFacesMobile.jsx";
import { useMediaQuery } from "react-responsive";
import { useRef, useEffect, useState } from "react";
import FurmiliarFacesDesktop from "../components/mainarticle/FurmiliarFacesDesktop.jsx";
import DedicatedToTheirCareDesktop from "../components/mainarticle/DedicatedToTheirCare.jsx";
import DedicatedToTheirCareMobile from "../components/mainarticle/DedicatedToTheirCareMobile.jsx";
import ComeAndGoDesktop from "../components/mainarticle/ComeAndGoDesktop.jsx";
import ComeAndGoMobile from "../components/mainarticle/ComeAndGoMobile.jsx";
import ConclusionDesktop from "../components/mainarticle/ConclusionDesktop.jsx";
import ConclusionMobile from "../components/mainarticle/ConclusionMobile.jsx";
import { NavLink } from "react-router";
import Map from "../assets/images/map.svg";
import MapHover from "../assets/images/map-hover.svg";
import MapMobile from "../assets/images/mobile-map.svg";
import { BgMusic1 } from "../hooks/sounds.jsx";

// https://stackoverflow.com/questions/56153797/horizontal-scrolling-on-react-component-using-vertical-mouse-wheel
function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 9,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

function ArticleDesktop() {
  const scrollRef = useHorizontalScroll();
  return (
    <div
      ref={scrollRef}
      style={{
        height: "100vh",
        overflowX: "auto",
        overflowY: "clip",
      }}
    >
      <BgMusic1 />
      <main className={styles.main}>
        <div id="start" style={{ left: 0, top: 0 }} />
        <IntroDesktop />
        <FurmiliarFacesDesktop />
        <DedicatedToTheirCareDesktop />
        <ComeAndGoDesktop />
        <ConclusionDesktop />
        <NavLink to="/map">
          <img src={Map} className={styles.map} />
          <img src={MapHover} className={`${styles.map} ${styles.mapHover}`} />
        </NavLink>
      </main>
    </div>
  );
}

const ArticleMain = () => {
  const [startPressed, setStartPressed] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 501px)" });
  if (isDesktop) {
    if (!startPressed) {
      return (
        <main className={styles.main}>
          <StartScreen startInteractive={() => setStartPressed(true)} />
        </main>
      );
    } else {
      return <ArticleDesktop />;
    }
  }
  return (
    <main className={styles.main}>
      <BgMusic1 />
      <IntroMobile />
      <FurmiliarFacesMobile />
      <DedicatedToTheirCareMobile />
      <ComeAndGoMobile />
      <ConclusionMobile />
      <NavLink to="/map">
        <img
          src={MapMobile}
          style={{
            position: "fixed",
            top: "2vh",
            right: "2vw",
            width: "15vw",
            zIndex: 30,
            cursor: "pointer",
          }}
        />
      </NavLink>
    </main>
  );
};

export default ArticleMain;
