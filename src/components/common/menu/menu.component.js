import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MenuContext } from "../../../context/menu.context";
import {
  NavBg,
  Col1,
  Col2,
  Col3,
  MenuLinks,
  NavLink,
  LinkWrapper,
} from "./menu.styles";
import { NavLinkAnimation } from "./menu.animation.component";
import { ShouldStickContext } from "../../../context/shouldStick.context";
import ReactPlayer from "react-player";
import { navigate } from "gatsby";
import { menuData } from "./menu.data";

// TODO Could potentially check with array position, use navigate when possible and scroll the rest of time
const Menu = () => {
  const { setShouldStick } = useContext(ShouldStickContext);
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [width, setWidth] = useState("0vw");
  const closeMenu = (to) => {
    setShowMenu(false);
    setTimeout(() => scroll(to), 10);
  };

  const scroll = (to) => {
    setShouldStick(false);
    setTimeout(() => {
      const el = document.getElementById(to.split("#")[1] + "-scroll");
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setShouldStick(true);
    }, 10);
  };

  useEffect(() => {
    if (showMenu) {
      setWidth("100vw");
    } else {
      setTimeout(() => setWidth("0vw"), 1500);
    }

    return () => {};
  }, [showMenu, width]);

  return (
    <>
      <NavBg style={{ width: width }}>
        <AnimatePresence>
          {showMenu && (
            <Col1
              initial={{ x: "20vw", width: "0%", opacity: 0 }}
              animate={{ x: "0vw", width: "20%", opacity: 1 }}
              exit={{ x: "20vw", width: "0%", opacity: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            ></Col1>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMenu && (
            <Col2
              initial={{ x: "60vw", width: "0%", opacity: 0 }}
              animate={{ x: "0vw", width: "60%", opacity: 1 }}
              exit={{ x: "60vw", width: "0%", opacity: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              {/* <ReactPlayer
                priority
                autoPlay
                loop
                muted
                playing={true}
                height="100%"
                width="100%"
              /> */}
            </Col2>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showMenu && (
            <Col3
              initial={{ x: "20vw", width: "0%", opacity: 0 }}
              animate={{ x: "0vw", width: "20%", opacity: 1 }}
              exit={{ x: "20vw", width: "0%", opacity: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            ></Col3>
          )}
        </AnimatePresence>
      </NavBg>
      <MenuLinks style={{ width: width }}>
        {showMenu && (
          <AnimatePresence>
            {menuData.map(({ to, text }, index) => (
              <LinkWrapper
                show={showMenu}
                key={index}
                {...NavLinkAnimation}
                transition={{ duration: 1, delay: 1.3 + index / 10 }}
              >
                <span>{"0" + (index + 1)}</span>
                <NavLink onClick={() => closeMenu(to)} className="clickable">
                  {text}
                </NavLink>
              </LinkWrapper>
            ))}
          </AnimatePresence>
        )}
      </MenuLinks>
    </>
  );
};

export default Menu;
