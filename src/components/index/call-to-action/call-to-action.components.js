import React from "react";
import { Section } from "./call-to-action.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const CallToAction = ({ data }) => {
  const { title, kicker, button } = data;
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      {title && <div>{renderRichText(title)}</div>}
      {kicker && <div>{renderRichText(kicker)}</div>}
      {button && <div>{renderRichText(button)}</div>}
    </Section>
  );
};

export default CallToAction;
