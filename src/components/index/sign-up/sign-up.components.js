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
import FlipTextAnimation from "../../common/flip-text-animation/flip-text-animation.component";
import { useInView } from "react-intersection-observer";

const SignUp = ({ data }) => {
  const { title, kicker, tickets } = data;
  const s = { background: "#3F3AEF", color: "white", minHeight: "100vh" };

  const section = useRef();
  const sectionSize = useElementSize(section);
  const lines = [];
  for (let i = 0; i < 10; i++) {
    lines.push(
      <HorizontalScrollLine key={i} index={i} height={sectionSize.height} />
    );
  }

  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Section s={s}>
      <div ref={section}>
        <BgWrapper>
          <Circle style={{ height: sectionSize.height }}></Circle>
          {lines}
          <HorizontalScrollLine />
        </BgWrapper>
        <div className="container">
          {title && (
            <SignUpTitle ref={inViewRef}>
              <FlipTextAnimation text={title} inView={inView} delay={0} />
            </SignUpTitle>
          )}
          <Grid>
            <Col>
              {kicker && (
                <Kicker
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {renderRichText(kicker)}
                </Kicker>
              )}
            </Col>
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
