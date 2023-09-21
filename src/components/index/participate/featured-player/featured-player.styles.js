import { styled } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  padding-top: 150px;
  transform-origin: top center;
`;
export const BgWrapper = styled.div`
  position: relative;
`;

export const StartButton = styled(motion.button)`
  position: absolute;
  top: calc(50% - 47px);
  left: calc(50% - 80px);
  background-color: #3f3aef;
  font-family: "GroteskBold";
  font-size: 24px;
  line-height: 28px;
  z-index: 10;
  text-transform: uppercase;
  border: none;
  color: white;
  height: 94px;
  border-radius: 47px;
  width: 160px;
`;

export const popOutAnimation = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
