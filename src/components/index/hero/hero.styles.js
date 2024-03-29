import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const Wrapper = styled.div`
  min-height: calc(100vh);

  @media only screen and (max-width: 767px) {
    height: 100vh; /* old browsers */
    height: 100dvh; /* new browsers */

    min-height: calc(100vh);
    min-height: calc(100dvh);
    overflow: hidden;
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
  @media only screen and (max-width: 991px) {
    font-size: 60px;
    line-height: 57px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 50px;
    line-height: 48px;
    padding-top: 155px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 10.61vw;
    line-height: 38px;
    padding-top: 125px;
  }
`;

export const Shape = styled(motion.img)`
  position: absolute;
  top: 0;
`;
