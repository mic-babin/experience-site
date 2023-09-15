import React from "react";
import { Section } from "./hero.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
const Hero = ({ data }) => {
  const { title, shapeAndText } = data;
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      {title && <div>{renderRichText(title)}</div>}
      {shapeAndText &&
        shapeAndText.map((text, index) => <div key={index}>{text}</div>)}
    </Section>
  );
};

export default Hero;
