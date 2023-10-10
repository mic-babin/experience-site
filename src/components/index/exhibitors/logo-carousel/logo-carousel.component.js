import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import { LogoWrapper, Col } from "./logo-carousel.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LogoCarousel = (props) => {
  const logos = props.logos;
  const [pairs, setPairs] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 991, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 300 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const splitArrayIntoPairs = (arr) => {
    const pairs2 = [];
    while (arr?.length) {
      const pair = arr.splice(0, 2);
      pairs2.push(pair);
    }
    return pairs2;
  };

  useEffect(() => {
    let pairArr = splitArrayIntoPairs(logos);
    setPairs(pairArr);
  }, [logos]);

  return (
    <>
      {logos && (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          deviceType={props.deviceType}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {!logos && <div style={{ display: "none" }}>item 0</div>}
          {logos &&
            pairs &&
            pairs.map((pair, index) => (
              <Col key={index}>
                {pair &&
                  pair.map((item) => (
                    <LogoWrapper>
                      {item.logo && (
                        <GatsbyImage image={getImage(item.logo)} alt="Logo" />
                      )}
                    </LogoWrapper>
                  ))}
              </Col>
            ))}
        </Carousel>
      )}
    </>
  );
};

export default LogoCarousel;
