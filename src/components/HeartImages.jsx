import "../styles/heart.css";
import { importAllImages } from "../utils/importImages";
const images = importAllImages();

const HeartImages = () => {
  return (
    <div className="heart-container">
      {Object.keys(images).map((key, index) => (
        <img key={index} src={images[key]} alt={key} className="heart-image" />
      ))}
    </div>
  );
};

export default HeartImages;
