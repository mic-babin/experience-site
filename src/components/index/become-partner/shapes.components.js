import React from "react";
import Shape1Src from "../../../assets/img/become-partner-1.svg";
import Shape2Src from "../../../assets/img/become-partner-2.svg";
import Shape3Src from "../../../assets/img/become-partner-3.svg";
import { Shape } from "./become-partner.styles";

const Shapes = ({ sectionSize }) => {
  return (
    <>
      <Shape
        src={Shape1Src}
        alt="Forme"
        style={{ width: "9.5w" }}
        initial={{ y: -300, x: "-1.8vw" }}
        animate={{
          y: sectionSize.height - sectionSize.width * 0.18,
          x: "-1.8vw",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 7,
          stiffness: 100,
          delay: 1.3,
        }}
      ></Shape>
      <Shape
        src={Shape2Src}
        alt="Forme"
        style={{ width: "39.2vw" }}
        initial={{ y: -850, x: "-1.8vw" }}
        animate={{
          y: sectionSize.height - sectionSize.width * 0.508,
          x: "-1.8vw",
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 7,
          stiffness: 100,
          delay: 1.9,
        }}
      ></Shape>
      <Shape
        src={Shape3Src}
        alt="Forme"
        style={{ width: "20.1vw" }}
        initial={{ y: -500, x: 0 }}
        animate={{
          y: sectionSize.height - sectionSize.width * 0.177,
          x: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 7,
          stiffness: 100,
          delay: 1,
        }}
      ></Shape>
    </>
  );
};

export default Shapes;
