import { Card, CardBody, CardHeader } from "@nextui-org/react";
import TechnologyChip from "./TechnologyChip";
import Image from "next/image";
import card1 from "../../../assets/icons/card/card1.png";

const ProyectCard = () => {
  return (
    <Card
      shadow="none"
      className="bg-transparent w-[390px] h-auto border border-[rgba(255,255,255,0.2)] p-5 rounded-[50px] transition-transform duration-300 ease-in-out hover:scale-[102%] overflow-hidden"
    >
      {/* Contenedor para la imagen sin padding */}
      <div className="-m-5 rounded-t-[50px] overflow-hidden h-[250px] relative">
        <Image
          src={card1}
          alt="Card Image"
          fill
          style={{
            objectFit: "cover",  // Cambiado a 'cover' para llenar el espacio sin distorsionar
            objectPosition: "center", // Asegura que la imagen esté centrada desde arriba
            transform: "scale(1)", // Escala la imagen un 20% más grande
            transition: "transform 0.3s ease-in-out", // Transición suave al escalar
          }}
          className="rounded-t-[50px]"
        />
      </div>

      <CardHeader>
        <h3 className="text-center text-xl font-bold pt-8">TODO LIST</h3>
      </CardHeader>

      <CardBody className="flex flex-col pt-0 pb-">
        <p className="font-montserrat text-justify pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          repellendus corrupti aspernatur, beatae hic numquam quod debitis odit
          modi porro! lorem10
        </p>

        <div className="flex flex-wrap gap-3">
          {/* Chips */}
          <TechnologyChip
            label="React"
            borderColor="#58C4DC"
            shadowColor="#58C4DC"
          />
          <TechnologyChip
            label="Material UI"
            borderColor="#0073E6"
            shadowColor="#0073E6"
          />
          <TechnologyChip
            label="Formik"
            borderColor="#0073E6"
            shadowColor="#0073E6"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProyectCard;
