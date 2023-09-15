import React from "react";
import { Section } from "./partners.styles";

const Partners = ({ data }) => {
  console.log("partners", data);
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      Partners: Section (Title, Required, Unique) : Used to classify the
      database Gold Partners (Required, Only images) Silver Partners (Required,
      Only images) Bronze Partners (Required, Only images)
    </Section>
  );
};

export default Partners;
