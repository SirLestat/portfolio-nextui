import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Proyects from "@/components/proyects/Proyects";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      {/* <Divider className="bg-[#CC005F] w-4/5 mx-auto" /> */}
      <About />
      {/* <Divider className="bg-[#CC005F] w-4/5 mx-auto" /> */}
      <Proyects/>
    </div>
  );
}
