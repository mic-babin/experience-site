import React, { useState } from "react";
import {
  Section,
  BgWrapper,
  Col,
  Title,
  Kicker,
  Button,
} from "./exhibitors.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import { useInView } from "react-intersection-observer";
import LogoCarousel from "./logo-carousel/logo-carousel.component";

const Exhibitors = ({ data }) => {
  const { title, kicker, logos } = data;
  const s = {
    background: "rgb(53, 185, 153)",
    color: "#000000",
    minHeight: "100px",
  };
  // const [show, setShow] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  // const handleClose = () => setShow(false);
  // const handleOpen = () => setShow(true);

  return (
    <BgWrapper>
      <div className="container">
        <div className="row">
          <Col className="col-lg-5">
            {title && <Title>{renderRichText(title)}</Title>}
            {kicker && <Kicker>{renderRichText(kicker)}</Kicker>}
          </Col>
          <Col className="col-lg-7" ref={inViewRef}>
            <LogoCarousel logos={logos} />
          </Col>
        </div>
      </div>
    </BgWrapper>
  );
};

export default Exhibitors;
