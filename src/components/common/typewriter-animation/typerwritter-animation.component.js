import React, { useEffect } from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const TypewriterAnimation = ({ text, index, pause }) => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, index * 700);
    return () => {
      clearTimeout();
    };
  }, [start]);

  return (
    <span>
      <Typewriter
        options={{
          strings: text,
          autoStart: start,
          loop: true,
          cursor: "",
          pauseFor: pause || 3500,
          delay: 80,
        }}
      />
    </span>
  );
};

export default TypewriterAnimation;
