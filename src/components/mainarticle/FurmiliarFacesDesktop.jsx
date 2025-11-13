import sectionStyles from "../../styles/FurmiliarFacesDesktop.module.css";
import CTC from "../../assets/images/location-ctc-som-building.svg";
import Bush from "../../assets/images/bush.svg";
import Blush from "../../assets/images/Blur-Desktop.svg";
import Title from "../../assets/images/furmiliar-title-desktop.svg";
import { color, easeInOut, motion, } from "motion/react";

const FurmiliarFacesDesktop = () => {

    return (
        <div className={sectionStyles.sectionContainer}>
            <div className={`${sectionStyles.heading} ${sectionStyles.section}`}>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <img
                        src={Blush}
                    />
                </div>
                <img
                    src={Title}
                />
                <div className={`${sectionStyles.building}`}>
                    <img
                        src={Bush}
                        className={sectionStyles.bush}
                        style={{
                            left: 20
                        }}
                    />
                    <img src={CTC}
                        style={{
                            position: "relative",
                            width: 900,
                            zIndex: 0
                        }}
                    />
                    <img
                        src={Bush}
                        className={sectionStyles.bush}
                        style={{
                        }}
                    />
                </div>
            </div>
            <div className={`${sectionStyles.article} ${sectionStyles.section}`}>
                <article>
                    <p>
                        Jesus “Jhess” Resuello is a humble member of the maintenance staff at the PLDT-Convergent Technologies Center and School of Management (CTC-SOM) buildings. As he starts his day, the sound of his motorcycle is enough to stop the Gonzaga cats in their tracks, who scramble to greet him before he can even park.
                    </p>
                    <p>
                        Before he clocks in, Resuello feeds the five or six cats he encounters en route to his station on the fifth floor of the CTC building as part of his morning ritual. Two of these cats, named Everyday and Mai-Mai, are located in the Gonzaga parking space and Schmitt Hall, respectively. Many other cats also stay near the Philippine Institute of Pure and Applied Chemistry (PIPAC) and the ground floor of the CTC building.
                    </p>
                </article>
                <article>
                    <p>
                        Feeding so many cats on the regular is a costly undertaking, but it is one that Resuello has readily shouldered despite the difficulty.
                    </p>
                    <div className={sectionStyles.helloCats}>
                        <motion.h4
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.500, ease: easeInOut, delay: 0.250 }}>
                            hello!
                        </motion.h4>
                    </div>
                </article>
            </div>
            <div className={sectionStyles.section}>
                <motion.div
                    className={sectionStyles.quoteBackground}
                    style={{ height: '40vw' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: easeInOut, delay: 0.8 }}
                ></motion.div>
                <motion.div
                    className={sectionStyles.quoteBackground}
                    style={{ height: '45vw' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: easeInOut, delay: 0.6 }}
                ></motion.div>
                <motion.div
                    className={sectionStyles.quoteBackground}
                    style={{ height: '50vw' }}
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
    );
};

export default FurmiliarFacesDesktop;

