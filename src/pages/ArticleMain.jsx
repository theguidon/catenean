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

const ArticleMain = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 501px)" });
  if (isDesktop) {
    return (
      <div style={{
        overflowX: "auto",
        overflowY: "clip"
      }}>
        <main className={styles.main}>
          <img
            src={grassBg}
            style={{
              position: "absolute",
              width: "90%",
              bottom: 0,
            }} />
          <IntroDesktop />
          <FurmiliarFacesDesktop />
          <InCaringDesktop />
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
