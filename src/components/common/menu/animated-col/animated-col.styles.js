import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Col = styled(motion.div)`
  &:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background: black;
  }

  &:nth-of-type(2) {
    position: absolute;
    top: 0;
    left: 20%;
    min-height: 100vh;
    height: 100vh;
    object-fit: contain;
    background-color: black;
    object-position: center left;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  &:nth-of-type(3) {
    position: absolute;
    top: 0;
    left: 80%;
    width: 20%;
    height: 100%;
    background: black;
  }
`;
