import Image from "next/image";
import code from "../../assets/icons/title/code.png";
import { images } from "./iconsData";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8">
      <Image
        className="rocket"
        alt="rocketIcon"
        src={code}
        width={150}
        height={150}
      />
      <p className=" font-montserratAlt text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold text-[#CC005F] pt-8 text-center">
        SKILLS
      </p>

      <div className="grid grid-cols-[200px_200px_200px_200px_200px] grid-rows-[200px_200px] gap-8">
        {images.map((icon, index) => (
          <div key={index} className="border border-[yellow]">
            <Image
              src={icon.src}
              alt={`icon ${index + 1}`}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
