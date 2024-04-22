"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { cars } from "@/const/const";
import Card from "./card";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Slider() {
  let width = 0;
  let height = 0;
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  if (typeof document !== undefined) {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  }

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

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
    <div className="container mx-auto mb-16">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <h1 className="font-semibold text-primary text-lg md:text-2xl">
            Best Offers
          </h1>
          <h1 className="font-black text-3xl md:text-4xl">Cars for rent</h1>
        </div>
        <div className="flex  mt-4 items-end gap-4">
          <button
            onClick={handlePrevious}
            className="flex gap-1 justify-center items-center hover:opacity-90 opacity-60"
          >
            {" "}
            <Image
              src="/next2.svg"
              width={12}
              height={12}
              alt="next icon"
              className=" rotate-180"
            />{" "}
            <p className="font-semibold ">Previous</p>
          </button>
          <span className="opacity-60">{"•"}</span>
          <button
            onClick={handleNext}
            className="flex gap-1 text-black justify-center items-center hover:opacity-90 opacity-60"
          >
            <p className="font-semibold">Next</p>
            <Image
              src="/next2.svg"
              width={12}
              height={12}
              alt="next icon"
              className=""
            />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={
          windowDimensions.innerWidth < 1080
            ? 1
            : windowDimensions.innerWidth > 1400
            ? 3
            : 2
        }
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
