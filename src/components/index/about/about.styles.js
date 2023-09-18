import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)`
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 150px 0;
`;

export const Title = styled(motion.div)`
  max-width: 672px;
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
`;

export const NumbersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
`;

export const NumberWraper = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
`;

export const NumberTitle = styled.div`
  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
`;
export const FeaturesWrapper = styled.div`
  display: flex;
  align-items: end;
`;

export const Features = styled.div`
  max-width: 730px;
`;

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const Index = styled.div`
  font-size: 18px;
  line-height: 20px;
  padding-right: 30px;
  font-family: "Grotesk55";
`;
export const Feature = styled.div`
  font-family: "Grotesk55";
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid white;
  flex-grow: 1;
  &.no-border {
    border-bottom: none;
  }
`;

export const Empty = styled.div`
  height: 150px;
`;

export const Smiley = styled.img`
  position: absolute;
  top: 350px;
  z-index: -1;
`;
