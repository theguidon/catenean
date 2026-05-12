import styles from "../styles/ArticleMain.module.css";
import IntroDesktop from "../components/intro/IntroDesktop";
import IntroMobile from "../components/intro/IntroMobile";
import InLonelinessMobile from "../components/mainarticle/InLonelinessMobile";
import FurmiliarFacesMobile from "../components/mainarticle/FurmiliarFacesMobile.jsx";
import InCaringMobile from "../components/mainarticle/InCaringMobile";
import ComeAndGoMobile from "../components/mainarticle/ComeAndGoMobile";
import ConclusionMobile from "../components/mainarticle/ConclusionMobile";
import { useMediaQuery } from "react-responsive";
import { useRef, useEffect } from "react";
import FurmiliarFacesDesktop from "../components/mainarticle/FurmiliarFacesDesktop.jsx";
import DedicatedToTheirCareDesktop from "../components/mainarticle/DedicatedToTheirCare.jsx";
import ComeAndGoDesktop from "../components/mainarticle/ComeAndGoDesktop.jsx";
import ConclusionDesktop from "../components/mainarticle/ConclusionDesktop.jsx";

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
          <DedicatedToTheirCareDesktop />
          <ComeAndGoDesktop />
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
