import Image from "next/image";
import github from "/public/icons/footer/github.png";
import linkedin from "/public/icons/footer/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-gray-500 text-sm py-4 flex justify-center flex-col">
        <div className=" flex justify-center mx-auto gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={github}
              alt="github Icon"
              layout="fixed"
              className="w-7 h-7 lg:w-10 lg:h-10"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedin}
              alt="linkedin Icon"
              layout="fixed"
              className="w-7 h-7 lg:w-10 lg:h-10"
            />
          </a>
        </div>

        <p className="pt-5">
          © 2024 - Designed and Developed by Alejandro Santiago
        </p>
      </div>
    </footer>
  );
};

export default Footer;
