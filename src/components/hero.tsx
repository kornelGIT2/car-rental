"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "./customButton";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="" id="home">
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Explore the <span className="text-primary">Freedom</span> of the
            Open Road
          </h1>
          <p className="text-muted-foreground max-w-prose hero__subtitle">
            Welcome to the gateway of unforgettable journeys! Embark on your
            next adventure with ease and style.
          </p>
          <div className="flex space-x-10">
            <Button
              asChild
              type="button"
              disabled={false}
              className="bg-primary mt-10  text-white flex justify-center items-center z-[90]"
            >
              <Link to="cars" smooth className="cursor-pointer">
                Explore Cars
              </Link>
            </Button>
            <Button
              type="button"
              disabled={false}
              className="bg-black mt-10  text-white hover:bg-opacity-80 hover:bg-black z-[90]"
            >
              Learn more {">"}
            </Button>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image ">
            <Image
              src="/car.png"
              alt="hero_image"
              fill
              className="object-contain md:-mt-20 -mt-10"
            />
            <div className="absolute rotate-45 xl:w-[400px]  w-[0px] xl:-top-1/3 -right-1/2 bg-primary rounded-3xl  bg-repeat-round shadow-2xl -z-10  xl:h-screen h-[690px] overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
