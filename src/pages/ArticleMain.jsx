import styles from "../styles/ArticleMain.module.css";
import squiggle from "../assets/images/squiggle.svg";
import MapFold from "../assets/images/location-map-fold.svg";
import cat1 from "../assets/images/cats/2.jpeg";
import cat2 from "../assets/images/cats/7.jpeg";
import cat3 from "../assets/images/cats/6.jpeg";
import photoCardsLine from "../assets/images/photo-cards-line.svg";
import helloCat from "../assets/images/hello-cat.png";
import cloud from "../assets/images/cloud.svg";
import heartCatSmall1 from "../assets/images/heart-cat-small-1.png";
import heartCatSmall2 from "../assets/images/heart-cat-small-2.png";
import heartCatSmall3 from "../assets/images/heart-cat-small-3.png";
import heartCatBig from "../assets/images/heart-cat-big.png";
import circleCat from "../assets/images/circle-cat.png";
import mag1 from "../assets/images/mag1.png";
import mag2 from "../assets/images/mag2.png";
import heartHighFive from "../assets/images/heart-high-five.svg";
import cloudCat from "../assets/images/cloud-cat.png";
import bigCloud from "../assets/images/big-cloud.png";
import grass from "../assets/images/grass.png";
import paopao from "../assets/images/paopao.png";
import brownEllipses from "../assets/images/brown-ellipses.svg";
import bigHeart from "../assets/images/big-heart.svg";
import threeCats from "../assets/images/three-cats.png";
import paw from "../assets/images/paw.svg";
import heart from "../assets/images/heart.svg";
import FurmiliarFaces from "../components/mainarticle/FurmiliarFaces.jsx";
import Credits from "../components/mainarticle/Conclusion.jsx";

const ArticleMain = ({ setPage }) => {
  return (
    <main className={styles.main}>
      <FurmiliarFaces></FurmiliarFaces>
      <Credits></Credits>
    </main>
  );
};

export default ArticleMain;
