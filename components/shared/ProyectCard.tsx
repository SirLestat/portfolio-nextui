import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image"; // Importa Image de Next.js
import reactIcon from "../../assets/icons/card/icons8-react-a-javascript-library-for-building-user-interfaces-48.png"; // La imagen se importa como StaticImageData

const ProyectCard = () => {
  return (
    <Card className="bg-transparent w-[324px] h-[430px] border border-[rgba(255,255,255,0.2)]">
      <CardHeader>
        <h3>TODO LIST</h3>
      </CardHeader>
      <CardBody>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          repellendus corrupti aspernatur, beatae hic numquam quod debitis odit
          modi porro!
        </p>
        <div className="mt-4">
          <div className="flex flec-col items-center rounded-full shadow-md">
            <div className="rounded-full flex items-center justify-center border-[2px] border-[#58C4DC] text-white px-3 py-1 ">
              <p className="pr-[8px]">React</p>
              <Image
                src={reactIcon}
                alt="React Icon"
                className="w-[20px] h-[20px]"
              />
            </div>
            {/* Colocamos el ícono al lado derecho del texto */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProyectCard;
