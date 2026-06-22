import useSound from "use-sound";
import paperSound1 from "../assets/sounds/sfx/paper_sound_1.wav";
import paperSound2 from "../assets/sounds/sfx/paper_sound_2.wav";
import paperSound3 from "../assets/sounds/sfx/paper_sound_3.wav";
import meowSound1 from "../assets/sounds/sfx/meow1.mp3";
import meowSound2 from "../assets/sounds/sfx/meow2.m4a";
import meowSound3 from "../assets/sounds/sfx/meow3.m4a";
import boingSound1 from "../assets/sounds/sfx/boing1.mp3";
import boingSound2 from "../assets/sounds/sfx/boing2.m4a";
import boingSound3 from "../assets/sounds/sfx/boing3.m4a";
import bg1 from "../assets/sounds/music/bg1.mp3";
import bg2 from "../assets/sounds/music/bg2.mp3";
import bg3 from "../assets/sounds/music/bg3.mp3";

export function PaperRustles() {
  const [paper1] = useSound(paperSound1);
  const [paper2] = useSound(paperSound2);
  const [paper3] = useSound(paperSound3);

  return [paper1, paper2, paper3];
}

export function Meows() {
  const [meow1] = useSound(meowSound1);
  const [meow2] = useSound(meowSound2);
  const [meow3] = useSound(meowSound3);

  return [meow1, meow2, meow3];
}

export function Boings() {
  const [boing1] = useSound(boingSound1);
  const [boing2] = useSound(boingSound2);
  const [boing3] = useSound(boingSound3);

  return [boing1, boing2, boing3];
}

export function BGM({ id, src }) {
  return <audio id={id} src={src} autoPlay={true} loop={true} />;
}

export function BgMusic1() {
  return <BGM id="bgm1" src={bg1} />;
}

export function BgMusic2() {
  return <BGM id="bgm2" src={bg2} />;
}

export function BgMusic3() {
  return <BGM id="bgm3" src={bg3} />;
}
