import React, { useRef } from "react";
import {
  Section,
  Wrapper,
  SignUpTitle,
  Grid,
  Col,
  Kicker,
  BgWrapper,
  Circle,
  W,
  Empty,
} from "./sign-up.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import TicketCard from "./ticket-card/ticket-card.component";
import { useElementSize } from "../../../utils/element-size.hook";
import HorizontalScrollLine from "./horizontal-scroll-line/horizontal-scroll-line.component";
import Title from "../../common/title/title.component";
import { useInView } from "react-intersection-observer";
import TicketCardLarge from "./ticket-card-large/ticket-card-large.component";

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
      <Wrapper ref={section}>
        <W>
          <BgWrapper>
            <Circle style={{ height: sectionSize.height }}></Circle>
            {lines}
            <HorizontalScrollLine />
          </BgWrapper>
          <div className="container">
            {title && (
              <SignUpTitle ref={inViewRef}>
                <Title
                  title={title}
                  width={172}
                  y={35}
                  textClass="signup-title"
                  inView={inView}
                  animationLoop={true}
                  wordSpeed={400}
                  lineDelay={1000}
                />
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
              <Col className="d-flex flex-column align-items-end">
                {tickets &&
                  tickets.map((ticket, index) => (
                    <React.Fragment key={index}>
                      <TicketCard ticket={ticket} />
                      <TicketCardLarge ticket={ticket} />
                    </React.Fragment>
                  ))}
              </Col>
            </Grid>
          </div>
        </W>
        <Empty></Empty>
      </Wrapper>
    </Section>
  );
};

export default SignUp;
