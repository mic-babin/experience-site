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
`;
