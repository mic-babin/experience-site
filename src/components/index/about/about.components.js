import React from "react";
import { Section } from "./about.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Trans } from "gatsby-plugin-react-i18next";

const About = ({ data }) => {
  const { title, features, participants, exhibitors } = data;
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      {title && <div>{renderRichText(title)}</div>}
      <Trans>participants</Trans>
      {participants && <div>{participants}</div>}
      <Trans>exhibitors</Trans>
      {exhibitors && <div>{exhibitors}</div>}
      {features &&
        features.map((feauture, index) => <div key={index}>{feauture}</div>)}
    </Section>
  );
};

export default About;
