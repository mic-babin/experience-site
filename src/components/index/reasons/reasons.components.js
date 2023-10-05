import React from "react";
import { Reason, Wrapper, Shape, Section } from "./reasons.styles";
import Shape1Src from "../../../assets/img/reason-1.svg";
import Shape2Src from "../../../assets/img/reason-2.svg";
import Shape3Src from "../../../assets/img/reason-3.svg";
import "./float.css";
import { useIsLarge, useIsSmall } from "../../../utils/media-query.hook";

const Reasons = ({ data }) => {
  const isLarge = useIsLarge();
  const isSmall = useIsSmall();
  const { reasons } = data;
  const s = {
    background: "#35B999",
    color: "#000000",
    minHeight: "100vh",
    fullScreen: true,
  };
  const s2 = {
    background: "#EBE50D",
    color: "#000000",
    width: isLarge ? "100%" : "90%",
    minHeight: isSmall ? "calc(66.6vh + 34px)" : "70.6vh",
  };
  const s3 = {
    background: "#EC1A8D",
    color: "#000000",
    width: isLarge ? "100%" : "80%",
    minHeight: isSmall ? "calc(33.3vh + 68px)" : "100px",
  };
  return (
    <>
      <Section s={s}>
        <Wrapper>
          <Shape src={Shape1Src} alt="shape" className="float first" />
          <Reason>{reasons[0]}</Reason>
        </Wrapper>
      </Section>
      <Section s={s2}>
        <Wrapper>
          <Shape src={Shape2Src} alt="shape" className="float second" />
          <Reason>{reasons[1]}</Reason>
        </Wrapper>
      </Section>
      <Section s={s3}>
        <Wrapper>
          <Shape src={Shape3Src} alt="shape" className="float third" />
          <Reason className="third">{reasons[2]}</Reason>
        </Wrapper>
      </Section>
    </>
  );
};

export default Reasons;
