import React from "react";
import { Section } from "./reasons.styles";

const Reasons = ({ data }) => {
  const { reasons } = data;
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      {reasons &&
        reasons.map((reason, index) => <div key={index}>{reason}</div>)}
    </Section>
  );
};

export default Reasons;
