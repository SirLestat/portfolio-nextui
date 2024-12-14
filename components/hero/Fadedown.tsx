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
      className="flex flex-col items-center justify-center"
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
      <motion.h1
        className={clsx(
          "text-center font-display font-montserrat drop-shadow-sm font-semibold",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
        )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Name Lastname
        <motion.p
          className="text-[20px] justify-center flex font-ledger font-normal"
          variants={FADE_HOLA_ANIMATION_VARIANTS}
        >
          | FRONTEND DEVELOPER |
        </motion.p>
      </motion.h1>

      <motion.div
        variants={FADE_LINK_BUTTON}
        className="cursor-pointer px-4 py-2 border-1 border-white text-white hover:bg-[#CC005F] hover:border-[#CC005F] hover:text-white transition-all"
      >
        <Link
          to="about"
          smooth={true}
          duration={1000}
          className="w-full h-full block"
        >
          MORE ABOUT ME
        </Link>
      </motion.div>
    </motion.div>
  );
}
