import React from "react";
import { Section } from "./about.styles";

const About = ({ data }) => {
  console.log("about", data);
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      About: Section (Title, Required, Unique) : Used to classify the database
      Title (Localize, Required, Max 50 Chars) Participants (Required)
      Exhibitors (Required) Features (List(4), Localize, Required, Max 200
      Chars)
    </Section>
  );
};

export default About;
