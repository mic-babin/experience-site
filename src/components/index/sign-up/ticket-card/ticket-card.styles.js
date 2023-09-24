import styled from "styled-components";

export const CardWrapper = styled.a`
  margin-bottom: 10px;
  margin-left: auto;
  display: flex;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &.featured {
    background-color: white;
  }
`;

export const TicketWrapper = styled.div`
  max-width: 415px;
  padding: 30px;
  transition: 0.2s all ease-in-out;
  overflow: hidden;
  position: relative;

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
    z-index: 0;
    padding: 30px 0;
  }

  &:hover {
    color: black;
    background-color: #e3fe96;

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
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;

  &.overlay-text {
    min-width: 341px;
    padding-left: 30px;
  }
`;

export const Title = styled.div`
  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;

  p {
    margin-bottom: 0;
  }
  &.overlay-text {
    min-width: 341px;
    padding-left: 30px;
  }
`;

export const Featured = styled.div`
  writing-mode: vertical-lr;
  text-orientation: mixed;
  background-color: #e3fe96;
  padding: 15px;
  color: black;

  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
  div {
    transform: rotate(180deg);
  }
`;
