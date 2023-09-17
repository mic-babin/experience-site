import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)``;

export const BgWrapper = styled.div`
  padding: 150px 0;
`;

export const Col = styled.div`
  &:first-of-type {
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  max-width: 266px;
`;

export const Kicker = styled.div`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;

  p {
    margin: 0;
  }
`;

export const Button = styled.button`
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  background-color: black;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    margin: 0;
    width: 100%;
  }
  a {
    width: 100%;
    display: block;
    padding: 40px;
    color: white;
    text-decoration: none;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    background-color: white;
    a {
      color: #ec1a8d;
    }
  }
`;
