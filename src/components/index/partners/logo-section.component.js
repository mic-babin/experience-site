import React from "react";
import { Title, Number, LogosWrapper, LogoWrapper } from "./partners.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import WaveTextAnimation from "../../common/wave-text-animation/wave-text-animation.component";
import { useInView } from "react-intersection-observer";

const getColumns = (logos) => {
  return logos.length < 2 ? 1 : logos.length < 5 ? 2 : logos.length < 7 ? 3 : 4;
};
const getClasses = (title) => {
  return title == "Partenaire Présentateur"
    ? "first"
    : title == "Destinations vedettes"
    ? "second"
    : "";
};

const LogoSection = ({ title, logos }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="container">
      <Title className={getClasses(title)}>
        <span>
          <WaveTextAnimation text={title} inView={inView} delay={0} />
        </span>
        {logos && <Number>{logos.length}</Number>}
      </Title>

      <div className="d-flex justify-content-end">
        <LogosWrapper
          ref={inViewRef}
          style={{
            gridTemplateColumns: `repeat(${getColumns(logos)}, 1fr)`,
          }}
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
