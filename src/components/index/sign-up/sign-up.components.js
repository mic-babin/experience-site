import React, { useRef } from "react";
import {
  Section,
  SignUpTitle,
  Grid,
  Col,
  Kicker,
  Empty,
  BgWrapper,
  Circle,
} from "./sign-up.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import TicketCard from "./ticket-card/ticket-card.component";
import { useElementSize } from "../../../utils/element-size.hook";
import HorizontalScrollLine from "./horizontal-scroll-line/horizontal-scroll-line.component";

const SignUp = ({ data }) => {
  const { title, kicker, tickets } = data;
  const s = { background: "#3F3AEF", color: "white" };

  const section = useRef();
  const sectionSize = useElementSize(section);
  const lines = [];
  for (let i = 0; i < 10; i++) {
    lines.push(
      <HorizontalScrollLine key={i} index={i} height={sectionSize.height} />
    );
  }
  return (
    <Section s={s}>
      <div ref={section}>
        <BgWrapper>
          <Circle style={{ height: sectionSize.height }}></Circle>
          {lines}
          <HorizontalScrollLine />
        </BgWrapper>
        <div className="container">
          {title && <SignUpTitle>{renderRichText(title)}</SignUpTitle>}
          <Grid>
            <Col>{kicker && <Kicker>{renderRichText(kicker)}</Kicker>}</Col>
            <Col>
              {tickets &&
                tickets.map((ticket) => (
                  <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </Col>
          </Grid>
        </div>
        <Empty>&nbsp;</Empty>
      </div>
    </Section>
  );
};

export default SignUp;
