import Image from "next/image";
import ProyectCard from "./proyect card/ProyectCard";
import rocket from "/public/icons/title/rocket.png";
import card1 from "/public/icons/card/card1.png";

const Proyects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
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
        className="rocket w-[120px] lg:w-[150px]"
        alt="rocketIcon"
        src={rocket}
        width={150}
        height={150}
        
      />
      <h2 className=" font-montserratAlt text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold text-[#CC005F]  text-center">
        PROJECTS
      </h2>

      
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-xl mx-auto">
        {/* Card 1 */}
        <ProyectCard
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisimet consectetur adipisicing elit."
          src={card1}
          title="TO DO LIST"
          technologies={[
            { label: "React", borderColor: "#58C4DC", shadowColor: "#58C4DC" },
            {
              label: "Material UI",
              borderColor: "#0073E6",
              shadowColor: "#0073E6",
            },
            { label: "Formik", borderColor: "#172B4D", shadowColor: "#172B4D" },
          ]}
          links={{
            livePreviewUrl: "https://todolist-alejandrosantiago.vercel.app/",
            codeUrl: "https://github.com/SirLestat/ToDoList",
          }}
        />

        {/* Card 2 */}
        <ProyectCard
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          src={card1}
          title="TO DO LIST"
          technologies={[
            { label: "React", borderColor: "#58C4DC", shadowColor: "#58C4DC" },
            {
              label: "Material UI",
              borderColor: "#0073E6",
              shadowColor: "#0073E6",
            },
            { label: "Formik", borderColor: "#172B4D", shadowColor: "#172B4D" },
          ]}
          links={{
            livePreviewUrl: "https://example.com/live-preview-2",
            codeUrl: "https://github.com/user/repository-2",
          }}
        />

        {/* Card 3 */}
        <ProyectCard
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          src={card1}
          title="TO DO LIST"
          technologies={[
            { label: "React", borderColor: "#58C4DC", shadowColor: "#58C4DC" },
            {
              label: "Material UI",
              borderColor: "#0073E6",
              shadowColor: "#0073E6",
            },
            { label: "Formik", borderColor: "#172B4D", shadowColor: "#172B4D" },
          ]}
          links={{
            livePreviewUrl: "https://example.com/live-preview-3",
            codeUrl: "https://github.com/user/repository-3",
          }}
        />
      </div>
    </div>
  );
};

export default Proyects;
