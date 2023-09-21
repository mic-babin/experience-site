import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Line } from "./horizontal-scroll-line.styles";

const HorizontalScrollLine = ({ index, size }) => {
  // Animation controls
  const controls = useAnimation();

  // Animation properties
  const animationVariants = {
    initial: {
      y: "50vh", // Start at 50vh (half the viewport height)
      height: "100px",
    },
    animate: {
      y: "-50vh", // Translate to the top (negative 50vh)
      height: "0px",
    },
  };

  // Animation settings
  const animationOptions = {
    duration: 10, // Adjust the duration as needed
    repeat: Infinity, // Loop infinitely
    ease: "linear", // Linear animation
    delay: index,
  };

  // Start the animation
  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <Line
      initial="initial"
      animate={controls}
      variants={animationVariants}
      transition={animationOptions}
    ></Line>
  );
};

export default HorizontalScrollLine;
