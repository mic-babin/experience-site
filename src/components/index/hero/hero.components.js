import React from "react";
import { Section } from "./hero.styles";

const Hero = ({ data }) => {
  console.log("Hero", data);
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      Hero : Section (Title, Required, Unique) : Used to classify the database
      Title (Localize, Required, Max 50 Chars) Shape and Text (List, Localize,
      Required, Max 50 Chars)
    </Section>
  );
};

export default Hero;
