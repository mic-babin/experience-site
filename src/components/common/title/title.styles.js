import { styled } from "styled-components";

export const LineWrapper = styled.div`
  display: inline-flex;

  &.programming {
    width: calc(100% - 260px);
    justify-content: end;
    -webkit-justify-content: end;
  }
`;

export const Text = styled.div`
  &.main-title {
    width: 100%;
    padding-bottom: 18vh;

    p:first-of-type {
      display: inline;
    }
    p:nth-of-type(2) {
      display: inline;
    }

    p:nth-of-type(3) {
      padding-top: 16vh;
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

    @media only screen and (max-width: 767px) {
      p {
        margin-bottom: 5px;
      }
    }
  }

  &.programming {
    width: 100%;
    img {
      text-align: end;
    }
    p:nth-of-type(2) {
      display: inline-block;
      text-align: end;
    }
  }
`;
