import React from "react";
import {
  PartnerTitle,
  Number,
  LogosWrapper,
  LogoWrapper,
} from "./partners.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
import {
  useIsLarge,
  useIsMedium,
  useIsSmall,
  useIsXXSmall,
} from "../../../utils/media-query.hook";
import Title from "../../common/title/title.component";

const LogoSection = ({ title, logos, index }) => {
  console.log(logos);
  const isLarge = useIsLarge();
  const isMedium = useIsMedium();
  const isSmall = useIsSmall();
  const isXXSmall = useIsXXSmall();

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const getColumns = (logos) => {
    if (logos) {
      return logos.length < 2 || logos.length === undefined
        ? 1
        : isMedium || logos.length === 2
        ? 2
        : logos.length == 3
        ? 3
        : 4;
    } else {
      return 1;
    }

    // return logos.length < 2 || logos.length === undefined
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
      <PartnerTitle className={"title-" + index}>
        <span>
          <Title
            title={title}
            width={172}
            y={35}
            textClass="partners-title"
            inView={true}
            animationLoop={true}
            wordSpeed={index * 100}
            lineDelay={0}
          />
        </span>

        {logos && !isXXSmall && <Number>{logos.length || 1}</Number>}
      </PartnerTitle>

      <div className="d-flex justify-content-end">
        <LogosWrapper
          ref={inViewRef}
          style={{
            maxWidth:
              logos?.length === 1 &&
              title != "Présentateur" &&
              "calc(50% - 6px)",
            gridTemplateColumns:
              isSmall && logos.length > 2
                ? "1fr 1fr"
                : `repeat(${getColumns(logos)}, 1fr)`,
          }}
          className={title === "Présentateur" ? "first" : ""}
        >
          {title === "Présentateur" && (
            <LogoWrapper
              href={logos.link}
              target="_blank"
              className="lulu"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0 / 15 }}
            >
              {logos && <GatsbyImage image={getImage(logos.logo)} alt="Logo" />}
            </LogoWrapper>
          )}
          {logos &&
            title !== "Présentateur" &&
            logos.map((item, index) => (
              <LogoWrapper
                key={index}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index / 15 }}
              >
                {item && (
                  <GatsbyImage
                    key={item.id}
                    image={getImage(item.logo)}
                    alt="Logo"
                  />
                )}
              </LogoWrapper>
            ))}
        </LogosWrapper>
      </div>
    </div>
  );
};

export default LogoSection;
