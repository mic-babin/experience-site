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
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 50px;
  line-height: 48px;
  width: 100%;
  text-align: left;
  transition: all 0.2s ease-in-out;
  padding: 15px 0;
  padding-left: 150px;

  span {
    font-size: 14px;
    display: inline-block;
    font-family: "Grotesk55";
    font-size: 50%;
    transform: translateY(-25px);
    padding-right: 20px;
  }

  &:hover {
    background-color: #ebe50d;
    color: #000000;
  }
`;

export const NavLink = styled.div`
  display: inline;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  transition: all 0.2s ease-in-out;
  font-family: "GroteskBold";
`;
