import React from "react";
import {
  Section,
  Header,
  Title,
  NumbersWrapper,
  NumberWraper,
  NumberTitle,
  Features,
  Index,
  FeatureWrapper,
  Feature,
  Empty,
  Smiley,
} from "./about.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Trans } from "gatsby-plugin-react-i18next";
import SmileySrc from "../../../assets/img/smiley.svg";
import NumberCounter from "./number-counter/number-counter.component";
import { useInView } from "react-intersection-observer";

const About = ({ data }) => {
  const { title, features, participants, exhibitors } = data;
  const s = { background: "#000000", color: "#e8e8e6" };

  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Trigger the observer only once
    threshold: 1, // Trigger when 50% of the component is in view
  });

  return (
    <Section s={s}>
      <div className="container">
        <Header>
          {title && <Title>{renderRichText(title)}</Title>}
          <NumbersWrapper ref={inViewRef}>
            <NumberWraper>
              {participants && (
                <NumberCounter
                  max={participants}
                  inView={inView}
                  color={"#EBE50D"}
                />
              )}
              <NumberTitle>
                <Trans>participants</Trans>
              </NumberTitle>
            </NumberWraper>
            <NumberWraper>
              {exhibitors && (
                <NumberCounter
                  max={exhibitors}
                  inView={inView}
                  color={"#EC1A8D"}
                />
              )}
              <NumberTitle>
                <Trans>exhibitors</Trans>
              </NumberTitle>
            </NumberWraper>
          </NumbersWrapper>
        </Header>
        <FeatureWrapper>
          <Features>
            {features &&
              features.map((feature, index) => (
                <FeatureWrapper key={index}>
                  <Index>0{index + 1}</Index>
                  <Feature className={index == 3 && "no-border"}>
                    {" "}
                    {feature}
                  </Feature>
                </FeatureWrapper>
              ))}
          </Features>
        </FeatureWrapper>
      </div>
      <Smiley src={SmileySrc} alt="smiley" />
      <Empty>&nbsp;</Empty>
    </Section>
  );
};

export default About;
