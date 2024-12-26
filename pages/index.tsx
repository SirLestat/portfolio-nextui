import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Proyects from "@/components/proyects/Proyects";
import Skills from "@/components/skills/Skills";
import CircularMenu from "@/components/ui/CircularMenu";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 max-w-screen-xl mx-auto -mt-20 md:-mt-0 sm:-mt-0 lg:-mt-0 xl:-mt-0">
      <section id="hero">
        <Hero />
      </section>
      <CircularMenu />
      <Divider className="bg-[#CC005F] w-3/4 mx-auto" />
      <section id="about">
        <About />
      </section>
      <Divider className="bg-[#CC005F] w-3/4 mx-auto" />
      <section id="projects">
        <Proyects />
      </section>
      <Divider className="bg-[#CC005F] w-3/4 mx-auto" />
      <section id="skills">
        <Skills />
      </section>
      <Divider className="bg-[#CC005F] w-3/4 mx-auto" />
      <section id="experience">
        <Experience />
      </section>
      <Divider className="bg-[#CC005F] w-3/4 mx-auto" />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
