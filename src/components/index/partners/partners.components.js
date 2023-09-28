import React from "react";
import { Section, Wrapper } from "./partners.styles";
import { generateParallaxShapes } from "./parallax-shapes.component";
import LogoSection from "./logo-section.component";

const Partners = ({ data }) => {
  const s = { background: "white", color: "#000000" };
  const {
    partenairePresentateur,
    destinationsVedettes,
    experienceUnique,
    // cocktail,
    partenairesCreateurs,
    // partenairesDeSoutien,
  } = data;

  return (
    <Section s={s}>
      <div id="exposants"></div>
      <Wrapper>
        {generateParallaxShapes()}
        <LogoSection
          title={"Partenaire Présentateur"}
          logos={partenairePresentateur}
        />
        <LogoSection
          title={"Destinations vedettes"}
          logos={destinationsVedettes}
        />
        <LogoSection title={"Experience Unique"} logos={experienceUnique} />
        {/* <LogoSection title={"Cocktail"} logos={cocktail} /> */}
        <LogoSection
          title={"Partenaires Createurs"}
          logos={partenairesCreateurs}
        />
        {/* <LogoSection
          title={"Partenaires De Soutien"}
          logos={partenairesDeSoutien}
        /> */}
      </Wrapper>
    </Section>
  );
};

export default Partners;
