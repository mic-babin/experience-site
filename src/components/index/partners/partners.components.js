import React from "react";
import { Section } from "./partners.styles";
import { Trans } from "react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Partners = ({ data }) => {
  const { goldPartners, silverPartners, bronzePartners } = data;
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      <div>
        <Trans>goldPartners</Trans>
        {goldPartners && <div>{goldPartners.length}</div>}
        {goldPartners &&
          goldPartners.map((image) => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              alt="TODO"
              style={{ height: "100px", width: "100px" }}
            />
          ))}
      </div>
      <div>
        <Trans>silverPartners</Trans>
        {silverPartners && <div>{silverPartners.length}</div>}
        {silverPartners &&
          silverPartners.map((image) => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              alt="TODO"
              style={{ height: "100px", width: "100px" }}
            />
          ))}
      </div>

      <div>
        <Trans>bronzePartners</Trans>
        {bronzePartners && <div>{bronzePartners.length}</div>}
        {bronzePartners &&
          bronzePartners.map((image) => (
            <GatsbyImage
              key={image.id}
              image={getImage(image)}
              alt="TODO"
              style={{ height: "100px", width: "100px" }}
            />
          ))}
      </div>
    </Section>
  );
};

export default Partners;
