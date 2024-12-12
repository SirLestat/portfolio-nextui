import React, { useState, useEffect } from "react";


const TextScramble: React.FC = () => {
  const [text, setText] = useState("");
  const finalText = "HELLO WORLD";
  const chars = "!<>-_\\/[]{}—=+*^?#_@,";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText((prevText) =>
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
    <div className="text-2xl font-semibold tabular-nums tracking-tight font-[MontserratAlternates-Light]">
      <div className="text-center text-[#CC005F]">{text}</div>
    </div>
  );
};

export default TextScramble;
