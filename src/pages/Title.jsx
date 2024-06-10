import "../styles/title.css";
import HeartImages from "../components/HeartImages";
import GuidonLogo from "../assets/images/guidon.svg";
import HeartBG from "../assets/images/heart-background.png";
import PawBG from "../assets/images/paw-background.png";

import { useState, useEffect } from "react";

function Title({ setPage }) {
  const [isBgHeart, setIsBgHeart] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBgHeart(!isBgHeart);
    }, 1000);

    return () => clearInterval(interval);
  }, [isBgHeart]);

  return (
    <section className="title">
      <div className="middle-container">
        <img src={GuidonLogo} className="guidon-logo" />
        <div className="interactive-title">
          <h2 className="subtitle-text">What the</h2>
          <h1 className="title-text">Cateneans</h1>
          <h2 className="subtitle-text">teach us about love</h2>
        </div>
        <button className="start-btn" onClick={() => setPage("map")}>Start</button>
      </div>
      <img src={isBgHeart ? HeartBG : PawBG} className="title-background" />
      <HeartImages />
    </section>
  );
}

export default Title;
