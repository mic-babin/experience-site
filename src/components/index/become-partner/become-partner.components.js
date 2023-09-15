import React from "react";
import { Section } from "./become-partner.styles";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const BecomePartner = ({ data }) => {
  const {
    title,
    kicker,
    contactName,
    contactEmail,
    contactMessage,
    contactPhoto,
  } = data;
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      {title && <div>{renderRichText(title)}</div>}
      {kicker && <div>{renderRichText(kicker)}</div>}
      {contactName && <div>{contactName}</div>}
      {contactEmail && <div>{contactEmail}</div>}
      {contactMessage && <div>{renderRichText(contactMessage)}</div>}
      {contactPhoto && (
        <GatsbyImage image={getImage(contactPhoto)} alt="TODO" />
      )}
    </Section>
  );
};

export default BecomePartner;
