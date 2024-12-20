import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/experience/ui/timeline";

export function TimelineUi() {
  const data = [
    {
      title: "2024",
      content: (
        <div >
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-montserrat l mb-8 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, eaque? TY
          </p>
          <div className="grid grid-cols-2 gap-4 ">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern_23-2149293421.jpg?t=st=1734643326~exp=1734646926~hmac=2e7cb916e9cf07b2825559a2c566cc8a988ebd2bf9d79e8a63622f3ce512dc82&w=740"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern_23-2149293422.jpg?t=st=1734643376~exp=1734646976~hmac=84c4d1e3effc7f3f0549c569276b2d1ad786a39959fd740754b0bf901c63455d&w=740"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern_23-2149263581.jpg?t=st=1734643467~exp=1734647067~hmac=ec4ec732e43f6f2a309297fa84e4bf86de4a9aad455f374af0fa951f861fe881&w=740"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-abstract-doodle-pattern_23-2149292212.jpg?t=st=1734643574~exp=1734647174~hmac=e1aa51d364ace7260d840fdf7950236780a26fcbc8647f51254c291f200cb048&w=740"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-montserrat mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quae consequatur dolorum fuga quod assumenda optio minus odio incidunt nemo?
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-montserrat mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam reiciendis similique dolorem iusto incidunt libero nostrum neque non quasi soluta quam possimus harum, consequatur explicabo ea ipsum blanditiis nesciunt eligendi.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-colorful-matisse-pattern-design_23-2151110702.jpg?t=st=1734643617~exp=1734647217~hmac=6cefdd9bd87f3d1b9e9ac0ca7f8e247cb207d5051768a38159018e7fce4e9b4a&w=740"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-colorful-matisse-pattern-design_23-2151131467.jpg?t=st=1734643699~exp=1734647299~hmac=0650c05c454c15d51150d02f067afb0ae161d60c7e50f43d552b09f4d2379a0c&w=740"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-element-pattern_23-2148945515.jpg?t=st=1734643719~exp=1734647319~hmac=02bcdc75127322e667c0d8f53a938d3b0b3ad0b52cabcaa5a997494c77fd649a&w=740"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/flat-minimal-double-sided-horizontal-business-card-template_23-2149272326.jpg?t=st=1734643736~exp=1734647336~hmac=52fffa0365d164c6beee4eaa88b928564ddc97fc7251ae0e608615555abc473b&w=740"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 font-montserrat">
            Lorem ipsum dolor sit amet.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm font-montserrat">
              ✅ Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm font-montserrat">
              ✅ Lorem ipsum dolor sit amet.
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm font-montserrat" >
              ✅ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste!
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm font-montserrat">
              ✅ Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto adipisci officiis, dolore voluptate corporis placeat expedita.
            </div>
            <div className="flex gap-2 items-center text-white dark:text-neutral-300 text-xs md:text-sm font-montserrat">
              ✅ Lorem ipsum dolor sit amet consectetur.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern_23-2149291189.jpg?t=st=1734643758~exp=1734647358~hmac=c1509adc48431042746494b44126fc977114f97daccb15ba465717b031c9a1a1&w=740"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-leaves-pattern_23-2149013108.jpg?t=st=1734646080~exp=1734649680~hmac=14a22723953b631805beeabc12d7a55eee83f094462efb01fc33167024694bb4&w=740"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/colorful-hand-drawn-abstract-leaves-pattern_23-2148996043.jpg?t=st=1734646091~exp=1734649691~hmac=1c1993134e0d80b6828d72c745ebd7519200d764254f5c399f18a2bf6ac4ad5c&w=740"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-abstract-leaves-pattern_23-2149010011.jpg?t=st=1734646110~exp=1734649710~hmac=51b0936edb1f70916af21518f0dfc7993cd25be6eba24e5f71fa4384ccf67a91&w=740"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
