import React from "react";
import { Section } from "./call-to-action.styles";

const CallToAction = ({ data }) => {
  console.log("CTA", data);
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      Section (Title, Required, Unique) : Used to classify the database Title
      (Localize, Required, Max 50 Chars) Kicker (Localize, Required) Button
      (Localize, Required, Max 20 Chars)
    </Section>
  );
};

export default CallToAction;
