import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import * as s from "./carousel.styles";
import { ICarouselProps } from "./carousel.types";
import { CustomSlider } from "./slicCustom.styles";

export default function MainSlider(props: ICarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.535, 0.600, 0.340, 0.785)",
    appendDots: (dots: any) => <ul> {dots} </ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <CustomSlider {...settings}>
      <s.AdCarousel src={props.Src[0]} color="#5358D6" />
      <s.AdCarousel src={props.Src[1]} color="#fff" />
      <s.AdCarousel src={props.Src[2]} color="#111" />
      <s.AdCarousel src={props.Src[3]} color="#fff" />
      <s.AdCarousel src={props.Src[4]} color="#fff" />
    </CustomSlider>
  );
}
