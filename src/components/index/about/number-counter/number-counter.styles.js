import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Number = styled(motion.div)`
  max-width: 672px;
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  color: #ec1a8d;

  &.yellow {
    color: #ebe50d;
  }

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
    font-size: 40px;
    line-height: 38px;
  }
`;
