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

export const renderImageCircles = (circleArray, Images) => {
  return Images
    ? circleArray.map((circle) => {
        const image = Images[circle.index - 12];
        return (
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
              <CircleImage
                key={circle.key}
                image={getImage(image)}
                style={{
                  height: circle.height,
                  width: circle.width,
                }}
                alt="todo"
              />
            </Parallax>
          </BgShape>
        );
      })
    : null;
};
