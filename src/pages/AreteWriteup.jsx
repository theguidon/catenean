import styles from "../styles/AreteWriteup.module.css";

import Pin from "../assets/images/location-pin.svg";
import Cat1 from "../assets/Map/Map_Images/Cats_Arete.svg";
import Building from "../assets/images/location-arete-building.svg";
import Title from "../assets/images/location-arete-title.svg";
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
            <h1>Arete</h1>
          </div>
          <img className={styles.writingContainerBuilding} src={Building} />
          <div className={styles.writingContainerWriting}>
            <h2>Part-time art hub, full-time newsroom</h2>
            <div>
              <p>
                Although Areté is better known as the Ateneo’s creativity and
                innovation hub, it is also home to seven Cateneans, namely Tita
                Mel, Vicky, Iya, Mike, Atom, Igor, and Amihan. Unfortunately,
                only five of them remain in the area since Igor was run over by
                a vehicle. Vicky, on the other hand, was taken in by Areté
                Program Officer Grace Ng due to medical complications.
              </p>
              <p>
                Areté Theater crew member Adriane “Ungri” Ungriano recalls
                taking these cats in during the height of the pandemic. Back
                then, a group of volunteers from Areté’s staff and crew were
                fabricating face shields for donation in Makerspace. This is an
                open facility in the innovation wing that allows artists and
                innovators to use 3D and laser cutting, among other creative
                endeavors.
              </p>
              <p>
                Ungriano shares that the uncertainty of the pandemic was evident
                while they were working at Makerspace. “Keeping track kami of
                what’s happening, so kumbaga, isa sa mga favorite things to
                watch namin was the news. (We were keeping track of what was
                happening, so one of our favorite things to watch was the
                news),” he explains, recounting the origin of the cats’ name.
                Igor and Amihan, on the other hand, strayed from this naming
                convention, as Ate Rose, one of the Areté guards, was the one
                who named them.
              </p>
              <p>
                The cats are mostly featured on the Areté Cats Instagram page,
                which also spotlights Vicky and Igor button pins and sticker
                sheets. According to Ng, who handles the Instagram account, the
                proceeds from selling the merchandise fund the cats’ food.
              </p>
              <p>
                Ng herself made and designed the button pins, while Rio Reyes (4
                BFA ID) made the sticker sheets entitled “Cats of Areté” and
                “Cats of Areté: Roaming Feline Friends.” If the funds are still
                insufficient, Ng and the rest of the staff shell out money from
                their own pockets, as they are yet to garner a stable supply of
                funds and food.
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
