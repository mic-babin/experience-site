import React from "react";
import { Section } from "./programming.styles";

const Programming = ({ data }) => {
  console.log("programming", data);
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      Programming Section (Title, Required, Unique) : Used to classify the
      database Title (Localize, Required, Max 50 Chars) Kicker (Localize,
      Required) Conferences (Many References (see Conference), Required)
    </Section>
  );
};

export default Programming;
