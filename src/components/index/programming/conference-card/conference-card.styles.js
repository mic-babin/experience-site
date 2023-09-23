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
`;

export const Subtitle = styled.h4`
  font-family: "GroteskBold";
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 15px;
`;

export const Title = styled.h3`
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  margin-bottom: 0;
`;

export const Name = styled.div`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
`;

export const Text = styled.span`
  font-family: "Grotesk55";
  font-size: 24x;
  line-height: 28px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr 1fr;
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
    display: flex;
    justify-content: end;
    -webkit-justify-content: end;
  }
`;

export const Logo = styled(GatsbyImage)`
  width: 84px;
`;
