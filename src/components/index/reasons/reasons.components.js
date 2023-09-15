import React from "react";
import { Section } from "./reasons.styles";

const Reasons = ({ data }) => {
  console.log("reasons", data);
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      Reasons: Section (Title, Required, Unique) : Used to classify the database
      Reasons (List(3), Localize, Required, Max 100 Chars)
    </Section>
  );
};

export default Reasons;
