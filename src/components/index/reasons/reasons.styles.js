import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)``;

export const Reason = styled.div`
  margin-left: auto;
  max-width: 760px;
  font-size: 50px;
  line-height: 48px;
  font-family: "GroteskBold";
  text-align: end;
  padding: calc((33.33vh - 143px) / 2);

  &.third {
    max-width: 850px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
    padding: calc((33.33vh - 143px) / 2);
    max-width: 600px;

    &.third {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
    padding: calc((33.33vh - 143px) / 2) 20px;
    max-width: 300px;

    &.third {
      max-width: 350px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Shape = styled.img`
  position: absolute;
  top: calc((33.33vh - 143px) / 2);
  left: calc((33.33vh - 143px) / 2);

  @media only screen and (max-width: 575px) {
    top: calc((33.33vh - 143px) / 2);
    left: 20px;
  }
`;
