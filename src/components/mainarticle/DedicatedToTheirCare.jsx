import Ellipses from "../ellipses.jsx";
import Bush from "../../assets/images/bush.svg";
import CTCSOM from "../../assets/images/buildings/no-shadow/ctc-som.svg";
import MVP from "../../assets/images/buildings/no-shadow/mvp.svg";
import Faura from "../../assets/images/buildings/no-shadow/faura.svg";
import Arete from "../../assets/images/buildings/no-shadow/arete.svg";
import Schmitt from "../../assets/images/buildings/no-shadow/schmitt.svg";
import highFiveHeartBackground from '../../assets/images/highfive-heart-background.svg'
import highFiveRightHand from '../../assets/images/highfive-right-hand.svg';
import highFiveLeftPaw from '../../assets/images/highfive-left-paw.svg';
import styles from "../../styles/FurmiliarFacesDesktop.module.css";
import { useEffect, useRef } from "react";

const QuoteCard = ({ style, children }) => {
  return (
    <article style={{
      background: "rgba(180,218,201,.5)",
      padding: "2%",
      position: "relative",
      borderRadius: "24px",
      ...style
    }}>
      <p
        style={{
          fontFamily: "Outfit",
          fontSize: "9em",
          color: "#FAA685",
          position: "absolute",
          top: "-25%",
          left: "-2%",
        }}
      >“</p>
      <p
        style={{
          fontFamily: "Outfit",
          fontSize: "9em",
          lineHeight: "0%",
          color: "#FAA685",
          position: "absolute",
          bottom: "-12%",
          right: 0,
          transform: "scaleX(-1)"
        }}
      >“</p>
      <p
        style={{
          width: "100%",
          height: "100%",
          padding: "5%",
          background: "rgba(160, 216, 207, 0.5)",
          borderRadius: "16px",
        }}
      >{children}</p>
    </article>
  );
}

const DedicatedToTheirCareDesktop = () => {
  const highFiveContainerRef = useRef(null);
  const highFiveWrapperRef = useRef(null);
  //Activates highfive animation
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h1>Dedicated to<br />their care</h1>
      </section>
      <section className={`ellipse1`} style={{ paddingTop: "7vh" }}>
        <Ellipses style={{ width: "70vw" }}>
          <p>With such a teeming community of cats roaming the campus, their care and safety have become a priority. To address the needs of our four-legged friends, organizations and other notable individuals have gone out of their way to provide support for the Cateneans.</p>
        </Ellipses>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>One such organization at the forefront of safeguarding our catmmunity is <a href="">Ateneans Guided and Inspired by Love for Animals</a> (AGILA). As the primary animal welfare organization in the Ateneo, their work encompasses a wide range of activities, including managing the University’s cat population through the <a href="">Trap-Neuter-Vaccinate-Return initiative</a>, spay and neuter programs, fostering and adoption, veterinary intervention, and updating of the cat census known as the “CATalog.”</p>
        </section>
        <section className={`${styles.graphics}`}>
          <img src={MVP} className={styles.bldg} />
          <section></section>
        </section>
      </section>
      <section>
        <section>
          <section className={`${styles.textSection}`}>
            <p>Beyond these, they also advocate for other animals through educational seminars and partnerships with like-minded organizations such as the <a href="">The Philippine Animal Welfare Society</a> (PAWS).</p>
            <p>An animal lover herself, AGILA President Svetlana Haberia leads the organization, managing all of their animal welfare initiatives within the Ateneo community. Driven by the fact that not everyone shares her level of concern for the cats, Haberia gives her all, especially to the Cateneans under their organization’s care.</p>
            <p>While Cateneans can often be irresistibly cute and tempting to pet, Haberia encourages the wider Ateneo community to respect their space and to refrain from touching them for the cats’ health.</p>
          </section>
        </section>
        <section className={`${styles.graphics}`}>
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Although Buenafe usually focuses on the administrative side of AGILA, she recounts how caring for the cats proved to be a team effort. Particularly, her and other staff members would chip in to provide for the cats, whether it be food or the necessary vaccinations.</p>
          <p>In return, the cats brighten the mood of their workspace as they scurry around the grounds of the science building. “We are all burdened with a lot of work on our plates—but seeing them, interacting with them, kind of helps distract us from the stress,” states Buenafe.</p>
          <p>Sharing this level of concern for the cats’ safety and care is PUNLA formation Pauline Rampola, who dedicates part of her day to caring for resident MVP cats Dongyan and Barbie. Though a dog person at heart, she still extends the same love and affection to the Cateneans who have since become the mascots of the sprawling student center.</p>
        </section>
        <section className={`${styles.graphics}`}>
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Over in Schmitt Hall, Hakaw and Maimai share the space in spite of their contrasting personalities. According to AGILA moderator and Chemistry Department Chair Olivia Erin Buenafe, the extroverted Hakaw is considered the “spiritual successor” to late Paopao, after inheriting some of his endearing habits like opening windows. On the other hand, introverted Maimai plays by her own terms, only interacting with people whenever she deems fit and retreats inside buildings to relish in her own company.</p>
        </section>
        <section className={`${styles.graphics}`}>
          <img className={styles.bldg} src={Schmitt} />
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Rampola and the staff members at MVP try their best to provide the most comfortable environment for the cats despite being limited to the bare essentials, such as food and medicine.</p>
          <QuoteCard style={{ width: "100%" }}>
            Pag [sinabing]... animals, we’re kind of stewards… kapag kailangan ng tulong…hangga’t kaya ko, I will [help them]. (I think we are stewards when it comes to animals, so I provide them with help when they are in need as much as I can.)
          </QuoteCard>
          <p>Rampola expresses.</p>
        </section>
        <section className={`${styles.graphics}`}>
        </section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>Through consistent nurture, the Cateneans have become an endearing feature of our community, providing brief solace to many of its members , especially those who share a collective concern and love for the furry friends.</p>
        </section>
        <section className={`${styles.graphics}`}>
        </section>
      </section>
    </section>
  );
};

export default DedicatedToTheirCareDesktop;

