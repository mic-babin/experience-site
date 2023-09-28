import React, { useState, useEffect } from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LineWrapper, Text } from "./title.styles";
import TypewriterAnimation from "../typewriter-animation/typerwritter-animation.component";
import {
  useIsLarge,
  useIsMedium,
  useIsSmall,
  useIsXSmall,
} from "../../../utils/media-query.hook";
const Title = ({
  title,
  width,
  y,
  textClass,
  animationLoop,
  lineDelay,
  wordSpeed,
  inView,
}) => {
  const [showLine, setShowLine] = useState(false);
  const findIndex = (value, arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(value)) {
        return i; // Return the index when "apple" is found
      }
    }
    return -1; // Return -1 if "apple" is not found in the array
  };
  const isLarge = useIsLarge();
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXSmall = useIsXSmall();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setShowLine(true);
      }, lineDelay || 1200);
    }

    return () => {
      clearTimeout();
    };
  }, [inView]);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target;

        return (
          <>
            {showLine && gatsbyImageData && (
              <LineWrapper
                style={{
                  transform: `translateY(-${
                    isXSmall
                      ? "15px"
                      : isSmall
                      ? "23px"
                      : isMedium
                      ? "27px"
                      : isLarge
                      ? "32px"
                      : "35px"
                  })`,
                  width:
                    textClass == "programming"
                      ? `calc(100% - ${
                          isXSmall
                            ? "94px"
                            : isSmall
                            ? "155px"
                            : isMedium
                            ? "196px"
                            : "260px"
                        })`
                      : "auto",
                }}
                className={`${textClass} ${
                  textClass === "programming" ? "justify-content-end" : ""
                }`}
              >
                <GatsbyImage
                  image={getImage(gatsbyImageData)}
                  alt={description}
                  style={{
                    marginRight: "10px",
                    display: "inline-flex",
                    width: isXSmall
                      ? "70px"
                      : isSmall
                      ? "91px"
                      : isMedium
                      ? "150px"
                      : width + "px",
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
        if (value == "PROGRAMMATION" && isMedium) value = "PROGRAMM-ATION";
        return (
          <p>
            {
              <TypewriterAnimation
                text={value}
                index={index}
                animationLoop={animationLoop}
                wordSpeed={wordSpeed}
                inView={inView}
              />
            }
          </p>
        );
      },
    },
  };
  return <Text className={textClass}>{renderRichText(title, options)}</Text>;
};

export default Title;
