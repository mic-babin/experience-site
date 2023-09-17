import React, { useRef } from "react";
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
  Empty,
} from "./become-partner.styles";
import { getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useElementSize } from "../../../utils/element-size.hook";
import Title from "../../common/title/title.component";
import Shape1Src from "../../../assets/img/2edition.svg";
import Shape2Src from "../../../assets/img/salon-experience.svg";
import Shape3Src from "../../../assets/img/grand-quai.svg";

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
  const shape2 = useRef();
  const shape2Size = useElementSize(shape2);
  const shape3 = useRef();
  const shape3Size = useElementSize(shape3);

  return (
    <Section s={s}>
      <div className="container">
        <BecomePartnerTitle>
          <Title title={title} width={204} y={35} textClass="become-partner" />
        </BecomePartnerTitle>

        {kicker && <Kicker>{renderRichText(kicker)}</Kicker>}

        <ContactWrapper>
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

      {/* <Shape
        src={Shape1Src}
        alt="2e edition"
        style={{ width: "19.8vw" }}
        initial={{ y: -300, x: "-2.1vw" }}
        animate={{ y: sectionSize.height - shape2Size.height / 1.098 }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 7,
          stiffness: 100,
          delay: 2.3,
        }}
      ></Shape>
      <Shape
        src={Shape2Src}
        ref={shape2}
        alt="Salon Experience"
        style={{ width: "51.2vw" }}
        initial={{ y: -850, x: 0 }}
        animate={{ y: sectionSize.height - 5 - shape2Size.height }}
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
        ref={shape3}
        alt="Grand Quai du Port de Montréal"
        style={{ width: "18.3vw" }}
        initial={{ y: -500, x: "26.5vw" }}
        animate={{
          y: sectionSize.height - 10 - shape3Size.height,
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 7,
          stiffness: 100,
          delay: 1,
        }}
      ></Shape> */}
    </Section>
  );
};

export default BecomePartner;
