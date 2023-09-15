import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { Section } from "./section-layout.styles";
import { ShouldStickContext } from "../../context/shouldStick.context";

const SectionLayout = ({ children, s }) => {
  const section = useRef(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { shouldStick } = useContext(ShouldStickContext);
  const isBrowser = typeof window !== "undefined";

  const handleResize = useCallback(() => {
    setWindowHeight(window.innerHeight);
    setSectionHeight(section.current ? section.current.clientHeight : 0);
  }, [section, windowHeight, sectionHeight, s.height]);

  useEffect(() => {
    handleResize();

    setTimeout(() => {
      handleResize();
    }, 11);

    if (isBrowser) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (isBrowser) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isBrowser, handleResize]);

  const sectionStyles = {
    background: s.background,
    color: s.color,
    top: s.maxHeight ? 0 : windowHeight - sectionHeight,
    position: shouldStick ? "sticky" : "relative",
    minHeight: s.height || "100vh",
    height: s.maxHeight,
    border: s.border,
  };

  return (
    <Section style={sectionStyles} ref={section}>
      {children}
    </Section>
  );
};

export default SectionLayout;
