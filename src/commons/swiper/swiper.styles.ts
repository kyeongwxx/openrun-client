import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  /* height: 450px; */

  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  width: 100%;

  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const CustomSwiperSlideImg = styled.img`
  /* background-color: ${(props) => props.color}; */

  width: 100%;
  cursor: pointer;
  display: block;
  margin: auto;

  @media (max-width: 767px) {
    height: 300px;
  }
`;
