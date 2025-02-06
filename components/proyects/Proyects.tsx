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
          description="Este proyecto interactivo ofrece una experiencia inmersiva para explorar álbumes de fotos en línea. Desarrollado con React, la aplicación consume datos de la API de Lorem Picsum, brindando acceso a una amplia colección de imágenes de alta calidad. La interfaz, intuitiva y fácil de usar, permite a los usuarios navegar sin problemas entre álbumes y fotografías. Los modales, implementados con React Portals, mejoran la interacción al proporcionar una vista detallada de cada imagen, incluyendo información relevante. La navegación fluida se logra gracias a React Router, que gestiona las rutas dinámicas de la aplicación. Para una experiencia de usuario completa, se han implementado skeletons que simulan la estructura de las imágenes durante la carga de datos, asegurando una transición visual suave. Además, se manejan errores y se muestran imágenes de marcador de posición en caso de que una imagen no esté disponible, manteniendo la integridad visual de la interfaz."
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
          description="Aplicación web para crear y gestionar boletos personalizados para eventos tecnológicos. Desarrollada con React Router, Tailwind CSS y Vite, con un enfoque mobile-first que garantiza un diseño moderno y responsive. 🚀 Ideal para una experiencia profesional y accesible desde cualquier dispositivo."
          src="/card/ticket7.png"
          title="TICKET CONF"
          technologies={[
            {
              label: "React",
              borderColor: "#58C4DC",
              shadowColor: "#58C4DC",
            },
            {
              label: "Tailwind CSS",
              borderColor: "#38BDF8",
              shadowColor: "#38BDF8",
            },
            { label: "Vite", borderColor: "#B243FE", shadowColor: "#FFC921" },
          ]}
          links={{
            livePreviewUrl: "https://code-conf-ticket.vercel.app/",
            codeUrl: "https://github.com/SirLestat/CodeConfTicket",
          }}
        />
        <ProyectCard
          description="Rintel es un prototipo de app móvil creada en el Hackatón Mictlán, organizado por PILARES, para optimizar las rutas, tráfico y horarios del transporte público en zonas con tránsito complicado. Además, la app permite monitorear unidades en tiempo real, reportar incidentes y solicitar ayuda, mejorando la seguridad de pasajeros y operadores."
          src="/card/rintel2.png"
          title="RINTEL"
          technologies={[
            { label: "Figma", borderColor: "#F35424", shadowColor: "#F35424" },
          ]}
          links={{
            livePreviewUrl:
              "https://www.figma.com/proto/t9QYoGwtffbe5zJ7jrjHoU/Hackaton-3.0?node-id=3-39&p=f&t=nS1lLcOZ6CTczJZJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A39",
          }}
        />
      </div>
    </div>
  );
};

export default Proyects;
