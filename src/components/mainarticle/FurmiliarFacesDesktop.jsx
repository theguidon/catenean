import Ellipses from "../ellipses.jsx";
import Bush from "../../assets/images/bush.svg";
import CTCSOM from "../../assets/images/buildings/no-shadow/ctc-som.svg";
import MVP from "../../assets/images/buildings/no-shadow/mvp.svg";
import Faura from "../../assets/images/buildings/no-shadow/faura.svg";
import Arete from "../../assets/images/buildings/no-shadow/arete.svg";
import Schmitt from "../../assets/images/buildings/no-shadow/schmitt.svg";
import Dongyan from "../../assets/images/cats/dongyan.png";
import Barbie from "../../assets/images/cats/barbie.png";
import RedFlower from "../../assets/images/red-flower.svg";
import YellowFlower from "../../assets/images/yellow-flower.svg";
import YellowFlower2 from "../../assets/images/yellow-flower-2.svg";
import FlowerGroup from "../../assets/images/flower-group.svg";
import FauraCats from "../../assets/images/fauracats.png";
import highFiveHeartBackground from '../../assets/images/highfive-heart-background.svg'
import highFiveRightHand from '../../assets/images/highfive-right-hand.svg';
import highFiveLeftPaw from '../../assets/images/highfive-left-paw.svg';
import styles from "../../styles/FurmiliarFacesDesktop.module.css";
import { useEffect, useRef } from "react";

const FurmiliarFacesDesktop = () => {
  const highFiveContainerRef = useRef(null);
  const highFiveWrapperRef = useRef(null);
  //Activates highfive animation
  useEffect(() => {
    let played = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            highFiveContainerRef.current.classList.add(styles.active);
            highFiveWrapperRef.current.classList.add(styles.active);
            played = true;
          }
        });
      },
      { threshold: 1 }
    );
    if (highFiveContainerRef.current) observer.observe(highFiveContainerRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h1>Fur-miliar faces</h1>
        <section className={styles.bushes}>
          <img src={Bush} />
          <img src={Bush} />
        </section>
      </section>
      <section className={`ellipse1`} style={{ paddingTop: "7vh" }}>
        <Ellipses style={{ width: "70vw" }}>
          <p>Whether one is sitting on a bench in CTC-SOM or taking a walk on the Red Brick Road, a furry company will never be far from sight.<br />
            They can be found either lounging with their legs stretched forward, brushing softly against a passerby&apos;s leg, or wandering up to students and staff seeking food.</p>
        </Ellipses>
        <img
          src={CTCSOM}
          className={styles.bldg}
          style={{
            position: "absolute",
            bottom: "10vh",
            height: "35vh"
          }}
        />
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Due to their constant presence in the community, some Cateneans have gained a renowned popularity among the Ateneans.</p>
          <p>In the lively MVP Center, the friendly Dongyan is often seen keeping watch by the guard&apos;s table. Not far away, the sassy Barbie, born around the time the movie <a href="">Barbie</a>(2023) was released, once had a brother nammed Oppenheimer who sadly passed away as a kitten. Yet, despite being alone, Barbie is never lonely, spending most of her days exploring the organization&apos;s rooms.</p>
        </section>
        <section className={`${styles.graphics}`}>
          <img src={MVP} className={styles.bldg} />
          <section style={{
            display: "flex",
            flexFlow: "row nowrap",
            position: "relative",
            left: "5vw",
            top: "0vh"
          }}>
            <article className={styles.polaroid}
              style={{
                zIndex: 1,
                transform: "rotate(5deg)"
              }}
            >
              <img src={Dongyan} alt="" />
              <p>Dongyan</p>
            </article>
            <article className={styles.polaroid}
              style={{
                zIndex: 0,
                transform: "rotate(-10deg)",
                right: "3vw",
                bottom: "8vh"
              }}
            >
              <img src={Barbie} alt="" />
              <p>Barbie</p>
            </article>
          </section>
          <img src={RedFlower} className={styles.flower} style={{ left: "42%", bottom: "10%" }} />
          <img src={YellowFlower} className={styles.flower} style={{ left: "48%", bottom: "-8%" }} />
          <img src={RedFlower} className={styles.flower} style={{ right: "15%" }} />
          <img src={YellowFlower2} className={styles.flower} style={{ right: "-6%", bottom: "12%" }} />
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Meanwhile, Faura Hall&mdash;and, by extension, the SOM Forest&mdash;is home to a lively cast of adventurous Cateneans.</p>
          <p>Some of Faura&apos;s residents include Blue Eyes, the only recorded cat on campus with <a href="">heterochromia</a>, who patrols the area alongside Bardagul, whose name comes from his tendency to get into catfights. Then there&apos;s Tarzan, a feral cat who likes to jump on trees to avoid people. All of these residents are lovingly cared for by June,* a maintenance staff member of the Ateneo stationed at Faura Hall.</p>
        </section>
        <section className={`${styles.graphics}`} style={{ width: "60%" }}>
          <img className={styles.bldg} src={Faura} style={{ height: "30vh", position: "relative", right: "10%", bottom: "3vh" }} />
          <img src={FauraCats} style={{ height: "40vh" }} />
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>In Areté, the cats do not shy away from showing off their unique quirks. For instance, Ponpon, the newest addition to the area, was often kept inside a cage due to his habit of staying near cars. He and George have figured themselves in a playful rivalry, with Ponpo having snatched the bunso title from Geroge. In another corner, cateneans Tital Mel and Jes remain elusive and difficult to spot, often found curled up together in a perfect ball during their naps.</p>
        </section>
        <section className={`${styles.graphics}`}>
          <img className={styles.bldg} src={Arete} style={{ width: "50%" }} />
          <img src={Bush} style={{ height: "20vh" }} />
          <img src={RedFlower} className={styles.flower}
            style={{
              left: "55%",
              bottom: "10%"
            }} />
          <img src={YellowFlower2} className={styles.flower}
            style={{
              right: "-5%",
              bottom: "20%"
            }} />
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Over in Schmitt Hall, Hakaw and Maimai share the space in spite of their contrasting personalities. According to AGILA moderator and Chemistry Department Chair Olivia Erin Buenafe, the extroverted Hakaw is considered the “spiritual successor” to late Paopao, after inheriting some of his endearing habits like opening windows. On the other hand, introverted Maimai plays by her own terms, only interacting with people whenever she deems fit and retreats inside buildings to relish in her own company.</p>
        </section>
        <section className={`${styles.graphics}`} style={{ justifyContent: "center" }}>
          <img className={styles.bldg} src={Schmitt} />
          <img src={Bush} style={{
            height: "15vh",
            position: "absolute",
            left: "0%",
            bottom: "15%"
          }} />
          <img src={Bush} style={{
            height: "22vh",
            position: "absolute",
            right: "0%",
            bottom: "-5%"
          }} />
          <img src={RedFlower} style={{
            position: "absolute",
            left: "-8%",
            height: "10vh",
            bottom: "22%"
          }} />
          <img src={YellowFlower2} style={{
            position: "absolute",
            right: "28%",
            height: "10vh",
            bottom: "22%"
          }} />
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>However, as broody and aloof as some Cateneans can be, they certainly do not thrive alone without human interference. In reality, some members of the community have taken a personal dedication to devote special love and care for these campus cats.</p>
        </section>
        <section className={`${styles.graphics}`} style={{
          justifyContent: "center",
          position: "absolute",
          bottom: "30vh"
        }}>
          <div className={styles.highFiveWrapper} ref={highFiveWrapperRef}>
            <div className={styles.highFiveContainer} ref={highFiveContainerRef}>
              <img src={highFiveHeartBackground} />
              <img src={highFiveRightHand} />
              <img src={highFiveLeftPaw} />
            </div>
            <p>give me a high five!</p>
          </div>
          <img src={FlowerGroup} style={{
            position: "absolute",
            width: "80%",
            bottom: "-50%",
            left: "15%"
          }} />
        </section>
      </section>
    </section >
  );
};

export default FurmiliarFacesDesktop;

