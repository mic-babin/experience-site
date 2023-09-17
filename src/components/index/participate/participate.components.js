import React from "react";
import { Circle, Section, Title } from "./participate.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import FeaturedPlayer from "./featured-player/featured-player.component";

const Participate = ({ data }) => {
  const { Images, description, video } = data;
  const s = { background: "#000000", color: "white" };

  // Generate an array of random positions for the circles
  const circles = Array.from({ length: 11 }).map((_, index) => ({
    key: index,
    top: `${Math.random() * 60}%`,
    left: `${Math.random() * 100}%`,
    depth: Math.random(),
  }));

  return (
    <Section s={s}>
      <div className="container">
        {description && <Title>{renderRichText(description)}</Title>}
      </div>

      <div>
        {circles.map((circle) => (
          <Circle
            key={circle.key}
            style={{
              top: circle.top,
              left: circle.left,
              zIndex: circle.depth > 0.5 ? 1 : -1,
            }}
          ></Circle>
        ))}
      </div>

      <FeaturedPlayer video={video} />
    </Section>
  );
};

export default Participate;
