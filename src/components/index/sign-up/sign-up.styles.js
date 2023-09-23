import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const SignUpTitle = styled(motion.h2)`
  font-size: 100px;
  line-height: 95px;
  font-family: "GroteskBold";
  padding-top: 150px;
  max-width: 590px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Col = styled.div`
  &:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;

export const Kicker = styled(motion.div)`
  padding-top: 80px;
  margin-left: 120px;
  max-width: 438px;
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
`;

export const Empty = styled.div`
  height: 150px;
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
  width: 100vw;
  background-color: black;
  border-radius: 50%;
`;
