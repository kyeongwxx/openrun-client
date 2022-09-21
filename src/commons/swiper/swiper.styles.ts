import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 700px;
  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  background-color: ${(props) => props.color};
  @media (max-width: 767px) {
    height: 300px;
  }
`;

export const CustomSwiperSlideImg = styled.img<{ color: string }>`
  width: 90%;
  height: 500px;
  object-fit: contain;
  background-color: ${(props) => props.color};

  cursor: pointer;
  display: block;
  margin: auto;

  @media (max-width: 767px) {
    height: 300px;
  }
`;
