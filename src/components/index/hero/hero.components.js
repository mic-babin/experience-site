import React, { useRef, useState } from "react";
import { Section, SiteTitle, Shape, Wrapper } from "./hero.styles";
import Title from "../../common/title/title.component";
import { getShapes, getSmallShapes } from "./shapes.data";
import { useElementSize } from "../../../utils/element-size.hook";
import { useInView } from "react-intersection-observer";
import { useIsMedium } from "../../../utils/media-query.hook";

const Hero = ({ data }) => {
  const { title } = data;
  const s = { background: "#EBE50D", color: "#000000" };
  const isMedium = useIsMedium();
  const section = useRef();
  const sectionSize = useElementSize(section);
  const shapes = isMedium
    ? getSmallShapes(sectionSize)
    : getShapes(sectionSize);
  const [showShapes, setShowShapes] = useState(false);

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: () =>
      setTimeout(() => {
        setShowShapes(true);
      }, 2500),
  });

  return (
    <Section s={s}>
      <Wrapper ref={section}>
        <div
          className="container"
          style={{ height: "calc(100vh - 82px)" }}
          ref={inViewRef}
        >
          {title && (
            <SiteTitle>
              <Title
                title={title}
                width={172}
                y={35}
                textClass="main-title"
                inView={inView}
                animationLoop={true}
                wordSpeed={400}
                lineDelay={1000}
              />
            </SiteTitle>
          )}
        </div>

        {showShapes &&
          shapes.map((shape) => (
            <Shape
              key={shape.key}
              src={shape.src}
              alt={shape.alt}
              style={shape.style}
              initial={shape.initial}
              animate={shape.animate}
              transition={shape.transition}
            ></Shape>
          ))}
      </Wrapper>
    </Section>
  );
};

export default Hero;
