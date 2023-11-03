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
import { getImage } from "gatsby-plugin-image";
import ReactPlayer from "react-player";
import { useIsLarge } from "../../../utils/media-query.hook";

// TODO Could potentially check with array position, use navigate when possible and scroll the rest of time
const Menu = ({ menu }) => {
  const { menuLinks, backgroundVideo } = menu;
  const { setShouldStick } = useContext(ShouldStickContext);
  const { showMenu, setShowMenu } = useContext(MenuContext);
  const [width, setWidth] = useState("0vw");
  const closeMenu = (to) => {
    setShowMenu(false);
    setTimeout(() => scroll(to), 50);
  };

  const isLarge = useIsLarge();

  const scroll = (to) => {
    setShouldStick(false);
    setTimeout(() => {
      if (to.includes("https")) window.open(to, "_blank");
      else {
        navigate(to);
      }
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
              <div className="player-wrapper">
                <ReactPlayer
                  priority="true"
                  autoPlay
                  loop
                  muted
                  url={"https:" + backgroundVideo.file.url}
                  playing={true}
                />
              </div>
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
                {!isLarge && (
                  <ImageWrapper
                    className="image-wrapper"
                    style={{
                      transform: `rotate(${
                        index * 5 - 13
                      }deg) translateY(-40%)`,
                    }}
                  >
                    {image && <LinkImage image={getImage(image)} alt="" />}
                  </ImageWrapper>
                )}
              </LinkWrapper>
            ))}
          </AnimatePresence>
        )}
      </MenuLinks>
    </>
  );
};

export default Menu;
