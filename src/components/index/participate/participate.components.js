import React from "react";
import { Section, SectionTitle, Wrapper } from "./participate.styles";
import FeaturedPlayer from "./featured-player/featured-player.component";
import { circles, imageCircles } from "./circles.data.js";
import { renderCircles, renderImageCircles } from "./circles.components";
import { useInView } from "react-intersection-observer";
import Title from "../../common/title/title.component";
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
          <SectionTitle>
            <Title
              title={description}
              width={172}
              y={35}
              textClass="partners-title"
              inView={inView}
              animationLoop={true}
              wordSpeed={0}
              lineDelay={0}
            />
          </SectionTitle>
        )}
      </Wrapper>

      {inView && renderCircles(circles)}
      {inView && renderImageCircles(imageCircles, Images, isMedium, isSmall)}

      <FeaturedPlayer video={video} image={videoCoverImage} />
    </Section>
  );
};

export default Participate;
