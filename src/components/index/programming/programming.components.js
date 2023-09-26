import React from "react";
import {
  Section,
  ProgrammingTitle,
  Kicker,
  Wrapper,
} from "./programming.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ConferenceCard from "./conference-card/conference-card.component";
import Title from "../../common/title/title.component";
import { useInView } from "react-intersection-observer";

const Programming = ({ data }) => {
  const { tile, kicker, conferences } = data;
  const s = { background: "#E3FE96", color: "#000000" };

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section s={s}>
      <Wrapper>
        <div className="container" id="programmation">
          <ProgrammingTitle ref={inViewRef}>
            {tile && (
              <Title
                title={tile}
                width={204}
                y={35}
                textClass="programming"
                animationLoop={false}
                wordSpeed={1100}
                lineDelay={2400}
                inView={inView}
              />
            )}
          </ProgrammingTitle>
          {kicker && (
            <Kicker
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              {renderRichText(kicker)}
            </Kicker>
          )}
        </div>
        <div id="conferenciers">
          {conferences &&
            conferences.map((conference, index) => (
              <ConferenceCard
                key={conference.id}
                conference={conference}
                index={index}
              />
            ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Programming;
