import React, { useEffect } from "react";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { useIsMedium } from "../../../utils/media-query.hook";

const TypewriterAnimation = ({
  text,
  index,
  pause,
  animationLoop,
  wordSpeed,
  inView,
}) => {
  const [start, setStart] = useState(false);
  const isMedium = useIsMedium();

  useEffect(() => {
    let newText = text;
    if (isMedium && text == "PROGRAMMATION") {
      text = "PROGRAMM-ATION";
    }
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
        as="span"
        options={{
          strings: text,
          autoStart: start,
          loop: animationLoop && true,
          cursor: "",
          pauseFor: pause || 3500,
          delay: 60,
        }}
      />
    </span>
  );
};

export default TypewriterAnimation;
