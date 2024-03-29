import React, { useRef, useEffect, useState } from "react";
import {
  Section,
  Header,
  SectionTitle,
  NumbersWrapper,
  NumberWraper,
  NumberTitle,
  Features,
  Index,
  FeatureWrapper,
  Feature,
  Wrapper,
  Smiley,
  Empty,
} from "./about.styles";
import Title from "../../common/title/title.component";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Trans } from "gatsby-plugin-react-i18next";
import SmileySrc from "../../../assets/img/smiley.svg";
import NumberCounter from "./number-counter/number-counter.component";
import { useInView } from "react-intersection-observer";
import { useScroll } from "framer-motion";

const About = ({ data }) => {
  const { title, features, participants, exhibitors } = data;
  const s = { background: "#000000", color: "#e8e8e6" };
  const [rotation, setRotation] = useState(0);

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [featuresWrapper, featuresWrapperInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    offset: ["-1 end", "1 end"],
  });

  const rotateSmiley = (progress) => {
    let newRotation;
    const afterDecimal = progress.toString().split(".")[1]
      ? Number(progress.toString().split(".")[1][0])
      : 9;
    const isEven = afterDecimal % 2 === 0;
    if (isEven) {
      newRotation = 13 - (progress - afterDecimal / 10) * 260 + 5;
    } else {
      newRotation = (progress - afterDecimal / 10) * 260 - 8;
    }
    setRotation(newRotation);
  };

  useEffect(() => {
    scrollYProgress.onChange(rotateSmiley);

    return () => {
      scrollYProgress.onChange(null);
    };
  }, [scrollYProgress]);

  return (
    <Section s={s}>
      <div className="scroll-to" id="a-propos"></div>
      <Wrapper className="container">
        <Header>
          {title && (
            <SectionTitle>
              <Title
                title={title}
                width={172}
                y={35}
                textClass="about-title"
                inView={inView}
                animationLoop={true}
                wordSpeed={400}
                lineDelay={1000}
              />
            </SectionTitle>
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
                  <Feature className={index == 4 && "no-border"}>
                    {" "}
                    {feature}
                  </Feature>
                </FeatureWrapper>
              ))}
          </Features>
        </FeatureWrapper>
      </Wrapper>
      {inView && (
        <Smiley
          style={{ transform: `rotate(${rotation}deg)` }}
          src={SmileySrc}
          alt="smiley"
        />
      )}
      <Empty></Empty>
    </Section>
  );
};

export default About;
