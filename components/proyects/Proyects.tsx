import Image from "next/image";
import ProyectCard from "./proyect card/ProyectCard";
import rocket from "/public/icons/title/rocket.png";
import card1 from "/public/icons/card/card1.png";
import spaimage from "/public/card/spaimage.jpg";

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
        className="rocket w-[100px] lg:w-[100px]"
        alt="rocketIcon"
        src={rocket}
        width={150}
        height={150}
      />
      <h2 className=" font-montserratAlt text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold text-[#CC005F]  text-center">
        PROYECTOS
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-xl mx-auto">
        {/* Card 1 */}
        <ProyectCard
          description="Aplicación web intuitiva para la gestión de tareas, desarrollada con un enfoque en simplicidad y eficiencia. Permite a los usuarios organizar pendientes mediante funcionalidades de agregar, editar y eliminar tareas."
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
          description="Proyecto interactivo para explorar álbumes fotográficos con una interfaz limpia y amigable. Consume datos de la API de JSONPlaceholder, utiliza modales implementados con React Portals para mejorar la interacción y React Router para gestionar rutas dinámicas."
          src={spaimage}
          title="ALBUM VIEW"
          technologies={[
            { label: "React", borderColor: "#58C4DC", shadowColor: "#58C4DC" },
            {
              label: "Material UI",
              borderColor: "#0073E6",
              shadowColor: "#0073E6",
            },
            { label: "Vite", borderColor: "#B243FE", shadowColor: "#FFC921" },
          ]}
          links={{
            livePreviewUrl: "https://album-app-mu.vercel.app/",
            codeUrl: "https://github.com/SirLestat/Album-app",
          }}
        />

        {/* Card 3 */}
        <ProyectCard
          description="Esta página muestra mis proyectos de manera clara y atractiva, con un diseño moderno y optimizado para todos los dispositivos. Incluye descripciones concisas y enlaces directos a demostraciones o repositorios, permitiendo conocer mi trabajo y habilidades."
          src="https://img.freepik.com/free-photo/turned-gray-laptop-computer_400718-47.jpg?t=st=1735569787~exp=1735573387~hmac=184223bc4e421cc1e9e8214c38f9afe817b314494fe035c4fcf8bfab7aa1ea29&w=1800"
          title="PORTFOLIO"
          technologies={[
            {
              label: "Next.js",
              borderColor: "#FFFFFF",
              shadowColor: "#FFFFFF",
            },
            {
              label: "Tailwind CSS",
              borderColor: "#38BDF8",
              shadowColor: "#38BDF8",
            },
            {
              label: "Typescript",
              borderColor: "#3178C6",
              shadowColor: "#3178C6",
            },
            { label: "Figma", borderColor: "#F35424", shadowColor: "#F35424" },
          ]}
          links={{
            livePreviewUrl: "https://portfolio-alejandro-santiago.vercel.app/",
            codeUrl: "https://github.com/SirLestat/portfolio-nextui",
          }}
        />

        <ProyectCard
          description=""
          src="/card/indevelopment.png"
          title="POKEMON APP"
          technologies={[
            {
              label: "Next.js",
              borderColor: "#FFFFFF",
              shadowColor: "#FFFFFF",
            },
            {
              label: "Tailwind CSS",
              borderColor: "#38BDF8",
              shadowColor: "#38BDF8",
            },
            {
              label: "Typescript",
              borderColor: "#3178C6",
              shadowColor: "#3178C6",
            },
          ]}
          links={{
            livePreviewUrl: "Coming soon",
            codeUrl: "Coming soon",
          }}
        />
      </div>
    </div>
  );
};

export default Proyects;
