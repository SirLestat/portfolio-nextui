import AboutDescription from "./AboutDescription";
import ProfileImg from "./ProfileImg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ProfileImg />
      <AboutDescription />
    </div>
  );
};

export default About;
