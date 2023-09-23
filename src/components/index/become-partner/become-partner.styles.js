import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";
import { GatsbyImage } from "gatsby-plugin-image";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const BecomePartnerTitle = styled(motion.h2)`
  font-size: 100px;
  line-height: 95px;
  font-family: "GroteskBold";
  padding-top: 165px;
`;

export const Kicker = styled(motion.div)`
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  margin-left: 150px;
  margin-top: 40px;
  max-width: 555px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: end;
  -webkit-justify-content: end;
`;

export const ContactContent = styled.div`
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
`;

export const Photo = styled(GatsbyImage)`
  margin-left: 120px;
  margin-bottom: 40px;
`;

export const Text = styled(motion.div)`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

export const Email = styled(motion.a)`
  display: block;
  text-transform: uppercase;
  font-family: "GroteskBold";
  font-size: 24px;
  line-height: 28px;
  text-decoration: none;
  color: black;
`;

export const Empty = styled.div`
  height: 150px;
`;

export const Shape = styled(motion.img)`
  position: absolute;
  top: 0;
`;
