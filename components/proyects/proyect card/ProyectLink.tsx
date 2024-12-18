import Image from "next/image";
import linkIcon from "/public/icons/card/expand-arrows.png";
import gitHubeIcon from "/public/icons/card/github.png";

interface ProyectLinkProps {
  livePreviewUrl: string;
  codeUrl: string;
}

const ProyectLink = ({ livePreviewUrl, codeUrl }: ProyectLinkProps) => {
  return (
    <div className="flex justify-between pt-6">
      <a
        href={livePreviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center font-montserratAlt underline   transition-colors  hover:text-[#ff4a9e]"
      >
        <Image src={linkIcon} alt="Icono link" className="w-auto h-[17px]" />
        live preview
      </a>

      <a
        href={codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 items-center font-montserratAlt underline   transition-colors  hover:text-[#ff4a9e]"
      >
        <Image
          src={gitHubeIcon}
          alt="GitHub icon"
          className="w-auto h-[20px]"
        />
        view code
      </a>
    </div>
  );
};

export default ProyectLink;
