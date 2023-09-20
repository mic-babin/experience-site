import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding-bottom: 150px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 100px;
  line-height: 95px;
  font-family: "GroteskBold";
  max-width: 732px;
  display: inline-block;
  padding-top: 150px;
`;

export const Number = styled.div`
  padding-left: 20px;
  display: inline-block;
  font-family: "Grotesk55";
  font-size: 50%;
  transform: translateY(-35px);
  content: "+";
`;

export const LogoWrapper = styled.div`
  display: grid;
  padding-left: 150px;
  padding-top: 50px;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 15px;

  &:nth-of-type(3) {
    margin-bottom: 200px;
  }
`;

export const Empty = styled.div`
  height: 150px;
`;
export const BgShape = styled.div`
  position: absolute;

  z-index: -1;
  &:nth-of-type(1) {
    top: 200px;
    right: -30px;
  }
  &:nth-of-type(2) {
    top: 1000px;
    left: -120px;
  }
  &:nth-of-type(3) {
    top: 1800px;
    right: 150px;
  }

  &:nth-of-type(4) {
    top: 2300px;
    left: 150px;
  }
`;
export const Shape = styled.img``;
