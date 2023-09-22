import React from "react";
import { motion } from "framer-motion";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";

const WaveTextAnimation = ({ text, inView }) => {
  console.log(text);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        let text = children[children.length - 1].replace(/\n/g, " ");
        return renderTextAnimation(text, inView);
      },
    },
  };

  if (typeof text === "string") {
    return renderTextAnimation(text, inView);
  }
  return <>{renderRichText(text, options)}</>;
};

export default WaveTextAnimation;

const renderTextAnimation = (text, inView) => {
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
                initial={{ y: 0 }}
                animate={inView ? { y: [0, 1, -12, -15, 1, 0] } : { y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: count / 17,
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
