import React, { useRef, useState } from "react";
import { Section, SiteTitle, Shape, Wrapper } from "./hero.styles";
import Title from "../../common/title/title.component";
import { getShapes, getSmallShapes } from "./shapes.data";
import { useElementSize } from "../../../utils/element-size.hook";
import { useInView } from "react-intersection-observer";
import { useIsSmall } from "../../../utils/media-query.hook";
import { useElementSizeNoResize } from "../../../utils/element-size-no-resize.hook";

const Hero = ({ data }) => {
  const { title } = data;
  const s = { background: "#EBE50D", color: "#000000" };
  const isSmall = useIsSmall();
  const section = useRef();
  const sectionSize = useElementSize(section);
  const sectionSizeSmall = useElementSizeNoResize(section);
  const shapes = isSmall
    ? getSmallShapes(sectionSizeSmall)
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
        <div className="container" ref={inViewRef}>
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
