import AboutDescription from "./AboutDescription";
import ProfileImg from "./ProfileImg";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 text-center"
      id="about"
    >
      <ProfileImg />
      <AboutDescription />
    </div>
  );
};

export default About;
