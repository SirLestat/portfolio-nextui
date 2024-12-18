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
  livePreviewUrl: string;
  codeUrl: string;
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
  return (
    <div className="transform scale-90 md:scale-75 lg:scale-90 transition-transform duration-300">
      <Card
        shadow="none"
        className="bg-[#2424244f] flex w-full sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%] border border-[#4A4A4A] p-5 rounded-[50px] transition-transform duration-100 ease-in-out hover:scale-[102%] overflow-hidden"
      >
        {/* Contenedor de imagen */}
        <div className="-m-5 rounded-t-[50px] overflow-hidden h-[180px] relative flex">
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

        <CardBody className="flex flex-col pt-0">
          <p className="font-montserrat text-justify pb-6">{description}</p>

          <div className="flex flex-wrap gap-3">
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

          <div>
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

