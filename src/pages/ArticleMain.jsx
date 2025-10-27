import styles from "../styles/ArticleMain.module.css";
import IntroMobile from "../components/intro/IntroMobile";
import InLonelinessMobile from "../components/mainarticle/InLonelinessMobile";
import InCaringMobile from "../components/mainarticle/InCaringMobile";
import ComeAndGoMobile from "../components/mainarticle/ComeAndGoMobile";
import ConclusionMobile from "../components/mainarticle/ConclusionMobile";
import { useMediaQuery } from "react-responsive";

const ArticleMain = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 501px)" });
  if (isDesktop) return (<p>Desktop coming soon</p>);
  return (
    <main className={styles.main}>
      <IntroMobile />
      <InLonelinessMobile />
      <InCaringMobile />
      <ComeAndGoMobile />
      <ConclusionMobile />
    </main>
  );
};

export default ArticleMain;
