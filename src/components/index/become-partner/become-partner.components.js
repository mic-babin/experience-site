import React from "react";
import { Section } from "./become-partner.styles";

const BecomePartner = ({ data }) => {
  console.log("become partner", data);
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      Section (Title, Required, Unique) : Used to classify the database Title
      (Localize, Required, Max 50 Chars) Kicker (Localize, Required) Contact
      Name (Required) Contact Photo (Required, Only one Image) Contact Message
      (Localize, Required) Contact Email (Required, Email)
    </Section>
  );
};

export default BecomePartner;
