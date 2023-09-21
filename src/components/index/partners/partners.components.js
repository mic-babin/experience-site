import React from "react";
import {
  Section,
  Title,
  Number,
  LogosWrapper,
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
import Src5 from "../../../assets/img/partner-5.svg";

const Partners = ({ data }) => {
  const {
    partenairePresentateur,
    destinationsVedettes,
    experienceUnique,
    cocktail,
    partenairesCreateurs,
    partenairesDeSoutien,
  } = data;
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
      <BgShape>
        <Parallax translateY={[-10, 10]}>
          <Shape src={Src5} alt="Forme géometrique"></Shape>
        </Parallax>
      </BgShape>
      <div className="container">
        <Title className="first">
          <span>Partenaire Présentateur</span>
          {partenairePresentateur && (
            <Number>{partenairePresentateur.length}</Number>
          )}
        </Title>

        <div className="d-flex justify-content-end">
          <LogosWrapper className="one-per-row">
            {partenairePresentateur &&
              partenairePresentateur.map((image) => (
                <LogoWrapper className="lulu">
                  <GatsbyImage
                    key={image.id}
                    image={getImage(image)}
                    alt="TODO"
                  />
                </LogoWrapper>
              ))}
          </LogosWrapper>
        </div>
      </div>
      <div className="container">
        <Title className="second">
          <span>Destinations vedettes</span>
          {destinationsVedettes && (
            <Number>{destinationsVedettes.length}</Number>
          )}
        </Title>

        <div className="d-flex justify-content-end">
          <LogosWrapper className="three-per-row">
            {destinationsVedettes &&
              destinationsVedettes.map((image) => (
                <LogoWrapper>
                  <GatsbyImage
                    key={image.id}
                    image={getImage(image)}
                    alt="TODO"
                  />
                </LogoWrapper>
              ))}
          </LogosWrapper>
        </div>
      </div>

      <div className="container">
        <Title>
          Experience Unique
          {experienceUnique && <Number>{experienceUnique.length}</Number>}
        </Title>
        <div className="d-flex justify-content-end">
          <LogosWrapper>
            {experienceUnique &&
              experienceUnique.map((image) => (
                <LogoWrapper>
                  <GatsbyImage
                    key={image.id}
                    image={getImage(image)}
                    alt="TODO"
                  />
                </LogoWrapper>
              ))}
          </LogosWrapper>
        </div>
      </div>
      <div className="container">
        <Title>
          Cocktail
          {cocktail && <Number>{cocktail.length}</Number>}
        </Title>

        <div className="d-flex justify-content-end">
          <LogosWrapper className="one-per-row">
            {cocktail &&
              cocktail.map((image) => (
                <LogoWrapper>
                  <GatsbyImage
                    key={image.id}
                    image={getImage(image)}
                    alt="TODO"
                  />
                </LogoWrapper>
              ))}
          </LogosWrapper>
        </div>
      </div>
      <div className="container">
        <Title>
          Partenaires Createurs
          {partenairesCreateurs && (
            <Number>{partenairesCreateurs.length}</Number>
          )}
        </Title>
        <div className="d-flex justify-content-end">
          <LogosWrapper className="three-per-row">
            {partenairesCreateurs &&
              partenairesCreateurs.map((image) => (
                <LogoWrapper>
                  <GatsbyImage
                    key={image.id}
                    image={getImage(image)}
                    alt="TODO"
                  />
                </LogoWrapper>
              ))}
          </LogosWrapper>
        </div>
      </div>
      <div className="container">
        <Title>
          Partenaires <br />
          De Soutien
          {partenairesDeSoutien && (
            <Number>{partenairesDeSoutien.length}</Number>
          )}
        </Title>

        <div className="d-flex justify-content-end">
          <LogosWrapper className="three-per-row">
            {partenairesDeSoutien &&
              partenairesDeSoutien.map((image) => (
                <LogoWrapper>
                  <GatsbyImage
                    key={image.id}
                    image={getImage(image)}
                    alt="TODO"
                  />
                </LogoWrapper>
              ))}
          </LogosWrapper>
        </div>
      </div>

      <Empty>&nbsp;</Empty>
    </Section>
  );
};

export default Partners;
