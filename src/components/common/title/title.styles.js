import { styled } from "styled-components";

export const LineWrapper = styled.div`
  display: inline-flex;
`;

export const Text = styled.div`
  &.main-title {
    width: 100%;
    padding-bottom: 160px;

    p:first-of-type {
      display: inline;
    }
    p:nth-of-type(2) {
      display: inline;
    }

    p:nth-of-type(3) {
      padding-top: 150px;
      text-align: end;
    }

    p:nth-of-type(4) {
      text-align: end;
    }
  }

  &.become-partner {
    p:nth-of-type(2) {
      display: inline;
    }
  }
`;
