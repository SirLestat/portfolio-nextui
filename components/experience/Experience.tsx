import Image from "next/image";
import { TimelineUi } from "./TimeLine";
import briefCase from "/public/icons/title/briefcase.png";

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Image
        alt="briefCaseIcon"
        src={briefCase}
        width={150}
        height={150}
        className="w-[120px] lg:w-[150px]"
      />
      <p className="font-montserratAlt text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold text-[#CC005F] pt-4 text-center">
        EXPERIENCE
      </p>
      <TimelineUi />
    </div>
  );
};

export default Experience;
