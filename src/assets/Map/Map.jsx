import "./Map.css";
import Map_Campus from "../Map/Map_Images/Map_background.svg";
import Credits_Logo from "../Map/Map_Images/Credits_Logo.svg";
import Mail_Logo from "../Map/Map_Images/Mail_Logo.svg";
import Mail_Logo_Hover from "../Map/Map_Images/Mail_Logo_Hover.svg";
import Button_Arete from "../Map/Map_Images/Button_Arete.svg";
import Button_Arete_Hover from "../Map/Map_Images/Button_Arete_Hover.svg";
import Button_CTC from "../Map/Map_Images/Button_CTC.svg";
import Button_CTC_Hover from "../Map/Map_Images/Button_CTC_Hover.svg";
import Button_Faura from "../Map/Map_Images/Button_Faura.svg";
import Button_Faura_Hover from "../Map/Map_Images/Button_Faura_Hover.svg";
import Button_MVP from "../Map/Map_Images/Button_MVP.svg";
import Button_MVP_Hover from "../Map/Map_Images/Button_MVP_Hover.svg";
import Button_Schmitt from "../Map/Map_Images/Button_Schmitt.svg";
import Button_Schmitt_Hover from "../Map/Map_Images/Button_Schmitt_Hover.svg";
import Cats_Arete from "../Map/Map_Images/Cats_Arete.svg";
import Cats_CTC from "../Map/Map_Images/Cats_CTC.svg";
import Cats_Faura from "../Map/Map_Images/Cats_Faura.svg";
import Cats_MVP from "../Map/Map_Images/Cats_MVP.svg";
import Cats_Schmitt from "../Map/Map_Images/Cats_Schmitt.svg";
import Catenean_Logo from "../Map/Map_Images/Catenean_Logo.svg";

function Map() {
  return (
    <>
      <div className="backgroundWrapper">
        <div className="upperLogosWrapper">
          <div className="upperButtonsContainer">
            <div className="Mail_Logo_Container">
              <img className="Mail_Logo_Hover" src={Mail_Logo_Hover} alt="" />
              <img className="Mail_Logo" src={Mail_Logo} alt="" />
            </div>
            <div className="Credits_Logo_Container">
              <img className="Credits_Logo" src={Credits_Logo} alt="" />
            </div>
          </div>
          <div className="aboutCard">
            <img src={Catenean_Logo} />
            <p>
              Visit each cat to learn about the fascinating tales they hold
              about campus life. Discover the hidden nooks, legendary landmarks,
              and cherished memories through the eyes of our beloved feline
              friends and their loving partners, the caretakers.
            </p>
          </div>
        </div>
        <div className="mapWrapper" style={{backgroundImage: `url(${Map_Campus})`}}>
          <div>
            <img className="Button_Arete" src={Button_Arete} alt="" />
            <img className="Cats_Arete" src={Cats_Arete} alt="" />
            <img
              className="Button_Arete_Hover"
              src={Button_Arete_Hover}
              alt=""
            />
          </div>
          <div>
            <img className="Button_MVP" src={Button_MVP} alt="" />{" "}
            <img className="Cats_MVP" src={Cats_MVP} alt="" />
            <img className="Button_MVP_Hover" src={Button_MVP_Hover} alt="" />
          </div>
          <div>
            <img className="Button_Faura" src={Button_Faura} alt="" />{" "}
            <img className="Cats_Faura" src={Cats_Faura} alt="" />
            <img
              className="Button_Faura_Hover"
              src={Button_Faura_Hover}
              alt=""
            />
          </div>
          <div>
            <img className="Button_Schmitt" src={Button_Schmitt} alt="" />{" "}
            <img
              className="Button_Schmitt_Hover"
              src={Button_Schmitt_Hover}
              alt=""
            />
            <img className="Cats_Schmitt" src={Cats_Schmitt} alt="" />
          </div>
          <div>
            <img className="Button_CTC" src={Button_CTC} alt="" />{" "}
            <img className="Button_CTC_Hover" src={Button_CTC_Hover} alt="" />
            <img className="Cats_CTC" src={Cats_CTC} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;

