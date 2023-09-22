import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Shape, BgShape } from "./partners.styles";
import Src1 from "../../../assets/img/partner-1.svg";
import Src2 from "../../../assets/img/partner-2.svg";
import Src3 from "../../../assets/img/partner-3.svg";
import Src4 from "../../../assets/img/partner-4.svg";
import Src5 from "../../../assets/img/partner-5.svg";

const images = [Src1, Src2, Src3, Src4, Src5];

const randomParallaxSpeed = () => Math.random() * 20 + 10;

export const generateParallaxShapes = () => {
  return images.map((src, index) => {
    const speed = randomParallaxSpeed();
    return (
      <BgShape key={index}>
        <Parallax translateY={[-speed, speed]}>
          <Shape src={src} alt="Forme géometrique"></Shape>
        </Parallax>
      </BgShape>
    );
  });
};
