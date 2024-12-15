import Image from "next/image";
import rocket from "../../assets/icons/title/rocket.png";
import ProyectCard from "./proyect card/ProyectCard";

const Proyects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center z-10">
      <style>
        {`
          
          .rocket {
            transition: transform 1s ease-in-out, opacity 1s ease-in-out;
          }

          
          .rocket:hover {
            transform: translate(100px, -100px); 
            opacity: 0; 
          }

          
          .rocket:not(:hover) {
            transform: translate(0, 0);
            opacity: 1; 
          }
        `}
      </style>

      <Image
        className="rocket"
        alt="rocketIcon"
        src={rocket}
        width={150}
        height={150}
      />

      <h2 className="font-montserratAlt text-[50px] font-semibold text-[#CC005F] pt-8">
        PROYECTS
      </h2>
      <ProyectCard />
    </div>
  );
};

export default Proyects;
