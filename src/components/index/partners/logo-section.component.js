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

  const getColumns = (logos) => {
    return logos.length < 2 || logos.length == undefined
      ? 1
      : isMedium || logos.length == 2
      ? 2
      : logos.length == 3
      ? 3
      : 4;
    // return logos.length < 2 || logos.length == undefined
    // ? 1
    // : logos.length < 5 || isMedium
    // ? 2
    // : logos.length < 7
    // ? 3
    // : isLarge
    // ? 3
    // : 4;
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
          {title == "Partenaire Présentateur" && (
            <LogoWrapper
              href={logos.link}
              target="_blank"
              className="lulu"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0 / 15 }}
            >
              <GatsbyImage image={getImage(logos.logo)} alt="TODO" />
            </LogoWrapper>
          )}
          {logos &&
            title !== "Partenaire Présentateur" &&
            logos.map((item, index) => (
              <LogoWrapper
                key={index}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index / 15 }}
              >
                <GatsbyImage
                  key={item.id}
                  image={getImage(item.logo)}
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
