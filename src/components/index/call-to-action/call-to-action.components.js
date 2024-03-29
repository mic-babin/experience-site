import React, { useState } from "react";
import {
  Section,
  BgWrapper,
  Col,
  Title,
  Kicker,
  Button,
} from "./call-to-action.styles";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import WaveTextAnimation from "../../common/wave-text-animation/wave-text-animation.component";
import { useInView } from "react-intersection-observer";
import Modal from "../../newsletter/modal/modal.component";

const CallToAction = ({ data }) => {
  const { title, kicker, button } = data;
  const s = { background: "#EC1A8D", color: "#000000", minHeight: "100%" };
  // const [show, setShow] = useState(false);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  // const handleClose = () => setShow(false);
  // const handleOpen = () => setShow(true);

  return (
    <Section s={s}>
      <BgWrapper>
        <div className="container">
          <div className="row">
            <Col className="col-lg-5">
              {title && <Title>{renderRichText(title)}</Title>}
              {kicker && <Kicker>{renderRichText(kicker)}</Kicker>}
            </Col>
            <Col className="col-lg-7" ref={inViewRef}>
              {button && (
                <Button
                  href="https://tc.lesaffaires.com/T/WF/12362/XeNsRz/Optin/fr-CA/Form.ofsys"
                  target="_blank"
                  initial={{
                    x: "-100",
                  }}
                  animate={
                    inView
                      ? {
                          x: ["0", "-100"],
                        }
                      : { x: "-100" }
                  }
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <WaveTextAnimation text={button} inView={inView} delay={1} />
                </Button>
              )}
            </Col>
          </div>
        </div>
      </BgWrapper>
      {/* <Modal show={show} handleClose={handleClose} /> */}
    </Section>
  );
};

export default CallToAction;
