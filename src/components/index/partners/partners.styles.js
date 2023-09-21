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
  max-width: 1023px;
  display: inline-block;
  padding-top: 100px;
  &.first {
    padding-top: 150px;
  }
  &.second {
    padding-top: 0;
  }
`;

export const Number = styled.div`
  padding-left: 20px;
  display: inline-block;
  font-family: "Grotesk55";
  font-size: 50%;
  transform: translateY(-35px);
  content: "+";
`;

export const LogosWrapper = styled.div`
  display: grid;
  padding-left: 150px;
  padding-top: 50px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  &.three-per-row {
    grid-template-columns: repeat(3, 1fr);
  }

  &.one-per-row {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LogoWrapper = styled.div`
  background-color: black;
  height: 204px;
  width: 204px;

  &.lulu {
    background-color: transparent;
    width: 726px;
    height: auto;
  }
`;

export const Empty = styled.div`
  height: 150px;
`;
export const BgShape = styled.div`
  position: absolute;

  z-index: -1;
  &:nth-of-type(1) {
    top: 820px;
    right: -30px;
  }
  &:nth-of-type(2) {
    top: 1300px;
    left: -120px;
  }
  &:nth-of-type(3) {
    top: 3300px;
    right: 150px;
  }

  &:nth-of-type(4) {
    top: 2380px;
    left: 150px;
  }
  &:nth-of-type(5) {
    top: 4100px;
    left: 250px;
  }
`;
export const Shape = styled.img``;
