import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  // const ArrowFix = (arrowProps) => {
  //   const { carouselState, children, ...restArrowProps } = arrowProps;
  //   return <span {...restArrowProps}> {children} </span>;
  // };

  // const customLeftArrow = (
  //   <ArrowFix>
  //     <div className="absolute left-0 cursor-pointer text-gray-900">
  //       <BsFillArrowLeftCircleFill />
  //     </div>
  //   </ArrowFix>
  // );

  // const customRightArrow = (
  //   <ArrowFix>
  //     <div className="absolute right-0 text-center cursor-pointer bg-pink-600 rounded-full">
  //       <BsFillArrowRightCircleFill />
  //     </div>
  //   </ArrowFix>
  // );

  return (
    <div className="mb-8">
      <Carousel
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        swipeable={true}
        draggable={false}
        autoPlay={true}
        responsive={responsive}
        itemClass="px-4"
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
