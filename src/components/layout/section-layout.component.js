import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { Section } from "./section-layout.styles";
import { ShouldStickContext } from "../../context/shouldStick.context";
import { useIsSmall } from "../../utils/media-query.hook";

const SectionLayout = ({ children, s }) => {
  const section = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { shouldStick } = useContext(ShouldStickContext);
  const isBrowser = typeof window !== "undefined";
  const isSmall = useIsSmall();

  const handleResize = useCallback(() => {
    setWindowHeight(window.innerHeight);
    setSectionHeight(section.current ? section.current.clientHeight : 0);
  }, [section, windowHeight, sectionHeight, s.height]);

  useEffect(() => {
    handleResize();

    setTimeout(() => {
      handleResize();
    }, 11);

    if (!isSmall) {
      setTimeout(() => {
        handleResize();
      }, 1000);
    }

    if (isBrowser && !isSmall) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (isBrowser && !isSmall) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isBrowser, isSmall]);

  const sectionStyles = {
    top:
      isSmall && s.fullScreen
        ? 103
        : isSmall
        ? windowHeight - sectionHeight + 158
        : windowHeight - sectionHeight,

    // position: shouldStick ? "sticky" : "relative",
    position: "sticky",
    ...s,
  };

  return (
    <Section style={sectionStyles} ref={section}>
      {children}
    </Section>
  );
};

export default SectionLayout;
