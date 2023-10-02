import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  overflow: hidden;
`;

export const Wrapper = styled.div`
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

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 100px;
  line-height: 95px;
  font-family: "GroteskBold";
  max-width: 1023px;
  display: inline-block;

  @media only screen and (max-width: 1599px) {
    font-size: 97px;
    line-height: 92px;
  }

  @media only screen and (max-width: 1249px) {
    font-size: 76px;
    line-height: 72px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 57px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 32px;
    line-height: 34px;
    max-width: 350px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 28px;
    line-height: 29px;
  }
`;

export const Number = styled.div`
  padding-left: 20px;
  display: inline-block;
  font-family: "Grotesk55";
  font-size: 50%;
  transform: translateY(-35%);

  @media only screen and (max-width: 575px) {
    padding-left: 10px;
  }
`;

export const LogosWrapper = styled.div`
  display: grid;
  padding-left: 150px;
  padding-top: 50px;
  grid-gap: 30px;
  padding-bottom: 100px;
  align-items: end;

  &.first {
    padding-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
  }
  @media only screen and (max-width: 575px) {
    grid-gap: 12px;
  }
`;

export const LogoWrapper = styled(motion.a)`
  background-color: black;
  max-height: 204px;
  max-width: 204px;
  transition: all 0.2s ease-in;
  &.lulu {
    background-color: transparent;
    max-width: 726px;
    max-height: 427px;

    &:hover {
      background-color: transparent;
    }
  }

  &:hover {
    background-color: #ec1a8d;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 767px) {
    &.lulu {
      width: 100%;
    }
  }
`;

export const BgShape = styled.div`
  position: absolute;

  z-index: -1;
  &:nth-of-type(1) {
    top: 18.54%;
    right: -2.1%;
  }
  &:nth-of-type(2) {
    top: 29.4%;
    left: -8.3%;
  }
  &:nth-of-type(3) {
    top: 70.63%;
    right: 10.41%;
  }

  &:nth-of-type(4) {
    top: 51.82%;
    left: 10.41%;
  }
  &:nth-of-type(5) {
    top: 88.71%;
    left: 17.34%;
  }
`;
export const Shape = styled.img`
  @media only screen and (max-width: 767px) {
    transform: scale(0.4) translateY(-100%);
  }
`;
