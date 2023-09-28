import { styled } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  margin-bottom: -10px;
  transform-origin: top center;

  @media only screen and (max-width: 767px) {
    margin-bottom: 50px;
  }
`;
export const BgWrapper = styled.div`
  position: relative;
`;

export const StartButton = styled(motion.button)`
  position: absolute;
  background-color: #3f3aef;
  font-family: "GroteskBold";
  font-size: 24px;
  line-height: 28px;
  z-index: 10;
  text-transform: uppercase;
  border: none;
  color: white;
  top: calc(50% - 47px);
  left: calc(50% - 205px);
  border-radius: 47px;
  height: 94px;
  width: 410px;

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
    top: calc(50% - 30px);
    left: calc(50% - 160px);
    border-radius: 30px;
    height: 60px;
    width: 320px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;

    top: calc(50% - 24px);
    left: calc(50% - 120px);
    border-radius: 24px;
    height: 48px;
    width: 240px;
  }
`;

export const popOutAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export const ImageWrapper = styled.div`
  width: 100vw;
`;
