import { StaticImageData } from "next/image";
import { useState } from "react";

interface ChipProps {
  label: string;
  borderColor: string;
  shadowColor?: string;
}

const TechnologyChip = ({
  label,
  borderColor = "#FFF",
  shadowColor = "#FFF",
}: ChipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center rounded-full px-3 p-0.5 ease-out font-montserratAlt"
      style={{
        borderColor: borderColor,
        borderWidth: "2px",
        boxShadow: isHovered ? `0 0 6px 1px ${shadowColor}` : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </div>
  );
};

export default TechnologyChip;
