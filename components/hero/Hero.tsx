import { Divider } from "@nextui-org/react";
import { FadeDown } from "./Fadedown";
import TextScramble from "./TextScramble";
import { BackgroundBeams } from "./BackgroundBeams";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <BackgroundBeams />
      <TextScramble />
      <FadeDown />
      <Divider className="bg-[#CC005F] w-4/5 absolute bottom-[-1px]" />
      
    </div>
  );
};

export default Hero;
