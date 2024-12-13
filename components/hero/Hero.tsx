import { Button } from "@nextui-org/react";
import { FadeDown } from "./Fadedown";
import TextScramble from "./TextScramble";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center z-10">
      <TextScramble />
      <FadeDown />
    </div>
  );
};

export default Hero;
