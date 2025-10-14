import sectionStyles from "../../styles/furmiliarFaces.module.css";
import CTC from "../../assets/images/location-ctc-som-building.svg";
import Bush from "../../assets/images/bush.svg";
import Grass from "../../assets/images/grass.svg";
import HelloCats from "../../assets/images/cat-speech.svg";
import QuoteBackground from "../../assets/images/quote-background.svg";
import { color, easeInOut, motion, } from "motion/react";


const FurmiliarFaces = () => {

return (
    <>
    <main className={sectionStyles.main}>
        <section>
            {/* Hero Segment */}
            <h3>Fur-miliar faces</h3>
            <div className={sectionStyles.hero}>
                {/* Hero Image */}
                <img src={Grass} style={{ left: '-10', bottom: '0', width: '101%', zIndex: 2 }}></img>
                <motion.img src={CTC}
                            initial={{ y: 20 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.500, ease: easeInOut }}
                            style={{bottom: '12%', left: '15%', width: '70%', paddingTop: '20px'}}>
                </motion.img>
            </div>
        </section>
        <article>
            {/* Write Up */}
            <p>
                Jesus “Jhess” Resuello is a humble member of the maintenance staff at the PLDT-Convergent Technologies Center and School of Management (CTC-SOM) buildings. As he starts his day, the sound of his motorcycle is enough to stop the Gonzaga cats in their tracks, who scramble to greet him before he can even park.
            </p>
            <p>
                Before he clocks in, Resuello feeds the five or six cats he encounters en route to his station on the fifth floor of the CTC building as part of his morning ritual. Two of these cats, named Everyday and Mai-Mai, are located in the Gonzaga parking space and Schmitt Hall, respectively. Many other cats also stay near the Philippine Institute of Pure and Applied Chemistry (PIPAC) and the ground floor of the CTC building.
            </p>        
            <p>
                Feeding so many cats on the regular is a costly undertaking, but it is one that Resuello has readily shouldered despite the difficulty. 
            </p>
        </article>
        <section className={sectionStyles.helloCats}>
            {/* Cats */}
            <img src={HelloCats}></img>
             <motion.h4
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.500, ease: easeInOut, delay: 0.250 }}>
                    hello!
            </motion.h4>
        </section>
        <article>
            {/* Quote Section */}
            <p>
                Medyo nasasaktan ako dahil medyo mabigat [sa bulsa] ‘yung binibili kong pagkain, ‘yung Oc [cat food brand] Php 175 isang kilo. Eh halos minsan isang kilo, [k]aunti natitira sa isang araw kasi umaga-hapon ang pakain ko.
            </p>
            <p className={sectionStyles.quote}>
                (It hurts [my wallet] a bit since the price of the cat food I buy, Oc, is hefty, around Php 175 per kilo. Almost always, only a small amount of that kilo is left at the end of the day, since I feed them from morning until evening.)
            </p>
        </article>
    </main>
    </>
  );
};

export default FurmiliarFaces;


        // <article>
        // <p>
        //     Jesus “Jhess” Resuello is a humble member of the maintenance staff at the PLDT-Convergent Technologies Center and School of Management (CTC-SOM) buildings. As he starts his day, the sound of his motorcycle is enough to stop the Gonzaga cats in their tracks, who scramble to greet him before he can even park.
        // </p>
        // <p>
        //     Before he clocks in, Resuello feeds the five or six cats he encounters en route to his station on the fifth floor of the CTC building as part of his morning ritual. Two of these cats, named Everyday and Mai-Mai, are located in the Gonzaga parking space and Schmitt Hall, respectively. Many other cats also stay near the Philippine Institute of Pure and Applied Chemistry (PIPAC) and the ground floor of the CTC building.
        // </p>        
        // <p>
        //     Feeding so many cats on the regular is a costly undertaking, but it is one that Resuello has readily shouldered despite the difficulty. 
        // </p>
        // </article>
        // <section className={sectionStyles.helloCats}>
        //     <img src={HelloCats}></img>
        //     <motion.h4
        //         initial={{ opacity: 0, y: -10 }}
        //         whileInView={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.500, ease: easeInOut, delay: 0.250 }}>
        //             hello!</motion.h4>
        // </section>
        // <article className={sectionStyles.quoteSection}>
        // <img src={QuoteBackground} className={sectionStyles.quoteBackground}></img>
        //     <h2 className={sectionStyles.quotatiomarkLeft}>"</h2>
        //     <p>
        //         Medyo nasasaktan ako dahil medyo mabigat [sa bulsa] ‘yung binibili kong pagkain, ‘yung Oc [cat food brand] Php 175 isang kilo. Eh halos minsan isang kilo, [k]aunti natitira sa isang araw kasi umaga-hapon ang pakain ko.
        //     </p>
        //     <p>
        //         (It hurts [my wallet] a bit since the price of the cat food I buy, Oc, is hefty, around Php 175 per kilo. Almost always, only a small amount of that kilo is left at the end of the day, since I feed them from morning until evening.)
        //     </p>
        //     <h2 className={sectionStyles.quotatiomarkRight}>"</h2>
        // </article>