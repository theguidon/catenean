import styles from "../styles/Map.module.css";
import arete from "../assets/images/buildings/arete.svg";
import areteCat from "../assets/images/cats/illustrations/arete.svg";
import ctc from "../assets/images/buildings/ctc-som.svg";
import ctcCat from "../assets/images/cats/illustrations/ctc-som.svg";
import faura from "../assets/images/buildings/faura.svg";
import fauraCat from "../assets/images/cats/illustrations/faura.svg";
import mvp from "../assets/images/buildings/mvp.svg";
import mvpCat from "../assets/images/cats/illustrations/mvp.svg";
import schmitt from "../assets/images/buildings/schmitt.svg";
import schmittCat from "../assets/images/cats/illustrations/schmitt.svg";
import ears from "../assets/images/cats/illustrations/Ears.svg";
import smallCloud1 from "../assets/Map/Map_Images/small cloud 1.svg";
import smallCloud2 from "../assets/Map/Map_Images/small cloud 2.svg";
import smallCloud3 from "../assets/Map/Map_Images/small cloud 3.svg";
import Article from "../assets/images/article.svg";
import ArticleMobile from "../assets/images/mobile-article.svg";
import { Link } from "react-router";
import { motion, spring, AnimatePresence } from "motion/react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useRef, useState, useEffect } from "react";

const buildingData = {
  arete: {
    position: { bottom: "15%", left: "8%" },
    building: arete,
    cat: { src: areteCat, style: { bottom: "-18%", left: "-25%" } },
    button: { label: "ARETÉ", style: { bottom: 0, right: "-5%" } },
  },
  "ctc-som": {
    position: { bottom: "15%", right: "6%" },
    building: ctc,
    cat: { src: ctcCat, style: { bottom: "-38%", left: "-25%" } },
    button: { label: "ctc-som", style: { bottom: "-5%", right: "-8%" } },
  },
  faura: {
    position: { top: "45%", right: "31%" },
    building: faura,
    cat: { src: fauraCat, style: { bottom: "-38%", left: "-25%" } },
    button: { label: "faura", style: { bottom: "-25%", right: "-5%" } },
  },
  mvp: {
    position: { top: "17%", right: "32%" },
    building: mvp,
    cat: { src: mvpCat, style: { bottom: "-70%", left: "-28%" } },
    button: { label: "MVP", style: { bottom: "-41%", right: "-5%" } },
  },
  schmitt: {
    position: { top: "14%", right: "8%" },
    building: schmitt,
    cat: { src: schmittCat, style: { bottom: "-80%", left: "-20%" } },
    button: { label: "schmitt", style: { bottom: "-60%", right: "-5%" } },
  },
};

const CatButton = ({ label, slug, style }) => {
  return (
    <Link to={`/location/${slug}`} style={style}>
      <motion.div
        animate={{ scale: [1.1, 1] }}
        whileHover={{ scale: [1, 1.1] }}
        transition={{
          type: spring,
          stiffness: 360,
          duration: 0.1,
          bounce: 0.3,
        }}
        className={styles.catButton}
      >
        <img src={ears} />
        <div>
          <p>{label}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const MobileMap = () => {
  const order = ["schmitt", "arete", "faura", "mvp", "ctc-som"];
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % order.length);
  const currentKey = order[imageIndex];
  const data = buildingData[currentKey];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className={styles.mobileMain}>
      <div className={styles.mobileCloud}>
        <p>
          Visit each cat to learn about the fascinating tales they hold about
          campus life. Discover the hidden nooks, legendary landmarks, and
          cherished memories through the eyes of our beloved feline friends and
          their loving partners, the caretakers.
        </p>
      </div>

      <div className={styles.mobileCarousel}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className={styles.mobileSlide}
          >
            <div className={styles.mobileLocationInner}>
              <motion.div initial={{ scaleY: 1 }} className={styles.cat}>
                <motion.img src={data.cat.src} />
              </motion.div>

              <div className={styles.mobileBuildingGroup}>
                <motion.img
                  animate={{ scaleY: [1.05, 1] }}
                  transition={{
                    type: spring,
                    stiffness: 100,
                    animationDuration: 0.2,
                    bounce: 0.2,
                  }}
                  className={styles.building}
                  src={data.building}
                />
                <CatButton slug={currentKey} label={data.button.label} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <Link to="/">
          <img
            src={ArticleMobile}
            style={{
              position: "fixed",
              top: "2vh",
              right: "2vw",
              width: "12vw",
              zIndex: 30,
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

const DesktopMap = () => {
  const mainEl = useRef();

  return (
    <>
      <TransformWrapper initialScale={1} minPositionX={0} minPositionY={0}>
        <TransformComponent
          wrapperStyle={{
            width: "100vw",
            maxWidth: "100vw",
            height: "100vh",
            maxHeight: "100vh",
          }}
        >
          <main
            ref={mainEl}
            className={styles.main}
            id="map-main"
            style={{ right: "0vw", top: "0vh" }}
          >
            <div className={styles.cloud}>
              <p>
                Visit each cat to learn about the fascinating tales they hold
                about campus life. Discover the hidden nooks, legendary
                landmarks, and cherished memories through the eyes of our
                beloved feline friends and their loving partners, the
                caretakers.
              </p>
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.1,
                  stiffness: 250,
                  visualDuration: 0.5,
                }}
                className={styles.popup}
              >
                <p>Drag to pan around the map!</p>
              </motion.div>
            </div>
            <img
              className={styles.smallCloud}
              src={smallCloud3}
              style={{ left: "40%", top: "-5%", animationDelay: "-1s" }}
            />
            <img
              className={styles.smallCloud}
              src={smallCloud1}
              style={{ left: "60%", top: "4%" }}
            />
            <img
              className={styles.smallCloud}
              src={smallCloud2}
              style={{ left: "75%", top: "-1%", animationDelay: "-2s" }}
            />
            {Object.entries(buildingData).map(([key, data]) => (
              <div key={key} className={styles.location} style={data.position}>
                <div>
                  <motion.img
                    animate={{ scaleY: [1.5, 1] }}
                    transition={{
                      type: spring,
                      stiffness: 100,
                      animationDuration: 0.2,
                      bounce: 0.2,
                    }}
                    className={styles.building}
                    src={data.building}
                  />
                  <motion.div
                    initial={{ scaleY: 1 }}
                    whileHover={{ scaleY: [1, 1.1] }}
                    animate={{ scaleY: [1.1, 1] }}
                    transition={{
                      type: spring,
                      stiffness: 520,
                      duration: 0.1,
                      bounce: 0.1,
                    }}
                    className={styles.cat}
                    style={data.cat.style}
                  >
                    <motion.img src={data.cat.src} />
                  </motion.div>
                  <CatButton
                    slug={key}
                    label={data.button.label}
                    style={data.button.style}
                  />
                </div>
              </div>
            ))}
          </main>
        </TransformComponent>
      </TransformWrapper>
      <Link
        to="/"
        style={{
          position: "fixed",
          top: "2vh",
          right: "2vw",
          width: "4vw",
          zIndex: 30,
          cursor: "pointer",
          border: "0",
        }}
      >
        <img
          src={Article}
          style={{
            width: "100%",
          }}
        />
      </Link>
    </>
  );
};

const Map = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <MobileMap /> : <DesktopMap />;
};

export default Map;
