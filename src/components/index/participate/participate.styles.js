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
    padding: 75px 20px;
  }
`;

export const Title = styled(motion.p)`
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  max-width: 905px;
  color: white;
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

export const Circle = styled.div`
  background-color: #ec1a8d;
  border-radius: 50%;
  height: 68px;
  width: 68px;

  @media only screen and (max-width: 767px) {
    height: 42px;
    width: 42px;
  }
  @media only screen and (max-width: 575px) {
    height: 28px;
    width: 28px;
  }
`;

export const BgShape = styled(motion.div)`
  position: absolute;
`;

export const CircleImage = styled(GatsbyImage)`
  border-radius: 50%;
`;
