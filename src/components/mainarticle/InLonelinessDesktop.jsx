import styles from '../../styles/InLonelinessDesktop.module.css';
import heartCatSmall1 from '../../assets/images/heart-cat-small-1-v2.png';
import heartCatSmall2 from '../../assets/images/heart-cat-small-2-v2.png';
import highFiveHeartBackground from '../../assets/images/highfive-heart-background.svg'
import highFiveRightHand from '../../assets/images/highfive-right-hand.svg';
import highFiveLeftPaw from '../../assets/images/highfive-left-paw.svg';
import bushLeft from '../../assets/images/bush-left.svg';
import schmittHallBuilding from '../../assets/images/buildings/no-shadow/schmitt.svg';
import heartBackgroundShape from '../../assets/images/heart-background-shape.svg';
import darkBrownEllipses from '../../assets/images/dark-brown-ellipses-horizontal.svg';
import title from '../../assets/images/in-loneliness-title-desktop.svg';
import blush from '../../assets/images/Blur-Desktop.svg';
import { easeInOut, motion } from "motion/react";
import { useEffect, useRef } from 'react';

const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 1,
            delayChildren: 0.3,
        },
    },
};

const fadeInContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delayChildren: 0.3,
        },
    },
};

const fadeInText = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};


const heartPulse = {
    initial: { scale: 1 },
    pulse: { scale: 1.1, transition: { duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" } }
};


const InLonelinessDesktop = () => {
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
        <section
            className={styles.container}
            style={{
                display: "flex",
                flexFlow: "row nowrap",
                alignItems: "stretch",
                height: "100vh",
            }}
        >
            {/*#1 SECTION TITLE */}
            <section>
                <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ amount: 0.7, once: true }}>
                    <motion.img
                        src={bushLeft}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 2.2 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                        viewport={{ amount: 0.8 }}
                        style={{ position: "absolute", scale: "220%", left: 0, bottom: "10vh" }}
                    />
                    <motion.img
                        src={bushLeft}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 2.2 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.5, delay: 0.2 }}
                        viewport={{ amount: 0.5 }}
                        style={{ position: "absolute", scale: "220%", right: 0, bottom: "10vh" }}
                    />
                </motion.div>

                <motion.div
                    style={{ position: "relative", width: 1000, height: "100%" }}

                >
                    <img src={blush} style={{ position: "absolute", width: 1400, bottom: -10, left: -40, zIndex: -1 }} />
                    <motion.img
                        src={schmittHallBuilding}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 0.75, type: "spring", bounce: 0.5, delay: 0.8 }}
                        viewport={{ amount: 0.8 }}
                        style={{
                            position: "absolute", width: 800, left: 180, bottom: "-4vh",
                            transformOrigin: "bottom center"
                        }}
                    />
                    <motion.img
                        src={title}
                        style={{ position: "absolute", width: 500, left: 600, bottom: "50%" }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75, ease: easeInOut }}
                        viewport={{ amount: 0.7 }}
                    />
                </motion.div>

            </section>

            {/* #2 SECTION WITH 2 HEART CATS*/}
            <section>
                <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ amount: 0.7, once: true }}>
                    <img src={darkBrownEllipses}
                        style={{
                            position: "absolute",
                            top: "40%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(-50%)",
                            width: "80%",
                            height: "auto",
                        }}
                    >
                    </img>

                    <div className={`${styles.heartCatWrapper} ${styles.firstHeartCatWrapper}`} >
                        <motion.img src={heartBackgroundShape} variants={heartPulse} animate="pulse" />
                        <motion.img src={heartBackgroundShape} variants={heartPulse} animate="pulse" />
                        <img src={heartCatSmall1} />
                    </div>

                    <div className={`${styles.heartCatWrapper} ${styles.secondHeartCatWrapper}`}>
                        <motion.img src={heartBackgroundShape} variants={heartPulse} animate="pulse" />
                        <motion.img src={heartBackgroundShape} variants={heartPulse} animate="pulse" />
                        <img src={heartCatSmall2} />
                    </div>
                </motion.div>
                <motion.p
                    variants={fadeIn}
                    style={{ position: "absolute", top: "32%", left: "27%", width: "50%" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                    viewport={{ amount: 0.7, once: true }}
                >
                    Nearly each one of the Cateneans has become important in providing solace and comfort
                    to the members of the Ateneo community. This sense of solidarity between Ateneans and Cateneans
                    became especially prominent at the height of the pandemic.
                </motion.p>
            </section>

            <section
                style={{
                    display: "flex",
                    gap: 200,
                    marginRight: 800
                }}
            >
                {/* #3 SECTION WITH 2 PARAGRAPHS */}
                <section className={styles.paragraph}>
                    <p>
                        One of the people who observed this solidarity was Assistant Professor at the
                        Department of Chemistry and Ateneans Guided and Inspired by their Love for Animals
                        (AGILA) moderator Olivia Erin “Oui” Buenafe, PhD. “The cats served as companions to
                        the security personnel,” she remarks.
                    </p>
                    <br></br>
                    <p>
                        She shares that with the pandemic-driven campus restrictions, the Cateneans gave
                        the few campus visitors and personnel some semblance of relief amid the lonely
                        atmosphere of the deserted campus. Together with Buenafe in this endeavor is her
                        spouse, Department of Theology Instructor Joseph Johnson, JCL.
                    </p>
                </section>

                {/* #4 SECTION WITH 2 PARAGRAPHS */}
                <section className={styles.paragraph}>
                    <p>
                        In instances when some cats require medical attention, the couple does their best to attend
                        to these concerns. For instance, they took care of Schmitt Hall’s beloved Pao-Pao, who was often
                        taken to the veterinarian, and his mother Prada, who at one point was diagnosed with
                        <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-immunodeficiency-virus-fiv">feline immunodeficiency virus.</a>
                        Often, the medical bills come from the couple’s own pockets, although they are grateful to those
                        who have helped with the costs.
                    </p>
                    <br></br>
                    <p>
                        Johnson references the
                        <a href="https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html">Laudato si'</a>
                        encyclical when talking about the importance of caring for animals, mentioning that the way we
                        treat the vulnerable, including animals, reflects who we are as people.
                    </p>
                </section>

                {/* #5 SECTION WITH 2 QUOTES */}
                <motion.section
                    className={styles.paragraph}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.5, once: true }}
                >
                    <motion.div className={styles.quote} variants={fadeInContainer}>
                        <motion.p variants={fadeInText} transition={{ delay: 0.6 }}>
                            Here’s a vulnerable life that needs to be cared for, needs to be helped. That’s just it
                        </motion.p>
                    </motion.div>
                    <motion.p variants={fadeInContainer}>
                        he remarks.
                    </motion.p>

                    <motion.div className={styles.quote} variants={fadeInContainer} style={{ marginTop: "3rem" }}>
                        <motion.p variants={fadeInText} transition={{ delay: 0.6 }}>
                            They can’t speak, they can’t act like humans. They are at our mercy, so we should show our mercy towards them
                        </motion.p>
                    </motion.div>
                    <motion.p variants={fadeInContainer}>
                        Buenafe adds.
                    </motion.p>
                </motion.section>

                {/* #6 SECTION WITH HIGHFIVE */}
                <section style={{ width: 850 }}>
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
                </section>
            </section>
        </section>
    );
}
export default InLonelinessDesktop;
