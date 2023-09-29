import { styled } from "styled-components";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";

export const NavBg = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;

  height: 100vh;
  height: 100svh;
  overflow: hidden;
  z-index: 1000;
`;

export const Col1 = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100svh;
  background: black;
  filter: brightness(0.3);

  video {
    height: 100vh !important;
    height: 100svh !important;
    width: 100vw !important;
    object-fit: cover;
  }
`;

export const MenuLinks = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  z-index: 1000;

  @media only screen and (max-width: 767px) {
    justify-content: end;
    padding-bottom: 50px;
  }
`;

export const LinkWrapper = styled(motion.div)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 50px;
  line-height: 48px;
  width: 100%;
  text-align: left;
  transition: all 0 ease-in-out;
  padding-top: 23px;
  padding-bottom: 8px;
  padding-left: 150px;
  position: relative;

  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
    padding-left: 60px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
    padding-left: 30px;
    padding-top: 12px;
    padding-bottom: 4px;
  }

  span {
    display: inline-block;
    font-family: "Grotesk55";
    font-size: 50%;
    transform: translateY(-20px);
    padding-right: 20px;

    @media only screen and (max-width: 767px) {
      transform: translateY(-15px);
      padding-right: 15px;
    }

    @media only screen and (max-width: 575px) {
      transform: translateY(-12px);
      padding-right: 12px;
    }
  }

  .image-wrapper {
    opacity: 0;
  }

  &:hover {
    background-color: #ebe50d;
    color: #000000;
    .image-wrapper {
      opacity: 1;
    }
  }
`;

export const NavLink = styled.div`
  display: inline;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  font-family: "GroteskBold";
`;

export const ImageWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 60vw;

  height: 234px;
  width: 350px;
  z-index: 100;
`;

export const LinkImage = styled(GatsbyImage)``;
