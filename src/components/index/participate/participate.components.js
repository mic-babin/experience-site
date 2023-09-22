import React from "react";
import {
  Circle,
  Section,
  Title,
  BgShape,
  CircleImage,
} from "./participate.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import FeaturedPlayer from "./featured-player/featured-player.component";
import { circles, imageCircles } from "./circles";
import { Parallax } from "react-scroll-parallax";
import { getImage } from "gatsby-plugin-image";
import { Empty } from "../programming/programming.styles";

const Participate = ({ data }) => {
  const { Images, description, video, videoCoverImage } = data;
  const s = { background: "#000000", color: "white" };
  return (
    <Section s={s}>
      <div className="container">
        {description && <Title>{renderRichText(description)}</Title>}
      </div>

      {circles.map((circle) => (
        <BgShape
          key={circle.index}
          style={{
            top: circle.top,
            left: circle.left,
            zIndex: circle.depth > 0.5 ? 1 : -1,
          }}
        >
          <Parallax translateY={[circle.speed, -circle.speed]}>
            <Circle key={circle.key}></Circle>
          </Parallax>
        </BgShape>
      ))}

      {Images &&
        imageCircles.map((circle) => {
          const image = Images[circle.index - 12];

          return (
            <BgShape
              key={circle.index}
              style={{
                top: circle.top,
                left: circle.left,
                zIndex: circle.depth > 0.5 ? 1 : -1,
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
        })}

      <FeaturedPlayer video={video} image={videoCoverImage} />
      <Empty> &nbsp;</Empty>
    </Section>
  );
};

export default Participate;
