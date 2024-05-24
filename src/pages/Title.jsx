import "../styles/title.css";
import HeartImages from "../components/HeartImages";
function Title() {
  return (
    <section className="title">
      <div className="middle-container">
        <h2 className="subtitle-text">What the</h2>
        <h1 className="title-text">Cateneans</h1>
        <h2 className="subtitle-text">teach us about love</h2>
        <div className="start-btn">Start</div>
      </div>
      <HeartImages />
    </section>
  );
}

export default Title;
