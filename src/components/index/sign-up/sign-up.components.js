import React from "react";
import { Section } from "./sign-up.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import TicketCard from "./ticket-card.component";

const SignUp = ({ data }) => {
  const { title, kicker, tickets } = data;
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      {title && <div>{renderRichText(title)}</div>}
      {kicker && <div>{renderRichText(kicker)}</div>}
      {tickets &&
        tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}
    </Section>
  );
};

export default SignUp;
