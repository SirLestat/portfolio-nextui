import { FadeDown } from "./Fadedown";
import TextScramble from "./TextScramble";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 sm:h-full" style={{ minHeight: '100vh' }}>
      <TextScramble />
      <FadeDown />
    </div>
  );
};

export default Hero;
