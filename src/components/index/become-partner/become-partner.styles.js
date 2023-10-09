import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";
import { GatsbyImage } from "gatsby-plugin-image";

export const Section = styled(SectionLayout)`
  position: relative;
`;

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
    padding: 75px 30px;
  }
`;
export const BecomePartnerTitle = styled(motion.h2)`
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
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  margin-left: 150px;
  margin-top: 40px;
  max-width: 555px;

  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
    margin-left: 105px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
    margin-left: 85px;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  @media only screen and (max-width: 1249px) {
    padding-top: 30px;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 75px;
  }
`;

export const ContactContent = styled.div`
  margin-left: auto;
  max-width: 672px;
  position: relative;
`;

export const Name = styled(motion.div)`
  position: absolute;
  top: 380px;
  left: 0;
  text-transform: uppercase;
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  max-width: 300px;

  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
    max-width: 200px;
    top: 55%;
  }
`;

export const Photo = styled(GatsbyImage)`
  margin-left: 120px;
  margin-bottom: 40px;
  @media only screen and (max-width: 767px) {
    margin-left: 0px;
  }
`;

export const Text = styled(motion.div)`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  border-bottom: 2px solid black;
  margin-bottom: 10px;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Email = styled(motion.a)`
  display: block;
  text-transform: uppercase;
  font-family: "GroteskBold";
  font-size: 24px;
  line-height: 28px;
  text-decoration: none;
  color: black;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const Shape = styled(motion.img)`
  position: absolute;
  top: 0;
`;

export const Empty = styled.div`
  @media only screen and (max-width: 991px) {
    height: 200px;
  }
  @media only screen and (max-width: 767px) {
    height: 150px;
  }
`;
