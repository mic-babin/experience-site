import React from "react";
import { Section, Wrapper } from "./partners.styles";
import ParallaxShapes from "./parallax-shapes.component";
import LogoSection from "./logo-section.component";
import Exhibitors from "../exhibitors/exhibitors.components";

const Partners = ({ data, exhibitorsData }) => {
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
      <div id="exposants" className="scroll-to"></div>
      <Wrapper>
        <ParallaxShapes />
        <LogoSection
          title={"Présentateur"}
          logos={partenairePresentateur}
          index={0}
        />
        <LogoSection
          title={"Destinations vedettes"}
          logos={destinationsVedettes}
          index={1}
        />
        <LogoSection
          title={"Experience Unique"}
          logos={experienceUnique}
          index={2}
        />
        {/* <LogoSection title={"Cocktail"} logos={cocktail} /> */}
        <LogoSection
          index={3}
          title={"Partenaires Createurs"}
          logos={partenairesCreateurs}
        />
        {/* <LogoSection
          title={"Partenaires De Soutien"}
          logos={partenairesDeSoutien}
        /> */}
      </Wrapper>
      {/* <Exhibitors data={exhibitorsData} /> */}
    </Section>
  );
};

export default Partners;
