import styles from "../../styles/InstructionModal.module.css";
import close from "../../assets/images/game/NavIcons/X.svg";
const InstructionsModal = ({ closeModal }) => {
  return (
    <aside className={styles.instruction}>
      <header>
        <h1>How to Play</h1>
        <button onClick={closeModal}><img src={close} /></button>
      </header>
      <ul>
        <li><p>Arrange the buildings and Cateneans according to the clues provided.</p></li>
        <li><p>Drag and drop the cats or buildings on to the map.</p></li>
        <li><p>Press submit when you&apos;re done!</p></li>
      </ul>
    </aside>
  );
}

export default InstructionsModal
