import clsx from "clsx";
import { delay, motion } from "framer-motion";

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
        delay: 2.9, // Retraso "Hola"
      },
    },
  };

  return (
    <motion.div
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
          "text-center font-display font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
        )}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Name Lastname
        <motion.p
          className="text-[20px] justify-center flex font-[Ledger] font-normal"
          variants={FADE_HOLA_ANIMATION_VARIANTS}
        >
          | FRONTEND DEVELOPER |
        </motion.p>
      </motion.h1>
    </motion.div>
  );
}
