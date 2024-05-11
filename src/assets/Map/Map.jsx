import "./Map.css";
import Background from "../Map/Map_Images/Map_background.svg";
import Credits_Logo from "../Map/Map_Images/Credits_Logo.svg";
import Mail_Logo from "../Map/Map_Images/Mail_Logo.svg";
import Header from "../Map/Map_Images/Header.svg";

function Map(){
    return(
        <>
            <div className="backgroundWrapper">
                <div className="upperLogosWrapper">
                    <span className="Mail_Logo_Container">
                        <img className="Mail_Logo" src={Mail_Logo} alt="" />
                    </span>
                    <span className="Credits_Logo_Container">
                        <img className="Credits_Logo" src={Credits_Logo} alt="" />
                    </span>
                </div>
                <div className="headerWrapper">
                    <img className="Header" src={Header}/>
                </div>
            </div>
        </>
    );
}

export default Map;