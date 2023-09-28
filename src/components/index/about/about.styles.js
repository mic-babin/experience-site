import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

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
    padding: 75px 10vw;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  padding-bottom: 150px;
  @media only screen and (max-width: 991px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 575px) {
    padding-bottom: 50px;
  }
`;

export const Title = styled(motion.div)`
  max-width: 672px;
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  @media only screen and (max-width: 1599px) {
    font-size: 97px;
    line-height: 92px;
    max-width: 650px;
  }

  @media only screen and (max-width: 1249px) {
    font-size: 76px;
    line-height: 72px;
    max-width: 600px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 57px;
    max-width: 400px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 40px;
    line-height: 38px;
    max-width: 300px;
  }
`;

export const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  flex-direction: column;
  align-items: end;
  -webkit-align-items: end;

  @media only screen and (max-width: 991px) {
    margin-top: 100px;
  }

  @media only screen and (max-width: 767px) {
    margin-top: 60px;
  }
`;

export const NumberWraper = styled.div`
  display: flex;
  align-items: end;
  -webkit-align-items: end;
  flex-direction: column;
`;

export const NumberTitle = styled.div`
  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 7px;
`;
export const FeaturesWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Features = styled.div`
  max-width: 730px;
  margin-left: auto;
`;

export const FeatureWrapper = styled(motion.div)`
  display: flex;
`;

export const Index = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding-right: 30px;
  font-family: "Grotesk55";

  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 12px;
    line-height: 13px;
  }
`;
export const Feature = styled.div`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid white;
  flex-grow: 1;
  &.no-border {
    border-bottom: none;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Smiley = styled(motion.img)`
  position: absolute;
  top: 350px;
  z-index: -1;

  @media only screen and (max-width: 991px) {
    top: 200px;
    max-width: 75vw;
  }
  @media only screen and (max-width: 575px) {
    top: 100px;
  }
`;
