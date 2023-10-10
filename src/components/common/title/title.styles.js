import { styled } from "styled-components";

export const LineWrapper = styled.div`
  display: inline-flex;

  &.programming {
    width: calc(100% - 260px);
  }
`;

export const Text = styled.div`
  span {
    display: block;
  }
  &.main-title {
    width: 100%;
    padding-bottom: 18vh;

    span:first-of-type {
      display: inline;
    }
    span:nth-of-type(2) {
      display: inline-block;
      margin-left: 10px;
      @media only screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
      @media only screen and (max-width: 575px) {
        margin-left: 0.5vw;
      }
    }

    span:nth-of-type(3) {
      margin-top: 12.5vh;
      text-align: end;

      @media only screen and (max-width: 991px) {
        margin-top: 0vh;
      }
      @media only screen and (max-width: 767px) {
        margin-top: 0.6vh;
      }
    }

    span:nth-of-type(4) {
      text-align: end;
    }
  }

  &.become-partner {
    span {
      display: inline-block;
    }
    span:nth-of-type(2) {
      display: block;
    }

    @media only screen and (max-width: 767px) {
      span {
        margin-bottom: 5px;
      }
    }
  }

  &.programming {
    width: 100%;

    span:nth-of-type(2) {
      display: inline-flex;
      margin-left: auto;
      text-align: end;
    }
    @media only screen and (max-width: 991px) {
      span:first-of-type {
        max-width: 490px;
        word-wrap: break-word;
      }
    }

    @media only screen and (max-width: 767px) {
      span:first-of-type {
        max-width: 390px;
        word-wrap: break-word;
      }
    }
    @media only screen and (max-width: 575px) {
      span:first-of-type {
        max-width: 230px;
        word-wrap: break-word;
      }
    }
    @media only screen and (max-width: 400px) {
      span:first-of-type {
        max-width: 190px;
        word-wrap: break-word;
      }
    }
  }
`;
