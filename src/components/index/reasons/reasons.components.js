import React from "react";
import { Section } from "./reasons.styles";
import { Reason, Wrapper } from "./reasons.styles";

const Reasons = ({ data }) => {
  const { reasons } = data;
  const s = { background: "#35B999", color: "#000000" };
  const s2 = {
    background: "#EBE50D",
    color: "#000000",
    width: "90%",
    minHeight: "100px",
  };
  const s3 = {
    background: "#EC1A8D",
    color: "#000000",
    width: "80%",
    minHeight: "100px",
  };
  return (
    <Section s={s}>
      <Wrapper>
        <Reason>{reasons[0]}</Reason>
      </Wrapper>
      <Section s={s2}>
        <Wrapper>
          <Reason>{reasons[1]}</Reason>
        </Wrapper>
        <Section s={s3}>
          <Wrapper>
            <Reason className="third">{reasons[2]}</Reason>
          </Wrapper>
        </Section>
      </Section>
    </Section>
  );
};

export default Reasons;
