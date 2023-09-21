import React, { useRef, useState } from "react";
import {
  Section,
  Kicker,
  Photo,
  Name,
  Text,
  Email,
  BecomePartnerTitle,
  ContactWrapper,
  ContactContent,
  Shape,
  Empty,
} from "./become-partner.styles";
import { getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useElementSize } from "../../../utils/element-size.hook";
import Title from "../../common/title/title.component";
import Shape1Src from "../../../assets/img/become-partner-1.svg";
import Shape2Src from "../../../assets/img/become-partner-2.svg";
import Shape3Src from "../../../assets/img/become-partner-3.svg";
import { useInView } from "react-intersection-observer";

const BecomePartner = ({ data }) => {
  const {
    title,
    kicker,
    contactName,
    contactEmail,
    contactMessage,
    contactPhoto,
  } = data;
  const s = { background: "#EBE50D", color: "#000000" };
  const section = useRef();
  const sectionSize = useElementSize(section);

  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
  });

  return (
    <Section s={s}>
      <div className="container" ref={section} id="devenir-exposant">
        <BecomePartnerTitle>
          <Title title={title} width={204} y={35} textClass="become-partner" />
        </BecomePartnerTitle>

        {kicker && <Kicker>{renderRichText(kicker)}</Kicker>}

        <ContactWrapper ref={containerRef}>
          <ContactContent>
            {contactPhoto && (
              <Photo image={getImage(contactPhoto)} alt="TODO" />
            )}
            {contactName && <Name>{contactName}</Name>}
            {contactMessage && <Text>{renderRichText(contactMessage)}</Text>}
            {contactEmail && (
              <Email href={`mailTo:${contactEmail}`}>{contactEmail}</Email>
            )}
          </ContactContent>
        </ContactWrapper>
        <Empty>&nbsp;</Empty>
      </div>

      {containerInView && (
        <>
          <Shape
            src={Shape1Src}
            alt="Forme"
            style={{ width: "9.5w" }}
            initial={{ y: -300, x: "-1.8vw" }}
            animate={{
              y: sectionSize.height - sectionSize.width * 0.173,
              x: "-1.8vw",
            }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 7,
              stiffness: 100,
              delay: 1.3,
            }}
          ></Shape>
          <Shape
            src={Shape2Src}
            alt="Forme"
            style={{ width: "39.2vw" }}
            initial={{ y: -850, x: "-1.8vw" }}
            animate={{
              y: sectionSize.height - sectionSize.width * 0.468,
              x: "-1.8vw",
            }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 7,
              stiffness: 100,
              delay: 1.9,
            }}
          ></Shape>
          <Shape
            src={Shape3Src}
            alt="Forme"
            style={{ width: "20.1vw" }}
            initial={{ y: -500, x: 0 }}
            animate={{
              y: sectionSize.height - sectionSize.width * 0.17,
              x: 0,
            }}
            transition={{
              duration: 1,
              type: "spring",
              damping: 7,
              stiffness: 100,
              delay: 1,
            }}
          ></Shape>
        </>
      )}
    </Section>
  );
};

export default BecomePartner;
