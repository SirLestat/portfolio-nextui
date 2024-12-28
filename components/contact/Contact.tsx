import Image from "next/image";
import arroba from "/public/icons/title/arroba.png";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 text-center ">
      <div className="flex justify-center">
        <Image
          className="rounded-full w-[100px] lg:w-[100px]"
          src={arroba}
          alt="arroba image"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-[40px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-montserratAlt text-center font-semibold text-[#CC005F] ">
        Contact
      </h1>
      <div className="border border-[#CC005F] rounded-br-[30px] rounded-tl-[30px] pt-[5px] pb-[5px] pl-[25px] pr-[25px] font-montserrat font-medium text-[25px] mb-20 lg:mb-24 mt-8   hover:border-[#CC005F]">
        Send Me A Message
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
