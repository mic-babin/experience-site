import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const Wrapper = styled.div`
  min-height: calc(100vh);
  min-height: calc(100svh);
  height: 100%;

  @media only screen and (max-width: 767px) {
    min-height: calc(100vh);
    height: calc(100%);
  }
`;

export const SiteTitle = styled(motion.h1)`
  font-size: 100px;
  line-height: 118px;
  font-family: "GroteskBold";
  padding-top: 165px;

  @media only screen and (max-width: 1249px) {
    font-size: 76px;
    line-height: 72px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 57px;
    padding-top: 52px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 36px;
    line-height: 38px;
    padding-top: 22px;
  }
`;

export const Shape = styled(motion.img)`
  position: absolute;
  top: 0;
`;
