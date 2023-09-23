import React, { useRef, useState } from "react";
import {
  BgWrapper,
  Wrapper,
  StartButton,
  popOutAnimation,
  ImageWrapper,
} from "./featured-player.styles";
import ReactPlayer from "react-player";
import { useScroll, useSpring } from "framer-motion";
import { Trans } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FeaturedPlayer = ({ video, image }) => {
  const isBrowser = typeof window !== "undefined";
  const section = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [first, setFirst] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["-0.7 end", "0.8 end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log("first", first, "isPlaying", isPlaying);

  return (
    <Wrapper ref={section} style={{ scale: scaleX }}>
      {video && (
        <BgWrapper onClick={togglePlay}>
          <AnimatePresence>
            {!isPlaying && first && (
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
          {isBrowser && (
            <ReactPlayer
              priority
              loop
              url={"https:" + video.file.url}
              light={
                <ImageWrapper>
                  <GatsbyImage
                    image={getImage(image)}
                    alt={image.description}
                    objectFit="cover"
                  />
                </ImageWrapper>
              }
              playing={isPlaying}
              onStart={() => {
                setIsPlaying(true);
                setFirst(true);
              }}
              playIcon={
                <AnimatePresence>
                  {!isPlaying && (
                    <StartButton
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={popOutAnimation}
                    >
                      <Trans>play</Trans>
                    </StartButton>
                  )}
                </AnimatePresence>
              }
              height="100%"
              width="100%"
              config={{
                fileConfig: {
                  attributes: {
                    autoPlay: true,
                    autoPlay:
                      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                      !window.MSStream,
                  },
                },
              }}
            />
          )}
        </BgWrapper>
      )}
    </Wrapper>
  );
};

export default FeaturedPlayer;
