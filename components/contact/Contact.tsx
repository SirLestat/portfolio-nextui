import Image from "next/image";
import arroba from "/public/icons/title/arroba.png";
import github from "/public/icons/footer/github.png";
import linkedin from "/public/icons/footer/linkedin.png";
import mail from "/public/icons/footer/mail.png";
import whatsapp from "/public/icons/footer/whatsapp1.png";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 text-center">
      <div className="flex justify-center">
        <Image
          className="rounded-full w-[100px] lg:w-[100px]"
          src={arroba}
          alt="arroba image"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-montserratAlt text-center font-semibold text-[#CC005F]">
        CONTACTO
      </h1>
      <div className="border border-[#CC005F] rounded-br-[30px] rounded-tl-[30px] pt-[5px] pb-[5px] pl-[25px] pr-[25px] font-montserrat font-medium text-[25px] mb-20 lg:mb-24 mt-8 hover:border-[#CC005F]">
        Envíame un Mensaje
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
        <a
          href="mailto:xlesthathx@gmail.com"
          target="_blank"
          className="flex flex-col items-center transition-transform duration-150 ease-in-out hover:scale-[110%]"
        >
          <Image
            src={mail}
            alt="email Icon"
            layout="fixed"
            className="w-12 lg:w-20 lg:h-20"
          />
          <p className="font-montserratAlt font-semibold mt-2">Email</p>
        </a>
        <a
          href="https://wa.me/5512406221"
          target="_blank"
          className="flex flex-col items-center transition-transform duration-150 ease-in-out hover:scale-[110%]"
        >
          <Image
            src={whatsapp}
            alt="whatsapp Icon"
            layout="fixed"
            className="w-12 lg:w-20 lg:h-20"
          />
          <p className="font-montserratAlt font-semibold mt-2">Whatsapp</p>
        </a>
        <a
          href="https://github.com/SirLestat"
          target="_blank"
          className="flex flex-col items-center transition-transform duration-150 ease-in-out hover:scale-[110%]"
        >
          <Image
            src={github}
            alt="github Icon"
            layout="fixed"
            className="w-12 lg:w-20 lg:h-20"
          />
          <p className="font-montserratAlt font-semibold mt-2">Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/edgar-alejandro-santiago-p%C3%A9rez-baaa1324a/"
          target="_blank"
          className="flex flex-col items-center transition-transform duration-150 ease-in-out hover:scale-[110%]"
        >
          <Image
            src={linkedin}
            alt="linkedin Icon"
            layout="fixed"
            className="w-12 lg:w-20 lg:h-20"
          />
          <p className="font-montserratAlt font-semibold mt-2">Linked In</p>
        </a>
      </div>
      <a
        href="/cv/CV_ALEJANDRO_SANTIAGO_2024.pdf"
        download
        className="mt-20 w-full max-w-max rounded-full bg-transparent text-white border-[#CC005F] border-[1px] hover:bg-[#CC005F] font-semibold font-montserrat px-6 py-2 transition-all duration-200 ease-in-out mb-8"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default Contact;
