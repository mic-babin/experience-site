import React from "react";
import { Section, ProgrammingTitle, Kicker, Empty } from "./programming.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ConferenceCard from "./conference-card/conference-card.component";
import Title from "../../common/title/title.component";

const Programming = ({ data }) => {
  const { tile, kicker, conferences } = data;
  const s = { background: "#E3FE96", color: "#000000" };

  return (
    <Section s={s}>
      <div className="container" id="programmation">
        <ProgrammingTitle>
          {tile && (
            <Title title={tile} width={204} y={35} textClass="programming" />
          )}
        </ProgrammingTitle>
        {kicker && <Kicker>{renderRichText(kicker)}</Kicker>}
      </div>
      <div id="conferenciers">
        {conferences &&
          conferences.map((conference) => (
            <ConferenceCard key={conference.id} conference={conference} />
          ))}
      </div>
      <Empty>&nbsp;</Empty>
    </Section>
  );
};

export default Programming;
