import React, { useEffect } from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const TypewriterAnimation = ({
  text,
  index,
  pause,
  animationLoop,
  wordSpeed,
  inView,
}) => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setStart(true);
      }, index * wordSpeed || 700);
      return () => {
        clearTimeout();
      };
    }
  }, [start, inView]);

  return (
    <span>
      <Typewriter
        options={{
          strings: text,
          autoStart: start,
          loop: animationLoop && true,
          cursor: "",
          pauseFor: pause || 3500,
          delay: 80,
        }}
      />
    </span>
  );
};

export default TypewriterAnimation;
