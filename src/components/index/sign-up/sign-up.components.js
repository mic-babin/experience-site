import React from "react";
import { Section } from "./sign-up.styles";

const SignUp = ({ data }) => {
  console.log("Sign Up", data);
  const s = { background: "#000000", color: "#e8e8e6" };

  return (
    <Section s={s}>
      Sign up: Section (Title, Required, Unique) : Used to classify the database
      Title (Localize, Required, Max 50 Chars) Kicker (Localize, Required)
      Tickets (Many References (see Ticket), Required)
    </Section>
  );
};

export default SignUp;
