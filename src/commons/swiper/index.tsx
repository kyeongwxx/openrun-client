import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Pagination, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import * as s from "./swiper.styles";
import { useRouter } from "next/router";

// import required modules

export default function SwiperCustom() {
  const router = useRouter();
  const onClickGoToList = (url: string) => {
    router.push(url);
  };
  return (
    <>
      <s.CustomSwiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination, EffectFade]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <s.CustomSwiperSlideImg
            src={`https://storage.googleapis.com/openrun-storage/2022-09-21/fc148b67-3fc7-489c-acc0-684024638318/origin/mainCarousel1.jpeg`}
            onClick={() => onClickGoToList("/board/fashion/")}
            color="#fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <s.CustomSwiperSlideImg
            src={`https://storage.googleapis.com/openrun-storage/2022-09-21/d19e501f-566d-4e6e-99bc-0b5cc5d5df8f/origin/mainCarousel2.jpeg`}
            onClick={() => onClickGoToList("/board/toy/")}
            color="#fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <s.CustomSwiperSlideImg
            src={`https://storage.googleapis.com/openrun-storage/2022-09-21/700058a2-bc97-40a6-af9b-b03be5301ffc/origin/mainCarousel3.jpeg`}
            onClick={() => onClickGoToList("/board/digital/")}
            color="#fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <s.CustomSwiperSlideImg
            src={`https://storage.googleapis.com/openrun-storage/2022-09-21/93348d09-e0ad-498c-b62f-9dff4b6785e8/origin/mainCarousel4.jpeg`}
            onClick={() => onClickGoToList("/board/acc/")}
            color="#fff"
          />
        </SwiperSlide>
        <SwiperSlide>
          <s.CustomSwiperSlideImg
            src={`https://storage.googleapis.com/openrun-storage/2022-09-21/df14b4f4-02ea-4f6c-8e69-49cb6edf9b6b/origin/mainCarousel5.jpeg`}
            onClick={() => onClickGoToList("/board/food/")}
            color="#fff"
          />
        </SwiperSlide>
      </s.CustomSwiper>
    </>
  );
}
