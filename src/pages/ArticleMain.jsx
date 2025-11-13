import styles from "../styles/ArticleMain.module.css";
import IntroDesktop from "../components/intro/IntroDesktop";
import IntroMobile from "../components/intro/IntroMobile";
import InLonelinessDesktop from "../components/mainarticle/InLonelinessDesktop";
import ConclusionDesktop from "../components/mainarticle/ConclusionDesktop";
import InLonelinessMobile from "../components/mainarticle/InLonelinessMobile";
import FurmiliarFacesMobile from "../components/mainarticle/FurmiliarFacesMobile.jsx";
import FurmiliarFacesDesktop from "../components/mainarticle/FurmiliarFacesDesktop.jsx";
import InCaringMobile from "../components/mainarticle/InCaringMobile";
import InCaringDesktop from "../components/mainarticle/InCaringDesktop.jsx";
import ComeAndGoMobile from "../components/mainarticle/ComeAndGoMobile";
import ConclusionMobile from "../components/mainarticle/ConclusionMobile";
import grassBg from "../assets/images/grasslong.svg";
import { useMediaQuery } from "react-responsive";
import ComeAndGoDesktop from "../components/mainarticle/ComeAndGoDesktop";
import { useRef, useEffect } from "react";

// https://stackoverflow.com/questions/56153797/horizontal-scrolling-on-react-component-using-vertical-mouse-wheel
function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 2,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const ArticleMain = () => {
  const scrollRef = useHorizontalScroll();
  const isDesktop = useMediaQuery({ query: "(min-width: 501px)" });
  if (isDesktop) {
    return (
      <div ref={scrollRef} style={{
        overflowX: "auto",
        overflowY: "clip"
      }}>
        <main className={styles.main}>
          <IntroDesktop />
          <FurmiliarFacesDesktop />
          <InLonelinessDesktop />
          <InCaringDesktop />
          <ComeAndGoDesktop />
          <div style={{
            position: "absolute",
            width: "90%",
            bottom: 0,
            left: 0,
            zIndex: 0
          }}>
            <img
              src={grassBg}
              style={{
                width: "100%",
              }} />
          </div>
          <ConclusionDesktop />
        </main>
      </div>
    );
  }
  return (
    <main className={styles.main}>
      <IntroMobile />
      <FurmiliarFacesMobile />
      <InLonelinessMobile />
      <InCaringMobile />
      <ComeAndGoMobile />
      <ConclusionMobile />
    </main>
  );
};

export default ArticleMain;
