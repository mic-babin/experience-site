import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const Wrapper = styled.div``;

export const W = styled.div`
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

export const SignUpTitle = styled(motion.h2)`
  font-size: 100px;
  line-height: 95px;
  font-family: "GroteskBold";
  max-width: 500px;
  min-height: 221px;
  @media only screen and (max-width: 1599px) {
    font-size: 97px;
    line-height: 92px;
  }

  @media only screen and (max-width: 1249px) {
    font-size: 76px;
    line-height: 72px;
    max-width: 450px;
    min-height: 165px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 57px;
    max-width: 350px;
    min-height: 130px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 36px;
    line-height: 34px;
    max-width: 200px;
    min-height: 80px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 30px;
    line-height: 29px;
    max-width: 150px;
    min-height: 60px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 991px) {
    display: block;
  }
`;

export const Col = styled.div`
  width: 100%;
`;

export const Kicker = styled(motion.div)`
  padding-top: 80px;
  margin-left: 120px;
  max-width: 438px;
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;

  @media only screen and (max-width: 991px) {
    margin-left: 110px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
    padding-top: 40px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media only screen and (max-width: 575px) {
    margin-left: 10vw;
  }
`;

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: -1;
`;

export const Circle = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  background-color: black;
  border-radius: 50%;
`;

export const Empty = styled.div`
  @media only screen and (max-width: 767px) {
    height: 100px;
  }
`;
