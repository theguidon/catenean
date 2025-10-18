import styles from "../styles/ArticleMain.module.css";
import InLonelinessMobile from "../components/mainarticle/InLonelinessMobile";
import InCaringMobile from "../components/mainarticle/InCaringMobile";
import ComeAndGoMobile from "../components/mainarticle/ComeAndGoMobile";
import ConclusionMobile from "../components/mainarticle/ConclusionMobile";

const ArticleMain = () => {
  return (
    <main className={styles.main}>
      <InLonelinessMobile />
      <InCaringMobile />
      <ComeAndGoMobile />
      <ConclusionMobile />
    </main>
  );
};

export default ArticleMain;
