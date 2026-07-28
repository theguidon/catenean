import { Link } from "react-router";
import styles from "../styles/menubar.module.css";
import { useState } from "react";
import Menu from "../assets/images/menu_icon.svg";
import Close from "../assets/images/close_icon.svg";
import boingSound from "../assets/sounds/sfx/boing2.m4a";
import uiPop1 from "../assets/sounds/sfx/pop.m4a";
import useSound from "use-sound";

function MenuButton({ isOpen, toggleOpen }) {
  const [boing] = useSound(boingSound);
  return (
    <button
      className={styles.menuButton}
      onClick={() => {
        toggleOpen();
        boing();
      }}
    >
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

function MenuItem({ isOpen, defaultImg, hoverImg, label, link }) {
  const [popSound] = useSound(uiPop1);
  return (
    <Link
      to={link}
      className={styles.menuItem}
      onMouseEnter={popSound}
      style={{
        marginRight: isOpen ? "2em" : "-5vw",
        position: "relative",
        left: isOpen ? "2em" : 0,
        transform: `scale(${isOpen ? 1 : 0})`,
      }}
    >
      <img src={defaultImg} />
      <img src={hoverImg} className={styles.hoverItem} />
      <p>{label}</p>
    </Link>
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
      {icons.map(({ defaultImg, hoverImg, label, link }) => (
        <MenuItem
          isOpen={isOpen}
          link={link}
          label={label}
          defaultImg={defaultImg}
          hoverImg={hoverImg}
        />
      ))}
      <MenuButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
    </section>
  );
}
