import "../styles/title.css";
import HeartImages from "../components/HeartImages";
import GuidonLogo from "../assets/images/guidon.svg";

function Title() {
  return (
    <section className="title">
      <div className="middle-container">
        <img src={GuidonLogo} className="guidon-logo" />
        <div className="interactive-title">
          <h2 className="subtitle-text">What the</h2>
          <h1 className="title-text">Cateneans</h1>
          <h2 className="subtitle-text">teach us about love</h2>
        </div>
        <div className="start-btn">Start</div>
      </div>
      <HeartImages />
    </section>
  );
}

export default Title;
