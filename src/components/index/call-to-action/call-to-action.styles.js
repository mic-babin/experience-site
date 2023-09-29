import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)``;

export const BgWrapper = styled.div`
  padding: 150px 0;

  @media only screen and (max-width: 1249px) {
    padding: 120px 0;
  }

  @media only screen and (max-width: 991px) {
    padding: 100px 0;
  }
  @media only screen and (max-width: 767px) {
    padding: 75px 0;
  }

  @media only screen and (max-width: 575px) {
    padding: 75px 20px;
  }
`;

export const Col = styled.div`
  &:first-of-type {
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }

  &:nth-of-type(2) {
    overflow: hidden;
  }
`;

export const Title = styled.h2`
  font-family: "GroteskBold";
  font-size: 50px;
  line-height: 48px;
  max-width: 266px;

  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
    max-width: 200px;
  }
`;

export const Kicker = styled.div`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;

  p {
    margin: 0;
  }

  @media only screen and (max-width: 991px) {
    max-width: 75%;
  }
  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Button = styled(motion.a)`
  display: block;
  text-align: center;
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  background-color: black;
  border: none;
  width: 100%;
  padding: 40px;
  color: white;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: white;

    color: #ec1a8d;
  }

  @media only screen and (max-width: 1599px) {
    font-size: 97px;
    line-height: 92px;
  }

  @media only screen and (max-width: 1249px) {
    font-size: 76px;
    line-height: 72px;
  }

  @media only screen and (max-width: 991px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 60px;
    line-height: 57px;
  }
  @media only screen and (max-width: 575px) {
    text-align: center;
    font-size: 36px;
    line-height: 34px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 30px;
    line-height: 29px;
  }
`;
