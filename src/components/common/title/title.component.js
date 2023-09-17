import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LineWrapper, Text } from "./title.styles";

const Title = ({ title, width, y, textClass }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        const { gatsbyImageData, description } = node.data.target;
        return (
          <LineWrapper style={{ transform: `translateY(-${y}px)` }}>
            <GatsbyImage
              image={getImage(gatsbyImageData)}
              alt={description}
              style={{
                display: "inline-block",
                width: width,
              }}
            />
          </LineWrapper>
        );
      },
    },
  };
  return <Text className={textClass}>{renderRichText(title, options)}</Text>;
};

export default Title;
