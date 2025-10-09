import styles from '../styles/ArticleMainSectionLoneliness.module.css';
import heartCatSmall1 from '../assets/images/heart-cat-small-1-v2.png';
import heartCatSmall2 from '../assets/images/heart-cat-small-2-v2.png';
import highFiveHeartBackground from '../assets/images/highfive-heart-background.svg'
import highFiveRightHand from '../assets/images/highfive-right-hand.svg';
import highFiveLeftPaw from '../assets/images/highfive-left-paw.svg';
import bushRight from '../assets/images/bush-right.svg';
import bushLeft from '../assets/images/bush-left.svg';
import backgroundGrass from '../assets/images/background-grass.svg';
import schmittHallBuilding from '../assets/images/location-schmitt-hall-building.svg';
import darkBrownEllipses from '../assets/images/dark-brown-ellipses.svg';
import { useEffect, useRef } from 'react';

const ArticleSectionLoneliness = () => {
    const highFiveContainerRef = useRef(null);
    const highFiveWrapperRef = useRef(null);

    //Activates highfive animation
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                        highFiveContainerRef.current.classList.add(styles.active);
                        highFiveWrapperRef.current.classList.add(styles.active);
                    } else {
                        highFiveContainerRef.current.classList.remove(styles.active);
                        highFiveWrapperRef.current.classList.remove(styles.active);
                    }
            });
        },
        { threshold: .6 }
        );
        if (highFiveContainerRef.current) observer.observe(highFiveContainerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
    <main className={styles.main}>
        <div className={styles.sectionTitle}>
            <h3 data-text="In loneliness, furry companions">In loneliness, furry companions </h3>
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
            <div className={styles.heartCatWrapper}>
                <img src={heartCatSmall1} />
            </div>
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
            <div className={styles.heartCatWrapper}>
                <img src={heartCatSmall2} />
            </div>
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
            <div className={styles.smallQuoteContainer}>
                <p className={styles.quote}>
                    Here’s a vulnerable life that needs to be cared for, needs to be helped. That’s just it
                </p>
                <p>
                    he remarks.
                </p>
            </div>
            <div className={styles.smallQuoteContainer}>
                <p className={styles.quote}>
                    They can’t speak, they can’t act like humans. They are at our mercy, so we should show our mercy towards them
                </p>
                <p>
                    Buenafe adds.
                </p>
            </div>
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
            <img className={styles.darkBrownEllipses} src={darkBrownEllipses}/> 
    </div>
    </main>
    );
}

export default ArticleSectionLoneliness;