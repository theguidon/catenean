import styles from "../styles/CTCWriteup.module.css";

import Pin from "../assets/images/location-pin.svg";
import Cat1 from "../assets/Map/Map_Images/Cats_CTC.svg";
import Building from "../assets/images/location-mvp-building.svg";
import Title from "../assets/images/location-mvp-title.svg";
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
            <h2>Even the cats are “sosyal”</h2>
            <div>
              <p>
                Wandering through the halls of CTC’s fifth floor, one may
                encounter a drawing of a beloved cat on the windows of one of
                the building’s offices.
              </p>
              <p>
                Prada was one of the more prominent Cateneans of the CTC-SOM
                area. Loved by many, she first made rounds in many students’
                hearts by frequenting the ground floor of the SOM building,
                before she followed Resuello up to his lounge room at the CTC’s
                fifth floor. She seemingly followed wherever caring hands would
                take her, as she would gladly stay in areas with people who
                offered food for her.
              </p>
              <p>
                Resuello often feeds Prada as his main alaga (pet). His feeding
                other cats, however, seemingly sparked a hint of jealousy in
                Prada, prompting her to move to the opposite end of the CTC’s
                fifth floor. As a result, Resuello would have to bring her back
                to his lounge area to feed her. Before becoming known as CTC’s
                resident queen cat, she was first a friendly cat who enjoyed
                finding comfort where it was available.
              </p>
              <p>
                Recalling his early days working at the Ateneo, Johnson once
                encountered a young Prada who seemingly enjoyed laying on his
                bag. “She had a fondness for lying on my bag, and I figured,
                well, she lives at SOM, so she must be sosyal (fancy). Prada’s a
                good name for her, and it stuck,” Johnson shares. Prada, notable
                for her friendliness, frequently entered random offices and
                rooms within the CTC-SOM buildings. Unfortunately, shortly after
                her son Pao-Pao died in a roadkill incident, Prada began losing
                her appetite, which led to her own passing.
              </p>
              <p>
                Resuello soon{" "}
                <a href="https://www.facebook.com/jhessie.resuello/posts/pfbid033MoCeHvgX414x5nB7SMyty9RJGWQXEgGLR3RbVPHDQf91UqDBSzMvgNT5daG9KQ7l">
                  announced Prada’s death on his Facebook profile
                </a>
                , where many shared their condolences. Afterward, she was buried
                in the SOM Forest next to her son.
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
