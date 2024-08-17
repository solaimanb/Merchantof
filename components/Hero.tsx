"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const slidesData = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
  { id: 4, content: "Slide 4" },
];

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="bg-gray-300 my-4"
    >
      {slidesData.map((slide) => (
        <SwiperSlide key={slide.id} className="p-10 min-h-[50vh]">
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
