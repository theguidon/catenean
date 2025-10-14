import styles from '../../styles/InLonelinessDesktop.module.css';
import heartCatSmall1 from '../../assets/images/heart-cat-small-1-v2.png';
import heartCatSmall2 from '../../assets/images/heart-cat-small-2-v2.png';
import highFiveHeartBackground from '../../assets/images/highfive-heart-background.svg'
import highFiveRightHand from '../../assets/images/highfive-right-hand.svg';
import highFiveLeftPaw from '../../assets/images/highfive-left-paw.svg';
import bushRight from '../../assets/images/bush-right.svg';
import bushLeft from '../../assets/images/bush-left.svg';
import backgroundGrass from '../../assets/images/background-grass.svg';
import schmittHallBuilding from '../../assets/images/location-schmitt-hall-building.svg';
import heartBackgroundShape from '../../assets/images/heart-background-shape.svg';
import darkBrownEllipses from '../../assets/images/dark-brown-ellipses-horizontal.svg';
import title from '../../assets/images/in-loneliness-title-desktop.svg';
import { easeIn, easeOut, motion, transform } from "framer-motion";
import { useEffect, useRef } from 'react';

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

    return(
        <section
        className={styles.container}
        style={{
        display: "flex",
        flexFlow: "row nowrap",    
        alignItems: "stretch",    
        overflowY: "hidden",       
        overflowX: "auto",         
        height: "100vh",
        width: "100vw",
        background: "#f2daad",
        position: "relative"
        }}>

            {/* SECTION TITLE */}

            <section>
                <motion.img
                    src={bushLeft}
                    style={{
                        position: "absolute",
                        scale: "180%",
                        left: 0,
                        bottom: "30%"
                    }}
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5, 
                        ease: easeIn
                    }}
                />
                <motion.img
                    src={bushRight}
                        style={{
                            position: "absolute",
                            scale: "180%",
                            right: 0,
                            bottom: "30%"
                        }}
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.5, 
                            ease: easeIn
                        }}
                />

                <motion.img 
                    src={schmittHallBuilding}
                    style={{ position: "absolute", scale: "160%", left: "40%", top: "15%" }}
                    initial={{ x: 300 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.5, ease: easeOut, fill: "forwards" }}
                    viewport={{ amount: 1, once: false }}
                />
                
                <motion.img 
                    src={title}
                    style={{ position: "absolute", scale: "60%", left: "40%"}}
                    initial={{ x: 200 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.5, ease: easeOut, fill: "forwards" }}
                    viewport={{ amount: 1, once: false }}
                />

            </section>

            {/* #2 SECTION WITH 2 HEART CATS*/} 
            <section>
                <img src={darkBrownEllipses}
                    styles={{
                   
                    }} 
                /> 
                <p> hihihi</p>
            </section>

            {/* #3 SECTION WITH 2 PARAGRAPHS */}
            <section>
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
            </section>
            {/* #4 SECTION WITH 2 PARAGRAPHS */}
            <section>
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
            </section>
            {/* #5 SECTION WITH 2 QUOTES */}
            <section>

                <div className={styles.smallQuoteContainer}>
                    <motion.div className={styles.quote}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    viewport={{ amount: 0.5, once: true }} 
                    >
                        <motion.p
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: "easeOut", delay: 0.5}} 
                        viewport={{ amount: 0.5, once: true }}
                        >
                            Here’s a vulnerable life that needs to be cared for, needs to be helped. That’s just it
                        </motion.p>
                    </motion.div>
                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: "easeOut", delay: 1.0}} 
                        viewport={{ amount: 0.5, once: true }}
                    >
                        he remarks.
                    </motion.p>
                </div>
                <div className={styles.smallQuoteContainer}>
                        <motion.div className={styles.quote}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                        viewport={{ amount: 0.5, once: true }} 
                        >
                        <motion.p
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: "easeOut", delay: 0.5}} 
                        viewport={{ amount: 0.5, once: true }}
                        >
                            They can’t speak, they can’t act like humans. They are at our mercy, so we should show our mercy towards them
                        </motion.p>
                    </motion.div>
                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, ease: "easeOut", delay: 1.0}} 
                        viewport={{ amount: 0.5, once: true }}
                    >
                        Buenafe adds.
                    </motion.p>
                </div>
            </section>
            {/* #6 SECTION WITH HIGHFIVE */}
            <section>
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
    );
}
export default InLonelinessDesktop;