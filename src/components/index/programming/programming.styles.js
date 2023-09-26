import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)``;

export const Wrapper = styled.div`
  padding: 150px 0;

  @media only screen and (max-width: 1249px) {
    padding: 120px 0;
  }

  @media only screen and (max-width: 991px) {
    padding: 100px 0;
  }
  @media only screen and (max-width: 767px) {
    padding: 75px 0;
  }
  @media only screen and (max-width: 575px) {
    padding: 75px 5vw;
  }
`;

export const ProgrammingTitle = styled.h2`
  font-size: 100px;
  line-height: 95px;
  font-family: "GroteskBold";

  @media only screen and (max-width: 1599px) {
    font-size: 97px;
    line-height: 92px;
  }

  @media only screen and (max-width: 1249px) {
    font-size: 76px;
    line-height: 72px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 57px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 36px;
    line-height: 34px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 30px;
    line-height: 29px;
  }
`;

export const Kicker = styled(motion.div)`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  margin-left: 120px;
  max-width: 438px;
  padding-bottom: 150px;

  @media only screen and (max-width: 1249px) {
    padding-bottom: 120px;
  }

  @media only screen and (max-width: 991px) {
    padding-bottom: 100px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
    padding-bottom: 75px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
`;
