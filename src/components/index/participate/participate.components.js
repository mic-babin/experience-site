import React from "react";
import { Section } from "./participate.styles";

const Participate = ({ data }) => {
  console.log("participate", data);
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      Participate : Section (Title, Required, Unique) : Used to classify the
      database Description (Localize, Required) Images (Required, 3 assets, Only
      images) Video (Required, Only one video)
    </Section>
  );
};

export default Participate;
