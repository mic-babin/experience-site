import { styled } from "styled-components";
import { motion } from "framer-motion";

export const MenuToggler = styled(motion.div)`
  margin-left: auto;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-family: "GroteskBold";
  text-transform: uppercase;
  background-color: #35b999;
  padding: 0.5rem 1.25rem;
  border-radius: 22px;
  font-size: 24px;
  line-height: 28px;
  z-index: 1001;
  transition: all 0.2s ease-in;

  &:hover {
    color: white;
  }
`;

export const Registration = styled(MenuToggler)`
  background-color: #ec1a8d;
`;

export const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 15px 30px;
  z-index: 10;

  @media only screen and (max-width: 991px) {
    padding: 15px 20px;
    background-color: #ebe50d;
  }

  @media only screen and (max-width: 575px) {
    padding: 15px 15px;
    background-color: #ebe50d;
  }
`;

export const Logo = styled(motion.img)`
  height: 73px;
  z-index: 1001;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
