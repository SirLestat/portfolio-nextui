import React, { useState, useEffect } from "react";

const TextScramble: React.FC = () => {
  const [text, setText] = useState("");
  const finalText = "HELLO WORLD";
  const chars = "!<>-_\\/[]{}—=+*^?#_@,";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(() =>
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 5;
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[30px] font-semibold tabular-nums tracking-tight font-montserratAlt">
      <div className="text-center text-[#CC005F]">{text}</div>
    </div>
  );
};

export default TextScramble;
