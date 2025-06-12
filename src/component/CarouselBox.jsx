"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";

const CarouselBox = ({ images = [], alt = "carousel image" }) => {
  return (
    <div className="w-full h-[30rem]  overflow-hidden shadow-lg ">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <Image
              src={img}
              alt={`${alt} ${idx}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBox;
