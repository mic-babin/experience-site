import React, { useRef } from "react";
import { Section, SiteTitle, Shape } from "./hero.styles";
import Title from "../../common/title/title.component";
import Shape1Src from "../../../assets/img/2edition.svg";
import Shape2Src from "../../../assets/img/salon-experience.svg";
import Shape3Src from "../../../assets/img/grand-quai.svg";
import Shape4Src from "../../../assets/img/22-fevrier.svg";
import Shape5Src from "../../../assets/img/presente-par.svg";
import { useElementSize } from "../../../utils/element-size.hook";

const Hero = ({ data }) => {
  const { title } = data;
  const s = { background: "#EBE50D", color: "#000000" };
  const section = useRef();
  const sectionSize = useElementSize(section);
  const shape2 = useRef();
  const shape2Size = useElementSize(shape2);
  const shape3 = useRef();
  const shape3Size = useElementSize(shape3);
  const shape4 = useRef();
  const shape4Size = useElementSize(shape4);
  const shape5 = useRef();
  const shape5Size = useElementSize(shape4);
  console.log(sectionSize);
  return (
    <Section s={s}>
      <div ref={section}>
        <div className="container" style={{ height: "calc(100vh - 72px)" }}>
          {title && (
            <SiteTitle>
              <Title title={title} width={172} y={35} textClass="main-title" />
            </SiteTitle>
          )}
        </div>
        <Shape
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
        ></Shape>
        <Shape
          src={Shape4Src}
          ref={shape4}
          style={{ width: "41.9vw" }}
          alt="22 février 2024"
          initial={{ y: -500, x: "43.5vw" }}
          animate={{
            y: sectionSize.height - 5 - shape4Size.height,
          }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 7,
            stiffness: 100,
            delay: 1.4,
          }}
        ></Shape>
        <Shape
          src={Shape5Src}
          ref={shape5}
          alt="Présenté par Lulu"
          style={{ width: "26.9vw" }}
          initial={{ y: -500, x: "73.1vw" }}
          animate={{
            y: sectionSize.height - shape5Size.height * 1.28,
          }}
          transition={{
            duration: 1,
            type: "spring",
            damping: 7,
            stiffness: 100,
            delay: 1.8,
          }}
        ></Shape>
      </div>
    </Section>
  );
};

export default Hero;
