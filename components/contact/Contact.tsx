import Image from "next/image";
import arroba from "/public/icons/title/arroba.png";
import ContactForm from "./ContactForm";
import { Divider } from "@nextui-org/react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 text-center ">
      <div>
        <Image
          className="rounded-full w-[150px] lg:w-[150px]"
          src={arroba}
          alt="arroba image"
          width={150}
          height={150}
        />
        <h1>Contact</h1>
      </div>

      <div className="border border-[#CC005F] rounded-br-[30px] rounded-tl-[30px] pt-[5px] pb-[5px] pl-[25px] pr-[25px] font-montserrat font-medium  text-[25px]">
        Send Me A Message
      </div>

      <ContactForm/>
      
    </div>
  );
};

export default Contact;
