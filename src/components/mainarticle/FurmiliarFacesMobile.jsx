import sectionStyles from "../../styles/FurmiliarFacesMobile.module.css";
import styles from "../../styles/FurmiliarFacesDesktop.module.css";
import CTC from "../../assets/images/location-ctc-som-building.svg";
import Faura from "../../assets/images/buildings/no-shadow/faura.svg";
import Arete from "../../assets/images/buildings/no-shadow/arete.svg";
import Schmitt from "../../assets/images/buildings/no-shadow/schmitt.svg";
import MVP from "../../assets/images/buildings/no-shadow/mvp.svg";
import Grass from "../../assets/images/grass.svg";
import Dongyan from "../../assets/images/cats/dongyan.png";
import Barbie from "../../assets/images/cats/barbie.png";

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
        <section
          style={{
            width: "100%",
            padding: "0%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
          }}
        >
          <article
            className={sectionStyles.polaroid}
            style={{
              transform: "rotate(10deg)",
              left: "5vw",
            }}
          >
            <img src={Barbie} alt="" />
            <p>Barbie</p>
          </article>
          <article
            className={sectionStyles.polaroid}
            style={{
              transform: "rotate(-10deg)",
              right: "5vw",
              bottom: "12px",
            }}
          >
            <img src={Dongyan} alt="" />
            <p>Dongyan</p>
          </article>
        </section>
        <p style={{ marginTop: "2.5em" }}>
          Meanwhile, Faura Hall—and, by extension, the SOM Forest—is home to a
          lively cast of adventurous Cateneans.
        </p>
        <p>
          Some of Faura’s residents include Blue Eyes, the only recorded cat on
          campus with heterochromia. Blue Eyes patrols the area alongside
          Bardagul, whose name comes from his tendency to get into catfights.
          Then there’s Tarzan, a feral cat who likes to jump on trees to avoid
          people. All of these residents are lovingly cared for by June,* a
          maintenance staff member of the Ateneo.
        </p>
        <div
          className={`${sectionStyles.heading} ${sectionStyles.section}`}
          style={{
            minHeight: "30vh",
          }}
        >
          <img
            src={MVP}
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
        <p>
          In Areté, the cats do not shy away from showing off their unique
          quirks. For instance, the late Ponpon was often kept inside a cage due
          to his habit of staying near cars. He and George shared a playful
          rivalry, with George’s bunso title once stolen by Ponpon before his
          untimely passing.
        </p>
        <p>
          A few steps away, in another corner of Areté, cateneans Tita Mel and
          Jes remain elusive and difficult to spot, often found curled up
          together in a perfect ball during their naps.
        </p>
        <div
          className={`${sectionStyles.heading} ${sectionStyles.section}`}
          style={{
            minHeight: "30vh",
          }}
        >
          <img
            src={Arete}
            style={{
              position: "absolute",
              bottom: "13vw",
              left: "10vw",
              zIndex: "0",
              width: "80%",
            }}
          ></img>
          <img
            src={Grass}
            style={{ position: "absolute", bottom: "0", width: "101dvw" }}
          />
        </div>
        <p>
          Over in Schmitt Hall, Hakaw and Maimai share the space in spite of
          their contrasting personalities. According to Ateneans Guided and
          Inspired by Love for Animals (AGILA) moderator and Chemistry
          Department Chair Olivia Erin Buenafe, the extroverted Hakaw is
          considered the “spiritual successor” to late Paopao, after inheriting
          some of his endearing habits like opening windows. On the other hand,
          introverted Maimai plays by her own terms, only interacting with
          people whenever she deems fit and retreats inside buildings to relish
          in her own company.
        </p>
        <div
          className={`${sectionStyles.heading} ${sectionStyles.section}`}
          style={{
            minHeight: "35vh",
          }}
        >
          <img
            src={Schmitt}
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
      </main>
    </>
  );
};

export default FurmiliarFacesMobile;
