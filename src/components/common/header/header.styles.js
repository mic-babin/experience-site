import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  z-index: 10;
  background-color: white;
`;

export const Logo = styled(motion.img)`
  height: 52px;
`;
