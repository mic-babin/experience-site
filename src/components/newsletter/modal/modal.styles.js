import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { motion } from "framer-motion";

export const ModalCard = styled(Modal)`
  cursor: default;
  .modal-content {
    background-color: white;
  }
`;

export const Form = styled(motion.form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled(motion.button)`
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-family: "GroteskBold";
  text-transform: uppercase;
  background-color: #35b999;
  padding: 0.5rem 1.25rem;
  border-radius: 22px;
  font-size: 24px;
  line-height: 28px;
  z-index: 1001;
  transition: all 0.2s ease-in;
  border: none;
  margin-left: auto;

  &:hover {
    color: white;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #000;

  &:focus {
    border-bottom: 2px solid #000;
    outline: none !important;
  }

  &::placeholder {
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    color: #000 !important;
    font-family: "Grotesk55";
    @media only screen and (max-width: 767px) {
      font-size: 20px;
      line-height: 23px;
    }
    @media only screen and (max-width: 575px) {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;

export const InputGroup = styled.div`
  position: relative;
  padding: 10px 30px;
  flex-grow: 1;
  width: 100%;
  span {
    left: 2px;
    color: red;
    font-family: "Grotesk55";
  }
`;

export const Title = styled.h2`
  font-family: "GroteskBold";
  text-transform: uppercase;
  font-size: 50px;
  line-height: 48px;

  @media only screen and (max-width: 767px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media only screen and (max-width: 575px) {
    font-size: 24px;
    line-height: 24px;
    max-width: 200px;
  }
`;

export const ModalButton = styled(FormButton)`
  background-color: #ec1a8d;
`;
