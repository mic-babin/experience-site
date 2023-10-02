import { styled } from "styled-components";

export const LineWrapper = styled.div`
  display: inline-flex;

  &.programming {
    width: calc(100% - 260px);
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
      display: inline-block;

      @media only screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
    }

    p:nth-of-type(3) {
      margin-top: 12.5vh;
      text-align: end;

      @media only screen and (max-width: 767px) {
        margin-top: 5vh;
      }
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

    p:nth-of-type(2) {
      display: inline-flex;
      margin-left: auto;
      text-align: end;
    }
    @media only screen and (max-width: 991px) {
      p:first-of-type {
        max-width: 490px;
        word-wrap: break-word;
      }
    }

    @media only screen and (max-width: 767px) {
      p:first-of-type {
        max-width: 390px;
        word-wrap: break-word;
      }
    }
    @media only screen and (max-width: 575px) {
      p:first-of-type {
        max-width: 230px;
        word-wrap: break-word;
      }
    }
    @media only screen and (max-width: 400px) {
      p:first-of-type {
        max-width: 190px;
        word-wrap: break-word;
      }
    }
  }
`;
