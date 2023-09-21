import React from "react";
import { AnimatePresence } from "framer-motion";
import { Col } from "./animated-col.styles";

const AnimatedCol = ({ show, children, ...animationProps }) => {
  return (
    <AnimatePresence>
      {show && (
        <Col
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          {...animationProps}
        >
          {children}
        </Col>
      )}
    </AnimatePresence>
  );
};

export default AnimatedCol;
