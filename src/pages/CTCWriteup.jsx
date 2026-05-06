import styles from "../styles/CTCWriteup.module.css";

import Pin from "../assets/images/location-pin.svg";
import Cat1 from "../assets/Map/Map_Images/Cats_CTC.svg";
import Building from "../assets/images/location-ctc-som-building.svg";
import Title from "../assets/images/location-ctc-som-title.svg";
import MapFold from "../assets/images/location-map-fold.svg";

export default function LocationWriteup({ setPage }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.photoContainer}>
          <div className={styles.photoContainerPhoto}>
            <img src={Cat1} />
          </div>
        </div>
        <div className={styles.writingContainer}>
          <div className={styles.writingContainerTitle}>
            <img src={Pin} />
            <img src={Title} />
            <h1>MVP</h1>
          </div>
          <img className={styles.writingContainerBuilding} src={Building} />
          <div className={styles.writingContainerWriting}>
            <div>
              <p>
                A few steps from the SEC walk, you will be taken to two seemingly twin buildings called CTC-SOM. Connected by overhead bridges, the expansive complex is filled with classrooms, multiple halls, and numerous departmental offices. The hallways of the buildings are often lined by lounging Cateneans like Princess, whom you would usually find ion the building’s hallways of the buildings or lying on the open lawn. Princess, a renowned Catenean, is even known to ride the elevator up and down SOM, humoring students with her presence as they share a ride with her.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapFold} onClick={() => setPage("map")}>
        <img src={MapFold} className={styles.fold} />
      </div>
      <div className={styles.background}></div>
    </div>
  );
}
