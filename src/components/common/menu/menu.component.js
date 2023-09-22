import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MenuContext } from "../../../context/menu.context";
import {
  NavBg,
  Col1,
  MenuLinks,
  NavLink,
  LinkWrapper,
  ImageWrapper,
  LinkImage,
} from "./menu.styles";
import { NavLinkAnimation } from "./menu.animation.component";
import { ShouldStickContext } from "../../../context/shouldStick.context";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// TODO Could potentially check with array position, use navigate when possible and scroll the rest of time
const Menu = ({ menu }) => {
  const { menuLinks, backgroundImage } = menu;
  const { setShouldStick } = useContext(ShouldStickContext);
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [width, setWidth] = useState("0vw");
  const closeMenu = (to) => {
    setShowMenu(false);
    setTimeout(() => scroll(to), 50);
  };

  const scroll = (to) => {
    setShouldStick(false);
    setTimeout(() => {
      const el = document.getElementById(to.split("#")[1]);
      navigate(to);
      // el.scrollIntoView({
      //   behavior: "smooth",
      //   block: "end",
      // });
      setShouldStick(true);
    }, 50);
  };

  useEffect(() => {
    if (showMenu) {
      setWidth("100vw");

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1000);
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
              initial={{ x: "100vw", width: "0%", opacity: 0 }}
              animate={{ x: "0vw", width: "100vw", opacity: 1 }}
              exit={{ x: "100vw", width: "0%", opacity: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            >
              <GatsbyImage
                image={getImage(backgroundImage)}
                alt={backgroundImage.description}
                style={{ height: "100vh", width: "100vw" }}
              />
            </Col1>
          )}
        </AnimatePresence>
      </NavBg>
      <MenuLinks style={{ width: width }}>
        {showMenu && (
          <AnimatePresence>
            {menuLinks.map(({ id, title, link, image }, index) => (
              <LinkWrapper
                show={showMenu}
                key={id}
                {...NavLinkAnimation}
                transition={{ duration: 1, delay: 1.3 + index / 10 }}
              >
                <span>{"0" + (index + 1)}</span>
                <NavLink onClick={() => closeMenu(link)} className="clickable">
                  {title}
                </NavLink>
                <ImageWrapper className="image-wrapper">
                  <LinkImage image={getImage(image)} alt={image.description} />
                </ImageWrapper>
              </LinkWrapper>
            ))}
          </AnimatePresence>
        )}
      </MenuLinks>
    </>
  );
};

export default Menu;
