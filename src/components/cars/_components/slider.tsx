import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cars } from "@/const/const";
import Card from "./card";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={
          windowDimensions.width < 1080
            ? 1
            : windowDimensions.width > 1400
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
