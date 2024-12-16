import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Proyects from "@/components/proyects/Proyects";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 max-w-screen-xl mx-auto -mt-20  md:-mt-0 sm:-mt-0 lg:-mt-0 xl:-mt-0 ">
      <Hero />
       <Divider className="bg-[#CC005F] w-4/5 mx-auto" /> 
      <About />
      <Divider className="bg-[#CC005F] w-4/5 mx-auto" /> 
      <Proyects />
    </div>
  );
}
