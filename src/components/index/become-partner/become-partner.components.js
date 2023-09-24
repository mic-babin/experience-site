import React from "react";
import {
  Section,
  Kicker,
  Photo,
  Name,
  Text,
  Email,
  BecomePartnerTitle,
  ContactWrapper,
  ContactContent,
  Wrapper,
} from "./become-partner.styles";
import { getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Title from "../../common/title/title.component";
import { useInView } from "react-intersection-observer";
import FlipTextAnimation from "../../common/flip-text-animation/flip-text-animation.component";
import { motion } from "framer-motion";

const BecomePartner = ({ data }) => {
  const {
    title,
    kicker,
    contactName,
    contactEmail,
    contactMessage,
    contactPhoto,
  } = data;
  const s = { background: "#EBE50D", color: "#000000" };

  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [kickerInViewRef, kickerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Section s={s}>
      <Wrapper className="container" id="devenir-exposant">
        <BecomePartnerTitle ref={inViewRef}>
          <Title
            title={title}
            width={204}
            y={35}
            textClass="become-partner"
            animationLoop={false}
            wordSpeed={500}
            lineDelay={1400}
            inView={inView}
          />
        </BecomePartnerTitle>

        {kicker && (
          <div ref={kickerInViewRef}>
            <Kicker
              initial={{ x: -200, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 2,
              }}
            >
              <FlipTextAnimation text={kicker} inView={inView} delay={2} />
            </Kicker>
          </div>
        )}

        <ContactWrapper ref={containerRef}>
          <ContactContent>
            {contactPhoto && (
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={
                  containerInView
                    ? { x: 0, opacity: 1 }
                    : { x: 200, opacity: 0 }
                }
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                }}
              >
                <Photo image={getImage(contactPhoto)} alt="TODO" />
              </motion.div>
            )}
            {contactName && (
              <Name
                initial={{ x: 200, opacity: 0 }}
                animate={
                  containerInView
                    ? { x: 0, opacity: 1 }
                    : { x: 200, opacity: 0 }
                }
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                }}
              >
                {contactName}
              </Name>
            )}
            {contactMessage && (
              <Text
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7,
                }}
              >
                {renderRichText(contactMessage)}
              </Text>
            )}
            {contactEmail && (
              <Email
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                }}
                href={`mailTo:${contactEmail}`}
              >
                {contactEmail}
              </Email>
            )}
          </ContactContent>
        </ContactWrapper>
      </Wrapper>
    </Section>
  );
};

export default BecomePartner;
