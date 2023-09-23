import React from "react";
import { motion } from "framer-motion";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

const FlipTextAnimation = ({ text, inView, delay }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        let text = children[children.length - 1].replace(/\n/g, " ");
        return renderTextAnimation(text, inView, delay);
      },
    },
  };

  if (typeof text === "string") {
    return renderTextAnimation(text, inView, delay);
  }
  return <>{renderRichText(text, options)}</>;
};

export default FlipTextAnimation;

const renderTextAnimation = (text, inView, delay) => {
  let count = 0;
  return (
    <>
      {text.split(" ").map((word, wordIndex) => (
        <span style={{ display: "inline-flex" }} key={wordIndex}>
          {word.split("").map((letter, letterIndex) => {
            count++;
            const motionKey = `${wordIndex}-${letterIndex}`;
            return (
              <motion.span
                key={motionKey}
                initial={{ rotateY: 0 }}
                animate={inView ? { rotateY: [0, 360] } : { rotateY: 0 }}
                transition={{
                  duration: 0.3,
                  delay: count / 17 + delay,
                }}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ visibility: "hidden" }}>.</span>
        </span>
      ))}
    </>
  );
};
