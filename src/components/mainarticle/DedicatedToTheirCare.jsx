import Ellipses from "../ellipses.jsx";
import ThreeCats from "../../assets/images/three-cats.png";
import Schmitt from "../../assets/images/buildings/no-shadow/schmitt.svg";
import Paopao from "../../assets/images/paopao.png";
import FlowerGroup from "../../assets/images/flower-group.svg";
import Mag1 from "../../assets/images/mag1.png";
import Mag2 from "../../assets/images/mag2.png";
import styles from "../../styles/FurmiliarFacesDesktop.module.css";
import colStyles from "../../styles/DedicatedToTheirCare.module.css";
import { motion, MotionConfig, spring, stagger } from "motion/react";

const QuoteCard = ({ style, children }) => {
  const quoteVariants = {
    show: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delayChildren: stagger(0.5),
        when: "beforeChildren",
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.75,
        delayChildren: stagger(0.5),
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };

  return (
    <motion.article
      style={{
        background: "rgba(180,218,201,.5)",
        padding: "2%",
        position: "relative",
        borderRadius: "24px",
        ...style,
      }}
      variants={quoteVariants}
      whileInView="show"
      initial="hide"
    >
      <motion.p
        variants={childVariants}
        style={{
          fontFamily: "Outfit",
          fontSize: "9em",
          color: "#FAA685",
          position: "absolute",
          top: "-25%",
          left: "-2%",
        }}
      >
        “
      </motion.p>
      <motion.p
        variants={childVariants}
        style={{
          fontFamily: "Outfit",
          fontSize: "9em",
          lineHeight: "0%",
          color: "#FAA685",
          position: "absolute",
          bottom: "-12%",
          right: 0,
          transform: "scaleX(-1)",
        }}
      >
        “
      </motion.p>
      <motion.p
        variants={childVariants}
        style={{
          width: "100%",
          height: "100%",
          padding: "5%",
          background: "rgba(160, 216, 207, 0.5)",
          borderRadius: "16px",
        }}
      >
        <motion.div
          variants={childVariants}
          whileInView="show"
          initial="hide"
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          {children}
        </motion.div>
      </motion.p>
    </motion.article>
  );
};

const DedicatedToTheirCareDesktop = () => {
  const bounceAnimation = {
    whileInView: {
      scaleY: [0, 1.5, 1],
    },
    transition: {
      type: spring,
      stiffness: 100,
      animationDuration: 0.2,
      bounce: 0.2,
    },
  };
  return (
    <section className={styles.container}>
      <section className={styles.title}>
        <h1>
          Dedicated to
          <br />
          their care
        </h1>
      </section>
      <section className={`ellipse1`} style={{ paddingTop: "7vh" }}>
        <Ellipses style={{ width: "70vw" }}>
          <p>
            With such a teeming community of cats roaming the campus, their care
            and safety have become a priority. To address the needs of our
            four-legged friends, organizations and other notable individuals
            have gone out of their way to provide support for the Cateneans.
          </p>
        </Ellipses>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>
            One such organization at the forefront of safeguarding our
            catmmunity is{" "}
            <a href="">Ateneans Guided and Inspired by Love for Animals</a>{" "}
            (AGILA). As the primary animal welfare organization in the Ateneo,
            their work encompasses a wide range of activities, including
            managing the University’s cat population through the{" "}
            <a href="">Trap-Neuter-Vaccinate-Return initiative</a>, spay and
            neuter programs, fostering and adoption, veterinary intervention,
            and updating of the cat census known as the “CATalog.”
          </p>
        </section>
        <section
          className={`${styles.graphics}`}
          style={{ justifyContent: "center" }}
        >
          <motion.img
            src={Paopao}
            whileInView={bounceAnimation.whileInView}
            transition={bounceAnimation.transition}
            className={styles.bldg}
            style={{ height: "45vh", transformOrigin: "bottom center" }}
          />
          <img
            src={FlowerGroup}
            style={{ position: "absolute", bottom: "10%", width: "60%" }}
          />
        </section>
      </section>
      <section>
        <section
          style={{
            display: "flex",
            gap: "2%",
          }}
        >
          <div
            className={`${colStyles.magnifyingGlass}`}
            style={{ paddingTop: "20%" }}
          >
            <img src={Mag1} />
          </div>
          <section
            className={`${styles.textSection}`}
            style={{ flexGrow: "1" }}
          >
            <p>
              Beyond these, they also advocate for other animals through
              educational seminars and partnerships with like-minded
              organizations such as the{" "}
              <a href="">The Philippine Animal Welfare Society</a> (PAWS).
            </p>
            <p>
              An animal lover herself, AGILA President Svetlana Haberia leads
              the organization, managing all of their animal welfare initiatives
              within the Ateneo community. Driven by the fact that not everyone
              shares her level of concern for the cats, Haberia gives her all,
              especially to the Cateneans under their organization’s care.
            </p>
            <p>
              While Cateneans can often be irresistibly cute and tempting to
              pet, Haberia encourages the wider Ateneo community to respect
              their space and to refrain from touching them for the cats’
              health.
            </p>
          </section>
          <div className={`${colStyles.magnifyingGlass}`}>
            <img src={Mag2} style={{ animationDelay: 0.25 }} />
          </div>
        </section>
        <section className={`${styles.graphics}`}></section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>
            Although Buenafe usually focuses on the administrative side of
            AGILA, she recounts how caring for the cats proved to be a team
            effort. Particularly, her and other staff members would chip in to
            provide for the cats, whether it be food or the necessary
            vaccinations.
          </p>
          <p>
            In return, the cats brighten the mood of their workspace as they
            scurry around the grounds of the science building. “We are all
            burdened with a lot of work on our plates—but seeing them,
            interacting with them, kind of helps distract us from the stress,”
            states Buenafe.
          </p>
          <p>
            Sharing this level of concern for the cats’ safety and care is PUNLA
            formation Pauline Rampola, who dedicates part of her day to caring
            for resident MVP cats Dongyan and Barbie. Though a dog person at
            heart, she still extends the same love and affection to the
            Cateneans who have since become the mascots of the sprawling student
            center.
          </p>
        </section>
        <section className={`${styles.graphics}`}></section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>
            Rampola and the staff members at MVP try their best to provide the
            most comfortable environment for the cats despite being limited to
            the bare essentials, such as food and medicine.
          </p>
          <QuoteCard style={{ width: "100%" }}>
            Pag [sinabing]... animals, we’re kind of stewards… kapag kailangan
            ng tulong…hangga’t kaya ko, I will [help them]. (I think we are
            stewards when it comes to animals, so I provide them with help when
            they are in need as much as I can.)
          </QuoteCard>
          <p>Rampola expresses.</p>
        </section>
        <section className={`${styles.graphics}`}></section>
      </section>
      <section>
        <section className={`${styles.textSection}`}>
          <p>
            Through consistent nurture, the Cateneans have become an endearing
            feature of our community, providing brief solace to many of its
            members , especially those who share a collective concern and love
            for the furry friends.
          </p>
        </section>
        <section
          className={`${styles.graphics}`}
          style={{
            justifyContent: "center",
          }}
        >
          <motion.img
            src={ThreeCats}
            whileInView={bounceAnimation.whileInView}
            transition={bounceAnimation.transition}
            style={{
              height: "70vh",
              position: "relative",
              top: "10vh",
            }}
          />
        </section>
      </section>
    </section>
  );
};

export default DedicatedToTheirCareDesktop;
