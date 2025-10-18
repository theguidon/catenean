import styles from "../styles/ArticleMain.module.css";
import squiggle from "../assets/images/squiggle.svg";
import MapFold from "../assets/images/location-map-fold.svg";
import cat1 from "../assets/images/cats/2.jpeg";
import cat2 from "../assets/images/cats/7.jpeg";
import cat3 from "../assets/images/cats/6.jpeg";
import photoCardsLine from "../assets/images/photo-cards-line.svg";
import helloCat from "../assets/images/hello-cat.png";
import cloud from "../assets/images/cloud.svg";
import heartCatSmall1 from "../assets/images/heart-cat-small-1.png";
import heartCatSmall2 from "../assets/images/heart-cat-small-2.png";
import heartCatSmall3 from "../assets/images/heart-cat-small-3.png";
import heartCatBig from "../assets/images/heart-cat-big.png";
import circleCat from "../assets/images/circle-cat.png";
import mag1 from "../assets/images/mag1.svg";
import mag2 from "../assets/images/mag2.png";
import heartHighFive from "../assets/images/heart-high-five.svg";
import cloudCat from "../assets/images/cloud-cat.png";
import bigCloud from "../assets/images/big-cloud.png";
import grass from "../assets/images/grass.png";
import paopao from "../assets/images/paopao.png";
import brownEllipses from "../assets/images/brown-ellipses.svg";
import bigHeart from "../assets/images/big-heart.svg";
import threeCats from "../assets/images/three-cats.png";
import paw from "../assets/images/paw.svg";
import heart from "../assets/images/heart.svg";

const ArticleMain = ({ setPage }) => {
  return (
    <main className={styles.main}>
      <div className={styles.mapCorner} onClick={() => setPage("map")}>
        <img src={MapFold} />
      </div>
      <div className={styles.mainArticle}>
        <h1 className={styles.title}>
          What the{" "}
          <span className={styles.cateneans}>
            Cateneans
            <img src={squiggle} />
          </span>{" "}
          teach us about love
        </h1>
        <h2 className={styles.writerCredits}>
          Written by Isabel&nbsp;Victorino and Alyssa&nbsp;E.&nbsp;Duque
        </h2>
        <p>
          NOT EVERY home has a furry feline companion, but within the Loyola
          Heights campus, one is certain to encounter them. The Ateneo’s cast of
          cats are endearingly monikered as the “Cateneans”. They quietly
          comfort stressed students and employees with a single glance, stretch
          leisurely across guard’s desks, scamper casually along the walkways,
          or nap on the cafeteria chairs next to their human companions without
          a care in the world.
        </p>
        <p>
          Those who have pets know what it is like to show their animal friends
          off, to go above and beyond for them, to maintain their well-being,
          and to miss them sorely after long stretches of separation. In an
          enduring display of love, students, faculty, and staff alike show that
          love for animals is just as important as love for anyone else.
        </p>
        <div className={styles.photoCards}>
          <img src={cat1} />
          <img src={cat2} />
          <img src={cat3} />
          <img src={photoCardsLine} className={styles.photoCardsLine} />
        </div>
        <h3>Fur-miliar faces</h3>
        <p>
          Jesus “Jhess” Resuello is a humble member of the maintenance staff at
          the PLDT-Convergent Technologies Center and School of Management
          (CTC-SOM) buildings. As he starts his day, the sound of his motorcycle
          is enough to stop the Gonzaga cats in their tracks, who scramble to
          greet him before he can even park.
        </p>
        <p>
          Before he clocks in, Resuello feeds the five or six cats he encounters
          en route to his station on the fifth floor of the CTC building as part
          of his morning ritual. Two of these cats, named Everyday and Mai-Mai,
          are located in the Gonzaga parking space and Schmitt Hall,
          respectively. Many other cats also stay near the Philippine Institute
          of Pure and Applied Chemistry (PIPAC) and the ground floor of the CTC
          building.
        </p>
        <div className={styles.helloCatWrapper}>
          <img src={cloud} className={styles.cloud} />
          <img src={cloud} className={styles.cloud} />
          <img src={helloCat} className={styles.helloCat} />
        </div>
        <p>
          Feeding so many cats on the regular is a costly undertaking, but it is
          one that Resuello has readily shouldered despite the difficulty.
        </p>
        <p>He admits,</p>
        <p className={styles.quote}>
          Medyo nasasaktan ako dahil medyo mabigat [sa bulsa] ‘yung binibili
          kong pagkain, ‘yung Oc [cat food brand] Php 175 isang kilo. Eh halos
          minsan isang kilo, [k]aunti natitira sa isang araw kasi umaga-hapon
          ang pakain ko.
        </p>
        <p>
          (It hurts [my wallet] a bit since the price of the cat food I buy, Oc,
          is hefty, around Php 175 per kilo. Almost always, only a small amount
          of that kilo is left at the end of the day, since I feed them from
          morning until evening.)
        </p>
        <p>
          Caretaking cats was never part of his job description. Originally, the
          only cat under his care was Prada, a black and white cat that famously
          resided in CTC for years. When the COVID-19 pandemic hit, he decided
          to feed the other cats as well, eventually committing to this routine.
        </p>
        <p className={styles.quote}>
          Kinukumpara ko [sa] tao ito. Naisip ko, ‘kawawa naman,’ sabi kong
          ganoon. Kaya ang ginawa ko, naisip kong alagaan [at] pakainin sila.
        </p>
        <p>
          (I liken them to humans and think, ‘how pitiful.’ That is why I
          thought of taking care and feeding them.)
        </p>
        <h3>Cats come and go</h3>
        <p>
          Encountering a Catenean is practically unavoidable, with one or two
          always roaming around each corner.
        </p>
        <p>
          Johnson says that a lot of the Cateneans were born and raised on
          campus. Cateneans have learned to acquaint themselves with the areas
          they frequent and the humans who greet them.
        </p>
        <p>
          “Pao-Pao was here before a lot of students came, and he stayed here
          after a lot [had] graduated,” Johnson shares. As years go on, many of
          those familiar faces do not return, but the Cateneans remain. Some of
          them are lucky enough to reach old age, some succumb to sickness, and
          some unfortunately fall victim to human callousness.
        </p>
        <p>
          Johnson recounts the day Pao-Pao was run over because of “the reckless
          imprudence of drivers.” He first heard the news of Pao-Pao’s passing
          before his 5:00 PM class. When he came back at 6:30 PM, he recalled a
          crowd of around 70 students gathering by the Schmitt Hall before they
          headed to the SOM Forest, where Pao-Pao was buried.
        </p>
        <div className={styles.centerImageWrapper}>
          <img src={cloudCat} />
        </div>
        <p className={styles.quote}>
          These small things which are part of our experience, [...] they’re
          more important than we think. Sometimes, we only notice them when
          they're absent, [...] we realize how much we’ve missed them—how much
          of the experience they are
        </p>
        <p>Johnson says.</p>
        <p>
          The Cateneans stand as a testament to the human capacity to go above
          and beyond for animals. Resuello, Buenafe, Johnson, and the AGILA
          members are only among countless people who give animals the same
          value as fellow humans. The Ateneo community’s efforts of caring for
          the campus cats only concretize the importance of empathy and respect
          for other living beings. Be it animals or another human, the
          interconnectedness of the world’s inhabitants reflect a need for
          respect, kindness, and empathy to build safe communities for all.
        </p>
        <p className={styles.bigCloud}>
          <img src={cloud} className={styles.cloud} />
          <img src={cloud} className={styles.cloud} />
          <img src={cloud} className={styles.cloud} />
          <img src={bigCloud} />
          <p>
            Beyond attention and affection, love has manifested in the Ateneo
            community through a commitment to caring for the Cateneans and an
            acknowledgement of their value as living beings.
          </p>
        </p>
        <p>With reports by Gabrielle Christina A. Cortes</p>
      </div>
      <section className={styles.credits}>
        <div className={styles.grassCatContainer}>
          <img src={grass} className={styles.grass} />
          <img src={paopao} className={styles.paopao} />
          <div className={styles.navigationButtons}>
            <button>
              <a href="#">Back to Top</a>
            </button>
            <button onClick={() => setPage("map")}>Meet the cateneans!</button>
          </div>
        </div>
        <div className={styles.creditsNames}>
          <div>
            <h3>Written&nbsp;by</h3>
            <p>Isabel&nbsp;Victorino and Alyssa&nbsp;E.&nbsp;Duque</p>
          </div>
          <div>
            <h3>Photos&nbsp;by</h3>
            <p>need bylines no bylines</p>
          </div>
          <div>
            <h3>Designed&nbsp;by</h3>
            <p>
              Bea&nbsp;Gan, Juan&nbsp;Lacanienta, Frants&nbsp;Reyes, and
              Razel&nbsp;Tan
            </p>
          </div>
          <div>
            <h3>Developed&nbsp;by</h3>
            <p>
              Luigi&nbsp;Rodriguez, Ysabella&nbsp;B.&nbsp;Panghulan,
              Chesca&nbsp;Reyes, and Waleed&nbsp;Lugod
            </p>
          </div>
        </div>
      </section>
      <img src={brownEllipses} className={styles.brownEllipses} />
      <img src={brownEllipses} className={styles.brownEllipses} />
      <img src={bigHeart} className={styles.bigHeart} />
      <div className={styles.pawContainer}>
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
        <img src={paw} className={styles.paw} />
      </div>
      <div>
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
        <img src={heart} className={styles.heart} />
      </div>
    </main>
  );
};

export default ArticleMain;
