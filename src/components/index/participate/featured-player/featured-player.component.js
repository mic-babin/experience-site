import React, { useRef, useState } from "react";
import {
  BgWrapper,
  Wrapper,
  StartButton,
  popOutAnimation,
} from "./featured-player.styles";
import ReactPlayer from "react-player";
import { useScroll, useSpring } from "framer-motion";
import { Trans } from "react-i18next";
import { AnimatePresence } from "framer-motion";
const FeaturedPlayer = ({ video }) => {
  const section = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["-0.7 end", "0.8 end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Wrapper ref={section} style={{ scale: scaleX }}>
      {video && (
        <BgWrapper onClick={togglePlay}>
          <AnimatePresence>
            {!isPlaying && (
              <StartButton
                onClick={togglePlay}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={popOutAnimation}
              >
                <Trans>play</Trans>
              </StartButton>
            )}
          </AnimatePresence>
          <ReactPlayer
            priority
            loop
            url={"https:" + video.file.url}
            playing={isPlaying}
            height="100%"
            width="100%"
          />
        </BgWrapper>
      )}
    </Wrapper>
  );
};

export default FeaturedPlayer;
