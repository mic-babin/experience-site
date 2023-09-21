import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";
import { GatsbyImage } from "gatsby-plugin-image";

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
  height: 68px;
  width: 68px;
`;

export const BgShape = styled.div`
  position: absolute;
`;

export const CircleImage = styled(GatsbyImage)`
  border-radius: 50%;
`;
