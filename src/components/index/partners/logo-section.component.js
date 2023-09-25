import React from "react";
import { Title, Number, LogosWrapper, LogoWrapper } from "./partners.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import WaveTextAnimation from "../../common/wave-text-animation/wave-text-animation.component";
import { useInView } from "react-intersection-observer";
import {
  useIsLarge,
  useIsMedium,
  useIsSmall,
} from "../../../utils/media-query.hook";

const LogoSection = ({ title, logos }) => {
  const isLarge = useIsLarge();
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  console.log(isSmall);

  const getColumns = (logos) => {
    return logos.length < 2
      ? 1
      : logos.length < 5 || isMedium
      ? 2
      : logos.length < 7
      ? 3
      : isLarge
      ? 3
      : 4;
  };

  return (
    <div className="container">
      <Title>
        <span>
          <WaveTextAnimation text={title} inView={inView} delay={0} />
        </span>
        {logos && <Number>{logos.length}</Number>}
      </Title>

      <div className="d-flex justify-content-end">
        <LogosWrapper
          ref={inViewRef}
          style={{
            maxWidth:
              logos.length == 1 &&
              title != "Partenaire Présentateur" &&
              "calc(50% - 6px)",
            gridTemplateColumns:
              isSmall && logos.length > 2
                ? "1fr 1fr"
                : `repeat(${getColumns(logos)}, 1fr)`,
          }}
          className={title == "Partenaire Présentateur" ? "first" : ""}
        >
          {logos &&
            logos.map((image, index) => (
              <LogoWrapper
                key={index}
                className={title == "Partenaire Présentateur" ? "lulu" : ""}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index / 15 }}
              >
                <GatsbyImage
                  key={image.id}
                  image={getImage(image)}
                  alt="TODO"
                />
              </LogoWrapper>
            ))}
        </LogosWrapper>
      </div>
    </div>
  );
};

export default LogoSection;
