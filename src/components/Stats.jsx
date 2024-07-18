import { stats } from "../constants";
import styles from "../style";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const settings = {
  //   dots: false, // Set to true if you want navigation dots
  //   infinite: true, // Enables infinite scrolling
  //   speed: 2000, // Speed of the transition in milliseconds
  //   slidesToShow: 4, // Number of slides to show at once
  //   slidesToScroll: 1, // Number of slides to scroll at once
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: 0, // Speed of the autoplay
  //   cssEase: "linear", // Linear easing for smooth scrolling
  //   pauseOnHover: false, // Optional: Disable pause on hover

  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Stats = () => (
  // <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
  //   <InfiniteMovingCards items={stats} direction="right" speed="slow" />
  // </section>
  <section className={`${styles.flexCenter} flex-row  sm:mb-20 mb-6`}>
    {/* <Slider {...settings}> */}
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
    {/* </Slider> */}
  </section>
);

export default Stats;
