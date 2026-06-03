import styles from "../../styles/DedicatedToTheirCareMobile.module.css";
import Mag1 from "../../assets/images/mag1_big.png";
import HeartCatBig1 from "../../assets/images/heart-cat-big-1.png";
import HeartCatBig2 from "../../assets/images/heart-cat-big-2.png";
import { motion, stagger } from "motion/react";

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

const DedicatedToTheirCareMobile = () => {
  return (
    <section className={styles.container}>
      <h1>Dedicated to their care</h1>
      <p>
        With such a teeming community of cats roaming the campus, their care and
        safety have become a priority. To address the needs of our four-legged
        friends, organizations and other notable individuals have gone out of
        their way to provide support for the Cateneans.
      </p>
      <p>
        One organization at the forefront of safeguarding our catmmunity is
        AGILA. As the primary animal welfare organization in the Ateneo, their
        work encompasses a wide range of activities, including managing the
        University’s cat population through the{" "}
        <a href="https://bestfriends.org/pet-care-resources/trap-neuter-vaccinate-return-tnvr-cats-faqs">
          Trap-Neuter-Vaccinate-Return initiative
        </a>
        , spay and neuter programs, fostering and adoption, veterinary
        intervention, and updating of the cat census known as the “CATalog.”
      </p>
      <img
        src={Mag1}
        style={{ width: "80%", padding: "32px 0" }}
        alt=""
        className={styles.mag1}
      />
      <p>
        Beyond these, they also advocate for other animals through educational
        seminars and partnerships with like-minded organizations, such as The
        Philippine Animal Welfare Society (PAWS).
      </p>
      <p>
        An animal lover herself, AGILA President Svetlana Haberia leads the
        organization, managing all of their animal welfare initiatives within
        the Ateneo community. Driven by the fact that not everyone shares her
        level of concern for the cats, Haberia gives her all, especially to the
        Cateneans under their organization’s care.
      </p>
      <p>
        While Cateneans can often be irresistibly cute and tempting to pet,
        Haberia encourages the wider Ateneo community to respect their space and
        to refrain from touching them for the cats’ health.
      </p>
      <section className={styles.heartSection}>
        <motion.img
          src={HeartCatBig1}
          initial={{ scale: 1 }}
          animate={{ scale: 0.92 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          alt=""
          style={{ width: "80%", padding: "32px 0" }}
        />
        <p>
          Although Buenafe usually focuses on the administrative side of AGILA,
          she recounts how caring for the cats proved to be a team effort.
          Particularly, she and other staff members would chip in to provide for
          the cats, whether it be food or the necessary vaccinations.
        </p>
        <p>
          In return, the cats brighten the mood of their workspace as they
          scurry around the grounds of thae science building. “We are all
          burdened with a lot of work on our plates—but seeing them, interacting
          with them, kind of helps distract us from the stress,” states Buenafe.
        </p>
        <p>
          Sharing this level of concern for the cats’ safety and care is Punla
          Formator Pauline Rampola, who dedicates part of her day to caring for
          resident MVP cats Dongyan and Barbie. Though a dog person at heart,
          she still extends the same love and affection to the Cateneans, who
          have since become the mascots of the sprawling student center.
        </p>
        <motion.img
          src={HeartCatBig2}
          initial={{ scale: 1 }}
          animate={{ scale: 0.92 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          alt=""
          style={{ width: "80%", padding: "32px 0" }}
        />
        <div className={styles.circleBG} />
      </section>
      <p>
        Rampola and the staff members at MVP try their best to provide the most
        comfortable environment for the cats despite being limited to the bare
        essentials, such as food and medicine.
      </p>
      <QuoteCard style={{ width: "80%", marginTop: "28px" }}>
        “‘Pag [sinabing]... animals, we’re kind of stewards… kapag kailangan ng
        tulong, hangga’t kaya ko, I will [help them]. (I think we are stewards
        when it comes to animals, so I help them as much as I can when they are
        in need.)”
      </QuoteCard>
      <p style={{ width: "100%" }}>Rampola expresses.</p>
      <p>
        Through consistent nurture, the Cateneans have become an endearing
        feature of our community, providing brief solace to many of its members,
        especially those who share a collective concern and love for the furry
        friends.{" "}
      </p>
    </section>
  );
};

export default DedicatedToTheirCareMobile;
