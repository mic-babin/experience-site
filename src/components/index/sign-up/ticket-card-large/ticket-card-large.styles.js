import styled from "styled-components";

export const CardWrapper = styled.a`
  margin-bottom: 10px;
  margin-left: auto;
  display: flex;
  cursor: pointer;
  color: white;
  text-decoration: none;
  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }

  &.featured {
    background-color: white;
  }
`;

export const TicketWrapper = styled.div`
  width: 476px;
  padding: 30px;
  transition: 0.2s all ease-in-out;
  overflow: hidden;
  position: relative;
  text-align: end;

  @media only screen and (max-width: 767px) {
    font-size: 90px;
    width: 425px;
  }
  @media only screen and (max-width: 575px) {
    width: calc(100vw - 132px);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e3fe96;
    overflow: hidden;
    width: 0;
    height: calc(100% - 0.1px);
    transition: 0.5s width ease;
    z-index: 10;
    padding: 30px 0;
    color: black;
  }

  .overlay-content {
    width: 476px;
    padding: 0 30px;

    @media only screen and (max-width: 767px) {
      width: 425px;
    }

    @media only screen and (max-width: 575px) {
      width: calc(100vw - 150px);
      padding: 0 12px;
      padding-left: 30px;
    }
    @media only screen and (max-width: 380px) {
      padding-left: 20px;
    }
    @media only screen and (max-width: 370px) {
      padding-left: 15px;
    }
  }

  &:hover {
    .overlay {
      width: 100%;
    }
  }

  &.featured {
    color: black;
    background-color: transparent;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
  margin-top: 10px;
  padding-right: 20px;
  margin-bottom: 0;

  min-width: 341px;
  padding-left: 30px;

  @media only screen and (max-width: 1599px) {
    font-size: 97px;
    line-height: 92px;
  }

  @media only screen and (max-width: 1249px) {
    font-size: 90px;
    line-height: 95px;
  }
  @media only screen and (max-width: 767px) {
    display: block;
    padding: 0px;
    min-width: 0px;
    img {
      display: none;
    }
  }
  @media only screen and (max-width: 400px) {
    font-size: 70px;
    line-height: 85px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 65px;
    line-height: 85px;
  }
`;

export const Title = styled.div`
  font-family: "GroteskBold";

  font-size: 24px;
  line-height: 28px;

  p {
    margin-bottom: 0;
  }
  &.overlay-text {
    padding-left: 30px;
  }

  @media only screen and (max-width: 767px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media only screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 18px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Featured = styled.div`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  background-color: #e3fe96;
  padding: 15px;
  color: black;
  text-align: center;

  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
  div {
    transform: rotate(180deg);
  }

  .large {
    font-size: 50px;
    line-height: 42px;

    @media only screen and (max-width: 767px) {
      font-size: 36px;
      line-height: 36px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 24px;
      line-height: 24px;
    }
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

export const SmallText = styled.div`
  padding-left: 75px;
  font-size: 15px;
  padding-top: 10px;
  line-height: 15px;

  @media only screen and (max-width: 767px) {
    padding-left: 25px;
  }
  @media only screen and (max-width: 575px) {
    padding-left: 0px;
    font-size: 13px;

    line-height: 13px;
  }
  @media only screen and (max-width: 370px) {
    &.overlay-sm {
      padding-left: 15px;
    }
  }
`;

export const SmallTextBold = styled(SmallText)`
  font-family: "GroteskBold";
`;
