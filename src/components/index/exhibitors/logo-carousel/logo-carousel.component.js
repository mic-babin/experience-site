import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

import { Col } from "../exhibitors.styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LogoCarousel = ({ logos }) => {
  const [pairs, setPairs] = useState(null);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    //   slidesToSlide: 1, // optional, default to 1.
    // },
  };

  useEffect(() => {
    let pairArr = splitArrayIntoPairs(logos);

    setPairs(pairArr);
  }, []);

  const splitArrayIntoPairs = (arr) => {
    const pairs2 = [];
    while (arr?.length) {
      const pair = arr.splice(0, 2);
      pairs2.push(pair);
    }
    return pairs2;
  };

  console.log(pairs);

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={2000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {!logos && <div style={{ display: "none" }}>item 0</div>}
      {logos &&
        pairs &&
        pairs.map((pair, index) => (
          <Col>
            {pair &&
              pair.map((item, index) => (
                <a key={item.id} href={item.link} target="_blank">
                  <div>
                    <GatsbyImage
                      image={getImage(item.logo)}
                      alt={item.description}
                    ></GatsbyImage>
                  </div>
                </a>
              ))}
          </Col>
        ))}
    </Carousel>
  );
};

export default LogoCarousel;
