import creditStyles from "../../styles/mainCredits.module.css";
import envelope from "../../assets/images/letter.svg";
import paopao from "../../assets/images/cats/2.jpeg";
import back from "../../assets/images/back_to_start.svg";

const Conclusion = () => {
  const bylines = [
    { "header": "Written by", "bylines": ["Name 1"] },
    { "header": "Photos by", "bylines": ["Name 1", "Name 2"] },
    { "header": "Designed by", "bylines": ["Name 1", "Name 2", "Name 3"] },
    { "header": "Developed by", "bylines": ["Name 1", "Name 2", "Name 3"] },
  ]

  const joinBylines = (bylines) => {
    switch (bylines.length) {
      case 0: return "";
      case 1: return bylines[0];
      case 2: return bylines[0] + " and " + bylines[1];
      default: return bylines.slice(0, -1).join(", ") + " and " + bylines[bylines.length - 1];
    }
  }
  return (
    <>
      <img
        src={envelope}
        className={creditStyles.envelope}
      />
      <section className={creditStyles.letter}>
        <p>The Cateneans stand as a testament to the human capacity
          to go above and beyond for animals. Resuello, Beunafe, Johnson, and
          the AGILA members are only among countless people who give the animals
          the same value as fellow humans.</p>
        <p>The Ateneo community&apos;s efforts of caring for the campus cats only concretize
          the importance of empathy and respect for other living beings. Be it animals
          or another human, the interconnectedness of the world&apos;s inhabitants reflect a need for respect, kindness, and empathy to build safe communities for all.
        </p>
        <p>Beyond attention and affection, love has manifested in the Ateneo community through a commitment to caring for the Cateneans and an acknowledgement of their value as living beings.</p>
      </section>
      <article
        className={creditStyles.polaroid}
        style={{
          transform: "rotate(-10deg)",
          right: "10%"
        }}
      >
        <img
          src={paopao}
          alt="A catenean."
        />
      </article>
      <article
        className={creditStyles.polaroid}
        style={{
          transform: "rotate(10deg)",
          left: "10%",
          bottom: 120
        }}
      >
        <img
          src={paopao}
          alt="A catenean."
        />
      </article>
      <section className={creditStyles.buttons}>
        <button className={creditStyles.button}>Play game</button>
        <button className={creditStyles.button}>View map</button>
        <button className={creditStyles.back}>
          <img src={back} />
        </button>
      </section>
      <section className={creditStyles.bylines}>
        {bylines.map(({ header, bylines }) => (
          <>
            <h1>{header}</h1>
            <p>{joinBylines(bylines)}</p>
          </>
        ))}
      </section>
    </>
  );
};

export default Conclusion;
