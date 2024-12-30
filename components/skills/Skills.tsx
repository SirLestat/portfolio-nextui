import Image from "next/image";
import code from "/public/icons/title/code.png";
import { images, learning } from "./iconsData";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8  ">
      <Image
        alt="CodeIcon"
        src={code}
        width={150}
        height={150}
        className="w-[120px] lg:w-[120px]"
      />
      <p className="font-montserratAlt text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold text-[#CC005F]  text-center">
        SKILLS
      </p>

      <div
        className="grid grid-cols-[95px_95px_95px] grid-rows-[auto_auto_auto] gap-6 
        lg:grid-cols-[130px_130px_130px_130px_130px] lg:grid-rows-[auto_auto_auto] lg:gap-8 pt-8"
      >
        {images.map((icon, index) => (
          <div
            key={index}
            className=" relative group flex flex-col items-center transition-transform duration-150 ease-in-out hover:scale-[110%]"
          >
            {/* icono */}
            <Image
              src={icon.src}
              alt={`icon ${index + 1}`}
              width={130}
              height={130}
            />
            {/* Nombre tecnología */}
            <p className="  bottom-[-25px] text-center text-[16px] font-semibold text-white px-2 py-1 rounded opacity-100 sm:opacity-0 md:opacity-0  lg:opacity-0 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-montserratAlt">
              {icon.name.split("/").pop()?.split(".")[0]?.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
<br />
      <p className="font-montserratAlt text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold text-[#CC005F]  text-center">
        LEARNING
      </p>

      <div
        className="grid grid-cols-[95px_95px_95px] grid-rows-[auto_auto_auto] gap-6 
        lg:grid-cols-[130px_130px_130px_130px_130px] lg:grid-rows-[auto_auto_auto] lg:gap-8 pt-8"
      >
        {learning.map((icon, index) => (
          <div
            key={index}
            className=" relative group flex flex-col items-center transition-transform duration-150 ease-in-out hover:scale-[110%]"
          >
            {/* icono */}
            <Image
              src={icon.src}
              alt={`icon ${index + 1}`}
              width={130}
              height={130}
            />
            {/* Nombre tecnología */}
            <p className="  bottom-[-25px] text-center text-[16px] font-semibold text-white px-2 py-1 rounded opacity-100 sm:opacity-0 md:opacity-0  lg:opacity-0 xl:opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-montserratAlt">
              {icon.name.split("/").pop()?.split(".")[0]?.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
