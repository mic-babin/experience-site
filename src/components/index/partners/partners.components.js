import React from "react";
import { Section, Title, Number, LogoWrapper, Empty } from "./partners.styles";
import { Trans } from "react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Partners = ({ data }) => {
  const { goldPartners, silverPartners, bronzePartners } = data;
  const s = { background: "white", color: "#000000" };

  return (
    <Section s={s}>
      <div className="container">
        <Title>
          <Trans>goldPartners</Trans>
          {goldPartners && <Number>{goldPartners.length}</Number>}
        </Title>

        <LogoWrapper>
          {goldPartners &&
            goldPartners.map((image) => (
              <GatsbyImage key={image.id} image={getImage(image)} alt="TODO" />
            ))}
        </LogoWrapper>
      </div>
      <div className="container">
        <Title>
          <Trans>silverPartners</Trans>
          {silverPartners && <Number>{silverPartners.length}</Number>}
        </Title>

        <LogoWrapper>
          {silverPartners &&
            silverPartners.map((image) => (
              <GatsbyImage key={image.id} image={getImage(image)} alt="TODO" />
            ))}
        </LogoWrapper>
      </div>

      <div className="container">
        <Title>
          <Trans>bronzePartners</Trans>
          {bronzePartners && <Number>{bronzePartners.length}</Number>}
        </Title>

        <LogoWrapper>
          {bronzePartners &&
            bronzePartners.map((image) => (
              <GatsbyImage key={image.id} image={getImage(image)} alt="TODO" />
            ))}
        </LogoWrapper>
      </div>
      <Empty>&nbsp;</Empty>
    </Section>
  );
};

export default Partners;
