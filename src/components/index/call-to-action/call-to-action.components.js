import React from "react";
import {
  Section,
  BgWrapper,
  Col,
  Title,
  Kicker,
  Button,
} from "./call-to-action.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const CallToAction = ({ data }) => {
  const { title, kicker, button } = data;
  const s = { background: "#EC1A8D", color: "#000000", minHeight: "100%" };

  return (
    <Section s={s}>
      <BgWrapper>
        <div className="container">
          <div className="row">
            <Col className="col-md-5">
              {title && <Title>{renderRichText(title)}</Title>}
              {kicker && <Kicker>{renderRichText(kicker)}</Kicker>}
            </Col>
            <Col className="col-md-7">
              {button && <Button>{renderRichText(button)}</Button>}
            </Col>
          </div>
        </div>
      </BgWrapper>
    </Section>
  );
};

export default CallToAction;
