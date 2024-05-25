import "../styles/title.css";
import HeartImages from "../components/HeartImages";
import HomeCat from "../assets/images/home-cat.png";
function Title() {
  return (
    <section className="title">
      <div className="middle-container">
        <h2 className="subtitle-text">What the</h2>
        <h1 className="title-text">Cateneans</h1>
        <h2 className="subtitle-text">teach us about love</h2>
        <div className="start-btn">Start</div>
        <img className="home-cat" src={HomeCat} alt="Home Cat" />
      </div>
      <HeartImages />
    </section>
  );
}

export default Title;
