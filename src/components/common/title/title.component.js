import React, { useState, useEffect } from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LineWrapper, Text } from "./title.styles";
import TypewriterAnimation from "../typewriter-animation/typerwritter-animation.component";

const Title = ({ title, width, y, textClass }) => {
  const [showLine, setShowLine] = useState(false);
  const findIndex = (value, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(value)) {
        return i; // Return the index when "apple" is found
      }
    }
    return -1; // Return -1 if "apple" is not found in the array
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 1200);

    return () => {
      clearTimeout();
    };
  }, []);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target;

        return (
          <>
            {showLine && gatsbyImageData && (
              <LineWrapper
                style={{ transform: `translateY(-${y}px)` }}
                className={textClass}
              >
                <GatsbyImage
                  image={getImage(gatsbyImageData)}
                  alt={description}
                  style={{
                    display: "inline-block",
                    width: width,
                  }}
                />
              </LineWrapper>
            )}
          </>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        let arr = title.raw.split("value");
        let value = children[children.length - 1].replace(/\n/g, "");
        let index = findIndex(value, arr);

        return <p>{<TypewriterAnimation text={value} index={index} />}</p>;
      },
    },
  };
  return <Text className={textClass}>{renderRichText(title, options)}</Text>;
};

export default Title;
