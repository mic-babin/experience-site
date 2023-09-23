import React from "react";
import { Section, Title } from "./participate.styles";
import FeaturedPlayer from "./featured-player/featured-player.component";
import { circles, imageCircles } from "./circles.data.js";
import { renderCircles, renderImageCircles } from "./circles.components";
import { useInView } from "react-intersection-observer";
import { Empty } from "../programming/programming.styles";
import WaveTextAnimation from "../../common/wave-text-animation/wave-text-animation.component";

const Participate = ({ data }) => {
  const { Images, description, video, videoCoverImage } = data;
  const s = { background: "#000000", color: "white" };
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Section s={s}>
      <div className="container" ref={inViewRef}>
        {description && (
          <Title>
            <WaveTextAnimation text={description} inView={inView} delay={0} />
          </Title>
        )}
      </div>

      {inView && renderCircles(circles)}
      {inView && renderImageCircles(imageCircles, Images)}

      <FeaturedPlayer video={video} image={videoCoverImage} />
    </Section>
  );
};

export default Participate;
