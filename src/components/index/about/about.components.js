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
    triggerOnce: true,
    threshold: 1,
  });

  const [featuresWrapper, featuresWrapperInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Section s={s}>
      <div className="container" id="a-propos">
        <Header>
          {title && (
            <Title
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {renderRichText(title)}
            </Title>
          )}
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
        <FeatureWrapper ref={featuresWrapper}>
          <Features>
            {features &&
              features.map((feature, index) => (
                <FeatureWrapper
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresWrapperInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: featuresWrapperInView ? index * 0.2 + 1 : 0,
                  }}
                >
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
      {inView && (
        <Smiley
          initial={{ rotate: 0 }}
          animate={inView ? { rotate: [0, 13, -13, 0] } : { rotate: 0 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 10,
          }}
          src={SmileySrc}
          alt="smiley"
        />
      )}
      <Empty>&nbsp;</Empty>
    </Section>
  );
};

export default About;
