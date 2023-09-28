import React from "react";
import { Section, Title, Wrapper } from "./participate.styles";
import FeaturedPlayer from "./featured-player/featured-player.component";
import { circles, imageCircles } from "./circles.data.js";
import { renderCircles, renderImageCircles } from "./circles.components";
import { useInView } from "react-intersection-observer";
import WaveTextAnimation from "../../common/wave-text-animation/wave-text-animation.component";
import { useIsMedium, useIsSmall } from "../../../utils/media-query.hook";

const Participate = ({ data }) => {
  const { Images, description, video, videoCoverImage } = data;
  const s = { background: "#000000", color: "white" };
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const isMedium = useIsMedium();
  const isSmall = useIsSmall();

  return (
    <Section s={s}>
      <Wrapper className="container" ref={inViewRef}>
        {description && (
          <Title>
            <WaveTextAnimation text={description} inView={inView} delay={0} />
          </Title>
        )}
      </Wrapper>

      {inView && renderCircles(circles)}
      {inView && renderImageCircles(imageCircles, Images, isMedium, isSmall)}

      <FeaturedPlayer video={video} image={videoCoverImage} />
    </Section>
  );
};

export default Participate;
