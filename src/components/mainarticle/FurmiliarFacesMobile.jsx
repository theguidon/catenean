import sectionStyles from "../../styles/FurmiliarFacesMobile.module.css";
import CTC from "../../assets/images/location-ctc-som-building.svg";
import Bush from "../../assets/images/bush.svg";
import Grass from "../../assets/images/grass.svg";
import { color, easeInOut, motion } from "motion/react";

const FurmiliarFacesMobile = () => {
  return (
    <>
      <main className={sectionStyles.main}>
        <div className={sectionStyles.sectionContainer}>
          <div className={`${sectionStyles.heading} ${sectionStyles.section}`}>
            <h3>Fur-miliar faces</h3>
            <img
              src={CTC}
              style={{
                position: "absolute",
                bottom: "13vw",
                left: "20vw",
                zIndex: "0",
                width: "60%",
              }}
            ></img>
            <img
              src={Grass}
              style={{ position: "absolute", bottom: "0", width: "101dvw" }}
            />
          </div>
          <article style={{ margin: "48px 0" }}>
            <p>
              Whether one is sitting on a bench in CTC-SOM or taking a walk on
              the Red Brick Road, a furry company will never be far from sight.
              They can be found either lounging with their legs stretched
              forward, brushing softly against a passerby’s leg, or wandering up
              to students and staff seeking food.
            </p>
            <p>
              Due to their constant presence in the community, some Cateneans
              have gained a renowned popularity among the Ateneans.
            </p>
            <p>
              In the lively MVP Center, the friendly Dongyan is often seen
              keeping watch by the guard’s table. Not far away, the sassy
              Barbie, born around the time the movie
              <a href="https://www.imdb.com/title/tt1517268/">Barbie</a>(2023)
              was released, once had a brother named Oppenheimer who sadly
              passed away as a kitten. Yet, despite being alone, Barbie is never
              lonely, spending most of her days exploring the
              organization&apos;s rooms.
            </p>
          </article>
        </div>
      </main>
    </>
  );
};

export default FurmiliarFacesMobile;
