import Image from "next/image";
import rocket from "../../assets/icons/title/rocket.png";
import ProyectCard from "../shared/ProyectCard";

const Proyects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center z-10">
      <Image alt="rocketIcon" src={rocket} width={150} height={150} />

      <h2 className="font-montserratAlt text-[50px] font-semibold text-[#CC005F] pt-8">
        PROYECTS
      </h2>
      <ProyectCard/>
    </div>
  );
};

export default Proyects;
