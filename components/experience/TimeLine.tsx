import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/experience/ui/timeline";
import cfeteit from "/public/icons/experience/cfeteit.png";
import pilares from "/public/icons/experience/pilares.png";

export function TimelineUi() {
  const imageStyle =
    "rounded-lg object-cover h-auto md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

  const textStyle =
    "text-white dark:text-neutral-200 text-[16px] font-montserrat mb-8 text-justify";

  const containerStyle =
    "grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2";

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="font-montserrat font-bold text-[18px] ">CFE TEIT </p>
          <br />
          <p className={textStyle}>
            En CFE TEIT, he adquirido experiencia en el desarrollo de
            aplicaciones web utilizando tecnologías modernas como JavaScript,
            React y Next.js, lo que me ha permitido construir soluciones
            interactivas y escalables. Mi enfoque en Material UI y Tailwind CSS
            me ha brindado la capacidad de diseñar interfaces de usuario
            atractivas, intuitivas y completamente responsivas, optimizando la
            experiencia del usuario en diferentes dispositivos.
            <br />
            <br />
            He trabajado en la integración de APIs utilizando herramientas como
            Insomnia y gestionado formularios complejos con Formik, asegurando
            una funcionalidad eficiente y sin errores. Además, poseo experiencia
            en control de versiones con Git y GitHub, y en la implementación de
            pruebas unitarias con Jest, lo que garantiza la calidad y
            confiabilidad del software que desarrollo.
            <br />
            <br />
            Mi enfoque está en el desarrollo ágil, creando soluciones que no
            solo cumplen con los requisitos funcionales, sino que también
            ofrecen una experiencia de usuario excepcional. 🚀💼🌟
          </p>
          <br />
          <div className={containerStyle}>
            <Image
              src={cfeteit}
              alt="startup template"
              width={500}
              height={500}
              className="w-auto h-auto "
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="font-montserrat font-bold text-[18px]">PILARES </p>
          <br />
          <p className={textStyle}>
            Tuve la oportunidad de impartir clases de HTML, CSS, SQL y Python,
            cubriendo los lenguajes fundamentales para el desarrollo web y el
            análisis de datos. A través de ejemplos prácticos y proyectos
            reales, ayudé a los estudiantes a comprender cómo estas tecnologías
            pueden ser aplicadas de manera efectiva en el mundo real.
            <br />
            <br />
            Durante mi tiempo como instructor, adquirí experiencia en la
            enseñanza y presentación frente a grupos con diversos niveles de
            conocimiento, desde principiantes hasta avanzados. Mi enfoque fue
            siempre adaptarme a las necesidades y objetivos de cada alumno,
            personalizando mi metodología y lenguaje para asegurar una
            comprensión óptima.
            <br />
            <br />
            Fomenté un ambiente de aprendizaje dinámico e interactivo,
            promoviendo la colaboración y proporcionando feedback constructivo y
            orientación personalizada para el desarrollo de habilidades clave.
            Además, participé como moderador en eventos de tecnología y como
            coach en un hackathon, donde lideramos el desarrollo de un prototipo
            de aplicación móvil para mejorar la eficiencia del transporte
            público en la Ciudad de México.
          </p>

          <div className={containerStyle}>
            <Image
              src={pilares}
              alt="hero template"
              width={500}
              height={500}
              className="w-auto h-auto "
            />
          </div>
        </div>
      ),
    },
    // {
    //   title: "Changelog",
    //   content: (
    //     <div>
    //       <p className={textStyle}>Lorem ipsum dolor sit amet.</p>
    //       <div className="mb-8">
    //         <div className={textStyle}>
    //           ✅ Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //         </div>
    //         <div className={textStyle}>✅ Lorem ipsum dolor sit amet.</div>
    //         <div className={textStyle}>
    //           ✅ Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste!
    //         </div>
    //         <div className={textStyle}>
    //           ✅ Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Architecto adipisci officiis, dolore voluptate corporis placeat
    //           expedita.
    //         </div>
    //         <div className={textStyle}>
    //           ✅ Lorem ipsum dolor sit amet consectetur.
    //         </div>
    //       </div>
    //       <div className={containerStyle}>
    //         <Image
    //           src="https://img.freepik.com/free-vector/hand-drawn-abstract-doodle-pattern_23-2149291189.jpg?t=st=1734643758~exp=1734647358~hmac=c1509adc48431042746494b44126fc977114f97daccb15ba465717b031c9a1a1&w=740"
    //           alt="hero template"
    //           width={500}
    //           height={500}
    //           className={imageStyle}
    //         />
    //         <Image
    //           src="https://img.freepik.com/free-vector/hand-drawn-abstract-leaves-pattern_23-2149013108.jpg?t=st=1734646080~exp=1734649680~hmac=14a22723953b631805beeabc12d7a55eee83f094462efb01fc33167024694bb4&w=740"
    //           alt="feature template"
    //           width={500}
    //           height={500}
    //           className={imageStyle}
    //         />
    //         <Image
    //           src="https://img.freepik.com/free-vector/colorful-hand-drawn-abstract-leaves-pattern_23-2148996043.jpg?t=st=1734646091~exp=1734649691~hmac=1c1993134e0d80b6828d72c745ebd7519200d764254f5c399f18a2bf6ac4ad5c&w=740"
    //           alt="bento template"
    //           width={500}
    //           height={500}
    //           className={imageStyle}
    //         />
    //         <Image
    //           src="https://img.freepik.com/free-vector/hand-drawn-abstract-leaves-pattern_23-2149010011.jpg?t=st=1734646110~exp=1734649710~hmac=51b0936edb1f70916af21518f0dfc7993cd25be6eba24e5f71fa4384ccf67a91&w=740"
    //           alt="cards template"
    //           width={500}
    //           height={500}
    //           className={imageStyle}
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
