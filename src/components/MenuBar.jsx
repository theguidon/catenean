import { Link } from "react-router";
import styles from "../styles/menubar.module.css";
import { useState } from "react";
import Menu from "../assets/images/menu_icon.svg";
import Close from "../assets/images/close_icon.svg";

function MenuButton({ isOpen, toggleOpen }) {
  return (
    <button className={styles.menuButton} onClick={toggleOpen}>
      <img
        src={Menu}
        style={{
          rotation: isOpen ? "359deg" : "0deg",
          scale: isOpen ? "0" : "1",
        }}
      />
      <img
        src={Close}
        style={{
          rotation: isOpen ? "0deg" : "359deg",
          scale: isOpen ? "1" : "0",
        }}
      />
    </button>
  );
}

export default function MenuBar({ icons }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      className={styles.menubar}
      style={{
        backgroundColor: isOpen ? "rgba(255,255,236,0.8)" : "transparent",
      }}
    >
      {icons.map(({ img, link }) => (
        <Link
          to={link}
          style={{
            marginRight: isOpen ? "2em" : "-5vw",
            position: "relative",
            left: isOpen ? "2em" : 0,
            transform: `scale(${isOpen ? 1 : 0})`,
          }}
        >
          <img src={img} />
        </Link>
      ))}
      <MenuButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
    </section>
  );
}
