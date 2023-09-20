import React, { useRef } from "react";
import {
  Section,
  SignUpTitle,
  Grid,
  Col,
  Kicker,
  Empty,
  BgWrapper,
} from "./sign-up.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import TicketCard from "./ticket-card/ticket-card.component";
import LoopingBg from "./looping-bg/looping-bg.component";
import { useElementSize } from "../../../utils/element-size.hook";
import Circle from "./circle/circle.component";

const SignUp = ({ data }) => {
  const { title, kicker, tickets } = data;
  const s = { background: "#3F3AEF", color: "white" };
  const circles = [0, 1, 2, 3, 2, 1, 0];
  const section = useRef();
  const sectionSize = useElementSize(section);
  return (
    <Section s={s}>
      <div ref={section}>
        <BgWrapper>
          <LoopingBg speed="10" direction="right">
            {circles.map((circle, index) => (
              <Circle
                key={index}
                height={sectionSize.height}
                width={sectionSize.width}
                index={circle}
              />
            ))}
          </LoopingBg>
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
