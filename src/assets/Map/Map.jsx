import "./Map.css";
import Map_Campus from "../Map/Map_Images/Map_background.svg";
import Credits_Logo from "../Map/Map_Images/Credits_Logo.svg";
import Mail_Logo from "../Map/Map_Images/Mail_Logo.svg";
import Mail_Logo_Hover from "../Map/Map_Images/Mail_Logo_Hover.svg";
import Header from "../Map/Map_Images/Header.svg";
import Button_Arete from "../Map/Map_Images/Button_Arete.svg";
import Button_Arete_Hover from "../Map/Map_Images/Button_Arete_Hover.svg";
import Button_Faura from "../Map/Map_Images/Button_Faura.svg";
import Button_MVP from "../Map/Map_Images/Button_MVP.svg";
import Cats_Arete from "../Map/Map_Images/Cats_Arete.svg";
import Cats_Faura from "../Map/Map_Images/Cats_Faura.svg";
import Cats_MVP from "../Map/Map_Images/Cats_MVP.svg";

function Map(){
    return(
        <>
            <div className="backgroundWrapper">
                <div className="upperLogosWrapper">
                    <span className="Mail_Logo_Container">
                        <img className="Mail_Logo" src={Mail_Logo} alt="" />
                        <img className="Mail_Logo_Hover" src={Mail_Logo_Hover} alt="" />
                    </span>
                    <span className="Credits_Logo_Container">
                        <img className="Credits_Logo" src={Credits_Logo} alt="" />
                    </span>
                </div>
                <div className="mapWrapper">
                    <div className="headerWrapper">
                        <img className="Header" src={Header}/>
                    </div>
                    <img className="Map_Campus" src={Map_Campus} alt="" />
                    <img className="Button_Arete" src={Button_Arete} alt="" />
                    <img className="Cats_Arete" src={Cats_Arete} alt="" />
                    <img className="Button_MVP" src={Button_MVP} alt="" />
                    <img className="Cats_MVP"  src={Cats_MVP} alt="" />
                    <img className="Button_Faura" src={Button_Faura} alt="" />
                    <img className="Cats_Faura" src={Cats_Faura} alt="" />
                </div>
            </div>
        </>
    );
}

export default Map;