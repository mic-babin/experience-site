import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  margin: 30px;
  padding: 30px;
  background-color: white;
  color: black;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: black;
    color: white;
  }

  @media only screen and (max-width: 575px) {
    margin: 15px;
    padding: 25px;
  }
`;

export const Subtitle = styled.h4`
  font-family: "GroteskBold";
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 15px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;

  &.left {
    text-align: end;
    @media only screen and (max-width: 991px) {
      display: inline-flex;
    }
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
    padding-bottom: 12px;
  }
`;

export const Title = styled.h3`
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  margin-bottom: 0;
  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Name = styled.div`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Text = styled.span`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    height: 16px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr 1fr;

  @media only screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;
export const Col = styled.div`
  &:nth-of-type(2) {
    padding-left: 75px;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    flex-direction: column;
  }
  &:nth-of-type(3) {
    width: 100%;
  }
  @media only screen and (max-width: 991px) {
    &:nth-of-type(2) {
      padding-left: 0px;
      display: block;
      padding-top: 30px;
    }
    @media only screen and (max-width: 575px) {
      &:nth-of-type(2) {
        padding-top: 15px;
      }
    }
  }
`;

export const TextWrapper = styled.div`
  @media only screen and (max-width: 991px) {
    margin-top: -7px;
    display: block;
  }
  @media only screen and (max-width: 575px) {
    margin-top: -10px;
    display: block;
  }
`;

export const Logo = styled(GatsbyImage)`
  width: 84px;
  @media only screen and (max-width: 991px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 575px) {
    margin-top: 15px;
    width: 75px;
  }
`;
