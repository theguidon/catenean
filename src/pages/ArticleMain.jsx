import styles from "../styles/ArticleMain.module.css";
import IntroDesktop from "../components/intro/IntroDesktop";
import IntroMobile from "../components/intro/IntroMobile";
import InLonelinessDesktop from "../components/mainarticle/InLonelinessDesktop";
import ConclusionDesktop from "../components/mainarticle/ConclusionDesktop";
import InLonelinessMobile from "../components/mainarticle/InLonelinessMobile";
import FurmiliarFacesMobile from "../components/mainarticle/FurmiliarFacesMobile.jsx";
import InCaringMobile from "../components/mainarticle/InCaringMobile";
import ComeAndGoMobile from "../components/mainarticle/ComeAndGoMobile";
import ConclusionMobile from "../components/mainarticle/ConclusionMobile";
import grassBg from "../assets/images/background-grass.svg";
import { useMediaQuery } from "react-responsive";
import ComeAndGoDesktop from "../components/mainarticle/ComeAndGoDesktop";
import FurmiliarFacesDesktop from "../components/mainarticle/FurmiliarFacesDesktop.jsx";

const ArticleMain = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 501px)" });
  if (isDesktop) {
    return (
      <main className={styles.main}>
        {/**
        <div className={styles.grassLayer}>
        </div>
        **/}
        <IntroDesktop />
        <FurmiliarFacesDesktop />
        <InLonelinessDesktop />
        <ComeAndGoDesktop />
        <ConclusionDesktop />
      </main>
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
