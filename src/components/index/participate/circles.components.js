import React from "react";
import { Parallax } from "react-scroll-parallax";
import { getImage } from "gatsby-plugin-image";
import { BgShape, Circle, CircleImage } from "./participate.styles";

const getRandomDelay = () => Math.random() * 1 + 1.5;

export const renderCircles = (circleArray) => {
  return circleArray.map((circle) => (
    <BgShape
      key={circle.index}
      style={{
        top: circle.top,
        left: circle.left,
        zIndex: circle.depth > 0.5 ? 1 : -1,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: getRandomDelay(),
        },
      }}
    >
      <Parallax translateY={[circle.speed, -circle.speed]}>
        <Circle key={circle.key}></Circle>
      </Parallax>
    </BgShape>
  ));
};

export const renderImageCircles = (circleArray, Images, isMedium, isSmall) => {
  return Images
    ? circleArray.map((circle) => {
        const image = Images[circle.index - 12];
        return (
          <BgShape
            key={circle.index}
            style={{
              top:
                isSmall && circle.index == 0
                  ? circle.top * 0.5
                  : isSmall && circle.index == 1
                  ? circle.top * 0.1
                  : circle.top,
              left: circle.left,
              zIndex: circle.depth > 0.5 ? 1 : -1,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: getRandomDelay(),
              },
            }}
          >
            <Parallax translateY={[circle.speed, -circle.speed]}>
              <CircleImage
                key={circle.key}
                image={getImage(image)}
                style={{
                  height: isSmall
                    ? circle.height * 0.5
                    : isMedium
                    ? circle.height * 0.75
                    : circle.height,
                  width: isSmall
                    ? circle.width * 0.5
                    : isMedium
                    ? circle.width * 0.75
                    : circle.width,
                }}
                alt="todo"
              />
            </Parallax>
          </BgShape>
        );
      })
    : null;
};
