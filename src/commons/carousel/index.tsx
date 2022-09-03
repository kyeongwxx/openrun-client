import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import * as s from "./carousel.styles";
import { ICarouselProps } from "./carousel.types";

export default function MainSlider(props: ICarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <s.AdCarousel src={props.Src} color="#8be1f2" />
      <s.AdCarousel />
      <s.AdCarousel />
    </Slider>
  );
}
