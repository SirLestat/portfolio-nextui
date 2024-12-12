import { Divider } from "@nextui-org/react";
import AboutDescription from "./AboutDescription";
import ProfileImg from "./ProfileImg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ProfileImg />
      <AboutDescription />
      <Divider className="bg-[#CC005F] w-4/5 absolute bottom-[-1px]" />
    </div>
  );
};

export default About;
