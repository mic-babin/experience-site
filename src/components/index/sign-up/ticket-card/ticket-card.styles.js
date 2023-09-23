import styled from "styled-components";

export const CardWrapper = styled.div`
  margin-bottom: 10px;
  margin-left: auto;
  display: flex;
`;

export const TicketWrapper = styled.div`
  max-width: 415px;
  padding: 30px;
  transition: 0.2s all ease-in-out;

  &:hover {
    color: black;
    background-color: #e3fe96;
  }

  &.featured {
    color: black;
    background-color: white;
  }
`;

export const Price = styled.div`
  font-family: "GroteskBold";
  font-size: 100px;
  line-height: 95px;
`;

export const Title = styled.div`
  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
  p {
    margin-bottom: 0;
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
