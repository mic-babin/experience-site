import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const Title = styled(motion.p)`
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  max-width: 905px;
  color: white;
  padding-top: 150px;
`;

export const Circle = styled.div`
  background-color: #ec1a8d;
  border-radius: 50%;
  position: absolute;
  height: 68px;
  width: 68px;
`;
