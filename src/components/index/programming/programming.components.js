import React from "react";
import { Section } from "./programming.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ConferenceCard from "./conference-card/conference-card.component";

const Programming = ({ data }) => {
  const { tile, kicker, conferences } = data;
  const s = { background: "#e8e8e6", color: "#000000" };

  return (
    <Section s={s}>
      {tile && <div>{renderRichText(tile)}</div>}
      {kicker && <div>{renderRichText(kicker)}</div>}
      {conferences &&
        conferences.map((conference) => (
          <ConferenceCard key={conference.id} conference={conference} />
        ))}
    </Section>
  );
};

export default Programming;
