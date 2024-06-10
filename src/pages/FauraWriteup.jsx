import styles from "../styles/FauraWriteup.module.css";

import Pin from "../assets/images/location-pin.svg";
import Cat1 from "../assets/Map/Map_Images/Cats_Faura.svg";
import Building from "../assets/images/location-faura-building.svg";
import Title from "../assets/images/location-faura-title.svg";
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
            <h2>Home of the wild(ly) lovable</h2>
            <div>
              <p>
                Compared to other areas, Guce notes that Faura Hall is not a
                designated cat colony. Nevertheless, a plethora of cats still
                inhabit the building. “The big orange cats there, I think there
                was a mother cat that gave birth recently, and there was a
                litter of kittens [that] someone abandoned behind Faura,” he
                recalls. Guce shares that the Faura Hall personnel fostered the
                kittens, but unfortunately, the litter had passed away.
              </p>
              <p>
                Unlike Prada with Resuello, Barbie and Dongyan with Butlig, or
                Pao-Pao with the Chemistry Department, the Faura cats do not
                have assigned caretakers as they are considered “wild.” Though
                these cats are not as socialized with humans as others, that
                does not mean people are not looking out for them. “It’s really
                inspiring to see some of the personnel shell [out] from their
                pockets, cat food. So ‘yung ulam nila, ‘yung kinakain sana nila
                (their food) for lunch, they share it pa (still) with the
                kittens and the cats in Faura,” Guce remarks. He shares that
                these personnel have a bond with the Faura cats, who are just as
                lovable as the other Cateneans, though not as tame. Some cats
                were even fostered by the personnel and grew to be big. However,
                not all the Faura cats were as fortunate.
              </p>
              <p>
                “There were plans to{" "}
                <a href="https://www.avma.org/resources-tools/pet-owners/petcare/spaying-and-neutering">
                  spay and neuter
                </a>{" "}
                them. However, there was a very bad sickness that circulated
                around Faura around last year, second semester, so there were a
                lot of deaths,” Guce notes.
              </p>
              <p>
                Although some of Faura Hall’s feline residents have met a sad
                end, life there begins anew as it serves as a cradle to another{" "}
                <a href="https://www.facebook.com/AteneanAgila/posts/pfbid05a8BrkezwBJXpcPpD66v6QR3dWM6yhcGaBNEpTZ1ZNbSi8VGvdsPsMdua5XT37zWl">
                  litter
                </a>{" "}
                of growing kittens.
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
