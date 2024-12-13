import AboutDescription from "./AboutDescription";
import ProfileImg from "./ProfileImg";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center z-10 scale-100 sm:scale-10 md:scale-10 lg:scale-10 xl:scale-90"
      id="about"
    >
      <ProfileImg />
      <AboutDescription />
    </div>
  );
};

export default About;
