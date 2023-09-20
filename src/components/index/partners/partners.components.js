import React from "react";
import {
  Section,
  Title,
  Number,
  LogoWrapper,
  Empty,
  Shape,
  BgShape,
} from "./partners.styles";
import { Trans } from "react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import Src1 from "../../../assets/img/partner-1.svg";
import Src2 from "../../../assets/img/partner-2.svg";
import Src3 from "../../../assets/img/partner-3.svg";
import Src4 from "../../../assets/img/partner-4.svg";

const Partners = ({ data }) => {
  const { goldPartners, silverPartners, bronzePartners } = data;
  const s = { background: "white", color: "#000000" };

  return (
    <Section s={s}>
      <BgShape>
        <Parallax translateY={[-20, 20]}>
          <Shape src={Src1} alt="Forme géometrique"></Shape>
        </Parallax>
      </BgShape>
      <BgShape>
        <Parallax translateY={[-30, 30]}>
          <Shape src={Src2} alt="Forme géometrique"></Shape>
        </Parallax>
      </BgShape>
      <BgShape>
        <Parallax translateY={[10, -10]}>
          <Shape src={Src3} alt="Forme géometrique"></Shape>
        </Parallax>
      </BgShape>

      <BgShape>
        <Parallax translateY={[-20, 20]}>
          <Shape src={Src4} alt="Forme géometrique"></Shape>
        </Parallax>
      </BgShape>
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
