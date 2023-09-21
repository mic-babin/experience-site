import React, { useContext, useEffect } from "react";
import {
  MenuToggler,
  Registration,
  Wrapper,
  Logo,
  ButtonGroup,
} from "./header.styles";
import { motion } from "framer-motion";
import { MenuContext } from "../../../context/menu.context";
import Menu from "../menu/menu.component";
import { useScrollBlock } from "../../../utils/block-scroll.hook";
import LogoSrc from "../../../assets/img/logo-experience.png";

const Header = () => {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [blockScroll, allowScroll] = useScrollBlock();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const contact = "M e n u";
  const registration = "I n s c r i p t i o n";
  useEffect(() => {
    if (showMenu) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [showMenu]);

  return (
    <>
      <Wrapper>
        <Logo src={LogoSrc} alt="Salon Expérience" />
        <ButtonGroup>
          <MenuToggler
            onClick={() => toggleMenu()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            {contact.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(1)" }}
                animate={{ opacity: 1, filter: "blur(0)" }}
                transition={{
                  duration: 1,
                  delay: index / 10 + 1.5,
                  ease: [0.11, 0, 0.5, 0],
                }}
              >
                {word}
              </motion.span>
            ))}
          </MenuToggler>
          <Registration
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 2,
            }}
          >
            {registration.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(1)" }}
                animate={{ opacity: 1, filter: "blur(0)" }}
                transition={{
                  duration: 1,
                  delay: index / 10 + 2.5,
                  ease: [0.11, 0, 0.5, 0],
                }}
              >
                {word}
              </motion.span>
            ))}
          </Registration>
        </ButtonGroup>
      </Wrapper>
      <Menu />
    </>
  );
};

export default Header;
