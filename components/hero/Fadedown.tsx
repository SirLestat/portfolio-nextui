import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        damping: 15,
        stiffness: 50,
        delay: 2.3,
      },
    },
  };

  const FADE_HOLA_ANIMATION_VARIANTS = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        damping: 20,
        stiffness: 20,
        delay: 2.9,
      },
    },
  };

  const FADE_LINK_BUTTON = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        damping: 20,
        stiffness: 20,
        delay: 4.0,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center xl:px-16 lg:px-12 md:px-8 px-4 :pt-11"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.8,
          },
        },
      }}
    >
      {/* Titulo */}
      <motion.h1
        className={clsx(
          "mt-8 md:mt-0 sm:mt-0 lg:mt-0 xl:mt-0",
          "text-center font-display font-montserrat drop-shadow-sm font-semibold",
          "text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[100px]", 
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[8rem]" ,
          "text-[50px] "
        )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Name Lastname
        {/* subtitulo */}
        <motion.p
          className="mt-8 md:mt-0 sm:mt-0 lg:mt-0 xl:mt-0 leading-relaxed text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[35px] justify-center flex font-ledger font-normal"
          variants={FADE_HOLA_ANIMATION_VARIANTS}
        >
          | FRONTEND DEVELOPER |
        </motion.p>
      </motion.h1>

      {/* Boton*/}
      <motion.div
        variants={FADE_LINK_BUTTON}
        className=" mt-8 rounded-full cursor-pointer px-6 py-3 sm:px-8 sm:py-3 lg:px-8 lg:py-3 xl:px-8 xl:py-3 border-2 border-white text-white hover:bg-[#CC005F] hover:border-[#CC005F] hover:text-white transition-all"
      >
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className=" w-full h-full block  sm:text-[24px] md:text-[25px] lg:text-[25px] xl:text-[25px]"
        >
          MORE ABOUT ME
        </Link>
      </motion.div>
    </motion.div>
  );
}
