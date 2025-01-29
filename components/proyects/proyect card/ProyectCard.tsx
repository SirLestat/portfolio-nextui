import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import TechnologyChip from "./TechnologyChip";
import ProyectLink from "./ProyectLink";

interface ChipProps {
  label: string;
  borderColor: string;
  shadowColor?: string;
}

interface ProyectLinkProps {
  livePreviewUrl?: string;
  codeUrl?: string;
}

interface ProyectCardProps {
  src: string | StaticImageData;
  title: string;
  description: string;
  technologies: ChipProps[];
  links: ProyectLinkProps;
}

const ProyectCard = ({
  src,
  description,
  title,
  technologies,
  links,
}: ProyectCardProps) => {
  // Funciones para bloquear/desbloquear el scroll de la página
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className="flex transform scale-90 md:scale-75 lg:scale-90 transition-transform duration-300 justify-center"
      onMouseEnter={disableScroll} // Bloquear el scroll al poner el mouse sobre la tarjeta
      onMouseLeave={enableScroll} // Restaurar el scroll al quitar el mouse
    >
      <Card
        shadow="none"
        className="bg-[#2424244f] flex w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] border border-[#4A4A4A] p-5 rounded-[50px] transition-transform duration-100 ease-in-out hover:scale-[102%] overflow-hidden hover:border-[#CC005F]"
      >
        {/* Contenedor de imagen */}
        <div className="-m-5 rounded-t-[50px] overflow-hidden h-[200px] relative flex">
          <Image
            src={src}
            alt="Card Image"
            fill
            style={{
              objectFit: "cover", // Llena espacio sin distorsionar
              objectPosition: "center",
              transition: "transform 0.3s ease-in-out",
            }}
            className="rounded-t-[50px]"
          />
        </div>

        <CardHeader>
          <h3 className="text-center text-xl font-bold pt-8 font-montserratAlt flex">
            {title}
          </h3>
        </CardHeader>

        <CardBody className="flex flex-col pt-0 flex-grow">
          <p
            className="font-montserrat text-justify pb-6 text-[18px] overflow-y-auto max-h-[200px]"
            style={{
              WebkitOverflowScrolling: "touch", // Permite desplazamiento suave en dispositivos móviles
              scrollbarWidth: "none", // Para Firefox
              msOverflowStyle: "none", // Para Internet Explorer y Edge
            }}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            {/* Chips */}
            {technologies.map((tech) => (
              <TechnologyChip
                key={tech.label}
                borderColor={tech.borderColor}
                label={tech.label}
                shadowColor={tech.shadowColor}
              />
            ))}
          </div>

          <div className="items-end flex-col mt-auto">
            <ProyectLink
              codeUrl={links.codeUrl}
              livePreviewUrl={links.livePreviewUrl}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProyectCard;
