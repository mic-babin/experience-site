import React from "react";
import { Wrapper, Logo } from "./header.styles";
import LogoSrc from "../../../assets/img/logo-experience.png";
import Languages from "../languages/languages.component";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={LogoSrc} alt="Salon Expérience" />
      <Languages />
    </Wrapper>
  );
};

export default Header;
