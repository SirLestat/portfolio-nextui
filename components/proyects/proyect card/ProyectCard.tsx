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
    <Card
      shadow="none"
      className="bg-[#2424244f] w-full sm:w-[90%] md:w-[90%] lg:w-[100%] xl:w-[100%] border border-[#4A4A4A] p-5 rounded-[50px] transition-transform duration-100 ease-in-out hover:scale-[102%] overflow-hidden "
    >
      {/* Contenedor de imagen */}
      <div className="-m-5 rounded-t-[50px] overflow-hidden h-[200px] relative ">
        <Image
          src={src}
          alt="Card Image"
          fill
          style={{
            objectFit: "cover", // Llena el espacio sin distorsionar
            objectPosition: "center",

            transition: "transform 0.3s ease-in-out",
          }}
          className="rounded-t-[50px]"
        />
      </div>

      <CardHeader>
        <h3 className="text-center text-xl font-bold pt-8 font-montserratAlt">
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
  );
};

export default ProyectCard;
