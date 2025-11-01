import sectionStyles from "../../styles/FurmiliarFacesMobile.module.css";
import CTC from "../../assets/images/location-ctc-som-building.svg";
import Bush from "../../assets/images/bush.svg";
import Grass from "../../assets/images/grass.svg"
import { color, easeInOut, motion, } from "motion/react";

const FurmiliarFacesMobile = () => {

    return (
        <>
            <main className={sectionStyles.main}>
                <div className={sectionStyles.sectionContainer}>
                    <div className={`${sectionStyles.heading} ${sectionStyles.section}`}>
                        <h3>Fur-miliar faces</h3>
                        <img src={CTC} style={{ position: 'absolute', bottom: '13vw', left: '20vw', zIndex: '0', width: '60%' }}>
                        </img>
                        <img src={Grass} style={{ position: 'absolute', bottom: '0', width: '101dvw' }} />
                    </div>
                    <article style={{ margin: "48px 0" }}>
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                        <section className={sectionStyles.helloCats}>
                            <motion.h4
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.500, ease: easeInOut, delay: 0.250 }}>
                                hello!
                            </motion.h4>
                        </section>
                    </div>

                    {/* 
                                        <motion.img src={CTC}
                                initial={{ y: 20 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.500, ease: easeInOut }}
                                style={{position: 'absolute', bottom: '15vw', left: '30vw', zIndex: '1', width: '40%'}}>
                    </motion.img>
 */}
                    <div className={sectionStyles.section}>
                        <motion.div
                            className={sectionStyles.quoteBackground}
                            style={{ height: '75vw' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
                        ></motion.div>
                        <motion.div
                            className={sectionStyles.quoteBackground}
                            style={{ height: '85vw' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut, delay: 0.6 }}
                        ></motion.div>
                        <motion.div
                            className={sectionStyles.quoteBackground}
                            style={{ height: '95vw' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: easeInOut, }}
                        ></motion.div>
                        <div className={sectionStyles.quote}>
                            <h5>"</h5>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, ease: easeInOut, delay: 0.5 }}
                            >
                                Medyo nasasaktan ako dahil medyo mabigat [sa bulsa] 'yung binibili kong pagkain, 'yung Oc [cat food brand] Php 175 isang kilo. Eh halos minsan isang kilo, [k]aunti natitira sa isang araw kasi umaga-hapon ang pakain ko.
                            </motion.p>
                            <h5>"</h5>
                            <br />
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.3, ease: easeInOut, delay: 0.8 }}
                            >
                                (It hurts [my wallet] a bit since the price of the cat food I buy, Oc, is hefty, around Php 175 per kilo. Almost always, only a small amount of that kilo is left at the end of the day, since I feed them from morning until evening.)
                            </motion.p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default FurmiliarFacesMobile;

