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
import LogoSrc from "../../../assets/img/logo-experience.svg";

const Header = ({ menu }) => {
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [blockScroll, allowScroll] = useScrollBlock();
  const isBrowser = typeof window !== "undefined";

  const scrollTop = () => {
    isBrowser && window.scrollTo(0, 0);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const contact = "M e n u";
  const registration = "I n s c r i p t i o n";
  const closed = "F e r m e r";
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <Logo src={LogoSrc} alt="Salon Expérience" onClick={scrollTop} />
        </motion.div>

        <ButtonGroup>
          {/* <MenuToggler
            onClick={() => toggleMenu()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            {!showMenu &&
              contact.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(1)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  transition={{
                    duration: 1,
                    delay: index / 10 + 0.5,
                    ease: [0.11, 0, 0.5, 0],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            {showMenu &&
              closed.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(1)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  transition={{
                    duration: 1,
                    delay: index / 10 + 0.5,
                    ease: [0.11, 0, 0.5, 0],
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </MenuToggler> */}
          <a
            style={{
              textDecoration: "none",
              display: "block",
              // marginTop: "6px",
            }}
            target="_blank"
            href="https://experience.lesaffaires.com/fr/registration/6511acd96961c66a33ccf8af?force_new_registration=true"
          >
            <Registration
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1,
              }}
            >
              {registration.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(1)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  transition={{
                    duration: 1,
                    delay: index / 10 + 1,
                    ease: [0.11, 0, 0.5, 0],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </Registration>
          </a>
        </ButtonGroup>
        <Menu menu={menu} />
      </Wrapper>
    </>
  );
};

export default Header;
