import styled from "styled-components";
import { motion } from "framer-motion";
import SectionLayout from "../../layout/section-layout.component";

export const Section = styled(SectionLayout)``;

export const Reason = styled.div`
  margin-left: auto;
  max-width: 768px;
  font-size: 50px;
  line-height: 48px;
  font-family: "GroteskBold";
  text-align: end;
  padding: calc((33.33vh - 143px) / 2);

  &.third {
    max-width: 900px;
    margin-bottom: 50px;
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
`;
