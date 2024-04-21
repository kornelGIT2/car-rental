"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cars } from "@/const/const";
import Card from "./card";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  let width = 0;
  let height = 0;

  if (typeof document !== undefined) {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  }

  const [windowDimensions, setWindowDimensions] = useState({
    innerWidth: width,
    innerHeight: height,
  });

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = windowDimensions;
      return {
        innerWidth,
        innerHeight,
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={
          windowDimensions.innerWidth < 1080
            ? 1
            : windowDimensions.innerWidth > 1400
            ? 3
            : 2
        }
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cars.map((car) => {
          return (
            <SwiperSlide key={car.id}>
              <Card {...car} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
