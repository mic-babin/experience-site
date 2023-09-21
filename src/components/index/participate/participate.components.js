import React from "react";
import { Circle, Section, Title, BgShape } from "./participate.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import FeaturedPlayer from "./featured-player/featured-player.component";
import { circles } from "./circles";
import { Parallax } from "react-scroll-parallax";

const Participate = ({ data }) => {
  const { Images, description, video } = data;
  const s = { background: "#000000", color: "white" };

  // Generate an array of random positions for the circles

  return (
    <Section s={s}>
      <div className="container">
        {description && <Title>{renderRichText(description)}</Title>}
      </div>

      {circles.map((circle) => (
        <BgShape
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

      <FeaturedPlayer video={video} />
    </Section>
  );
};

export default Participate;
