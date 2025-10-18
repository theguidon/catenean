import styles from '../../styles/InLonelinessMobile.module.css';
import heartCatSmall1 from '../../assets/images/heart-cat-small-1-v2.png';
import heartCatSmall2 from '../../assets/images/heart-cat-small-2-v2.png';
import highFiveHeartBackground from '../../assets/images/highfive-heart-background.svg'
import highFiveRightHand from '../../assets/images/highfive-right-hand.svg';
import highFiveLeftPaw from '../../assets/images/highfive-left-paw.svg';
import bushRight from '../../assets/images/bush-right.svg';
import bushLeft from '../../assets/images/bush-left.svg';
import backgroundGrass from '../../assets/images/background-grass.svg';
import schmittHallBuilding from '../../assets/images/location-schmitt-hall-building.svg';
import darkBrownEllipses from '../../assets/images/dark-brown-ellipses.svg';
import heartBackgroundShape from '../../assets/images/heart-background-shape.svg';
import title from '../../assets/images/in-loneliness-furry-companions-title-mobile.svg';
import { motion } from "motion/react";
import { useEffect, useRef } from 'react';

const pullout = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            duration: 0.5,
            staggerChildren: 1, // instead of `delayChildren: stagger(1)`
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
};


const InLonelinessMobile = () => {
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
        <main className={styles.main}>
            <div className={styles.sectionTitle}>
                <img src={title}></img>
            </div>
            <div className={styles.content}>
                <div className={styles.buildingContainer}>
                    <img src={backgroundGrass} />
                    <img src={schmittHallBuilding} />
                    <img src={bushLeft} />
                    <img src={bushRight} />
                </div>
                <p>
                    Nearly each one of the Cateneans has become important in providing solace
                    and comfort to the members of the Ateneo community. This sense of solidarity
                    between Ateneans and Cateneans became especially prominent at the height of the pandemic.
                </p>
                <motion.div className={`${styles.heartCatWrapper} ${styles.firstHeartCatWrapper}`} viewport={{ amount: 1, once: true }}>
                    <motion.img src={heartBackgroundShape}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: [1, 1, 1], scale: [0, 1.1, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.8, 1] }}
                        viewport={{ amount: 1, once: true }}
                    />
                    <motion.img src={heartBackgroundShape}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: [1, 1, 1], scale: [0, 1.1, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.8, 1], delay: 0.125 }}
                        viewport={{ amount: 1, once: true }}
                    />
                    <motion.img src={heartCatSmall1}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: [1, 1, 1], scale: [0, 1.1, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.8, 1], delay: 0.25 }}
                        viewport={{ amount: 1, once: true }}
                    />
                </motion.div>
                <p>
                    One of the people who observed this solidarity was Assistant Professor at the
                    Department of Chemistry and Ateneans Guided and Inspired by their Love for Animals
                    (AGILA) moderator Olivia Erin “Oui” Buenafe, PhD. “The cats served as companions to
                    the security personnel,” she remarks.
                </p>
                <p>
                    She shares that with the pandemic-driven campus restrictions, the Cateneans gave
                    the few campus visitors and personnel some semblance of relief amid the lonely
                    atmosphere of the deserted campus. Together with Buenafe in this endeavor is her
                    spouse, Department of Theology Instructor Joseph Johnson, JCL.
                </p>
                <motion.div className={`${styles.heartCatWrapper} ${styles.secondHeartCatWrapper}`} viewport={{ amount: 1, once: true }}>
                    <motion.img src={heartBackgroundShape}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: [1, 1, 1], scale: [0, 1.1, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.8, 1] }}
                        viewport={{ amount: 1, once: true }}
                    />
                    <motion.img src={heartBackgroundShape}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: [1, 1, 1], scale: [0, 1.1, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.8, 1], delay: 0.125 }}
                        viewport={{ amount: 1, once: true }}
                    />
                    <motion.img src={heartCatSmall2}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: [1, 1, 1], scale: [0, 1.1, 1] }}
                        transition={{ duration: 0.5, ease: "easeOut", times: [0, 0.8, 1], delay: 0.25 }}
                        viewport={{ amount: 1, once: true }}
                    />
                </motion.div>
                <p>
                    In instances when some cats require medical attention, the couple does their best to attend
                    to these concerns. For instance, they took care of Schmitt Hall’s beloved Pao-Pao, who was often
                    taken to the veterinarian, and his mother Prada, who at one point was diagnosed with
                    <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-immunodeficiency-virus-fiv">feline immunodeficiency virus.</a>
                    Often, the medical bills come from the couple’s own pockets, although they are grateful to those
                    who have helped with the costs.
                </p>
                <p>
                    Johnson references the
                    <a href="https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html">Laudato si'</a>
                    encyclical when talking about the importance of caring for animals, mentioning that the way we
                    treat the vulnerable, including animals, reflects who we are as people.
                </p>
                <motion.div className={styles.smallQuoteContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.6, once: true }}
                    transition={{ delayChildren: 0.25, staggerChildren: 0.5 }}
                >
                    <motion.div className={styles.quote}
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } } }}
                    >
                        <motion.p
                            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut", delay: 1 } } }} style={{ marginBottom: 0 }}
                        >
                            Here’s a vulnerable life that needs to be cared for, needs to be helped. That’s just it
                        </motion.p>
                    </motion.div>
                    <motion.p
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut", delay: 1.5 } } }}
                    >
                        he remarks.
                    </motion.p>
                </motion.div>
                <motion.div className={styles.smallQuoteContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.6, once: true }}
                    transition={{ delayChildren: 0.25, staggerChildren: 0.5, delay: 1.5 }}
                >
                    <motion.div className={styles.quote}
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 1.0, ease: "easeOut" } } }}
                    >
                        <motion.p
                            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut", delay: 1 } } }} style={{ marginBottom: 0 }}
                        >
                            They can’t speak, they can’t act like humans. They are at our mercy, so we should show our mercy towards them
                        </motion.p>
                    </motion.div>
                    <motion.p
                        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.75, ease: "easeOut", delay: 1.5 } } }}
                    >
                        Buenafe adds.
                    </motion.p>
                </motion.div>

                <p>
                    The couple embodies this mercy by providing their support to the student organization AGILA,
                    such as helping them transport the cats to the veterinarian as needed. AGILA’s advocacy is to
                    safeguard the welfare of stray animals and wildlife, including the Cateneans.
                </p>
                <div className={styles.highFiveWrapper} ref={highFiveWrapperRef}>
                    <div className={styles.highFiveContainer} ref={highFiveContainerRef}>
                        <img src={highFiveHeartBackground} />
                        <img src={highFiveRightHand} />
                        <img src={highFiveLeftPaw} />
                    </div>
                    <p>give me a high five!</p>
                </div>
                <img className={styles.darkBrownEllipses} src={darkBrownEllipses} />
            </div>
        </main>
    );
}

export default InLonelinessMobile;
