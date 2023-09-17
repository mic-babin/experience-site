import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const SiteTitle = styled(motion.h1)`
  font-size: 100px;
  line-height: 118px;
  font-family: "GroteskBold";
  padding-top: 165px;
`;

export const Shape = styled(motion.img)`
  position: absolute;
  top: 0;
`;
