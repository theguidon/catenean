import "./Map.css";
import Credits_Logo from "../Map/Map Images/Credits_Logo.svg";
import Mail_Logo from "../Map/Map Images/Mail_Logo.svg";
import Header from "../Map/Map Images/Header.svg";

function Map(){
    return(
        <>
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
        </>
        
    );
}

export default Map;