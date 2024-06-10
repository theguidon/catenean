import styles from "../styles/SchmittWriteup.module.css";

import Pin from "../assets/images/location-pin.svg";
import Cat1 from "../assets/Map/Map_Images/Cats_Schmitt.svg";
import Building from "../assets/images/location-schmitt-hall-building.svg";
import Title from "../assets/images/location-schmitt-title.svg";
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
            <h2>Dimsum kittens</h2>
            <div>
              <p>
                Some may be familiar with the late Pao-Pao, Mai-Mai, and
                Ton-Ton, otherwise known as the “dimsum set” cats named after
                siopao, siomai, and wonton respectively. The dimsum Cateneans
                were known as a trio due to their names, but the cats were
                otherwise unrelated.
              </p>
              <p>
                Along one of the corridors at Schmitt Hall, one may find a
                corkboard dedicated to Pao-Pao, who used to frequent the area.
                Although Pao-Pao was a certified feline resident at Schmitt, he
                was first spotted around the Science Education Complex-B (SEC-B)
                before he was lured to move with a serving of sardines. Before
                officially being named Pao-Pao, Johnson says he used to call him
                “bun cat” because of his tail. “It started with Pao-Pao because
                his tail looks like a black siopao,” Johnson shares.
              </p>
              <p>
                When Mai-Mai started living in Schmitt Hall, she soon became
                familiar with Pao-Pao over the pandemic. Because of this, she
                stuck around the building alongside Pao-Pao, prompting the
                faculty members and custodians to continue the dimsum-themed
                names. Unsurprisingly, the two cats quickly bonded like siblings
                due to Pao-Pao’s gentle and friendly nature.
              </p>
              <p>
                “Mai-Mai was a very wild kitten,” Buenafe shares, recalling an
                early encounter with Mai-Mai. “Everyone was scared that she’d
                break some of the reagent bottles. [...] It was only when
                Pao-Pao slowly went up the stairs, into the room, that he was
                the one who coaxed her out of the lab,” she added.
              </p>
              <p>
                Meanwhile, Buenafe describes Ton-Ton as “the mysterious third
                cat who allegedly shows up.” No one is certain as to when
                Ton-Ton began appearing at Schmitt Hall, but he reportedly
                originated from the Office of Admission and Aid. Although
                Ton-Ton is part of the dimsum set, the large grey-brown tabby
                remains a mystery with how sporadic his visits are.
              </p>
              <p>
                Mai-Mai and Ton-Ton still roam the campus, and continue as
                two-thirds of the beloved dimsum set.
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
