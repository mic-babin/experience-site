import { styled } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "gatsby-plugin-react-i18next";

export const NavBg = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1000;
`;

export const Col1 = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  background: black;
`;
export const Col2 = styled(motion.div)`
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
`;

export const Col3 = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 80%;
  width: 20%;
  height: 100%;
  background: black;
`;

export const MenuLinks = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const LinkWrapper = styled(motion.div)`
  color: #d5f453;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 120px;
  line-height: 124px;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fab6d1;
    color: #000000;
  }
`;

export const NavLink = styled.div`
  color: #d5f453;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 120px;
  line-height: 124px;
  width: 100%;
  text-align: center;
  transition: all 0.2s ease-in-out;
  font-family: "NimbusBold";
`;
