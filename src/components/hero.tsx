import React from "react";
import Image from "next/image";
import CustomButton from "./customButton";

function Hero() {
  return (
    <div className="hero  ">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Explore the Freedom of the Open Road with{" "}
          <span className="text-primary">VelocityVoyage</span> Car Rental
        </h1>
        <p className="text-muted-foreground max-w-prose hero__subtitle">
          Welcome to the gateway of unforgettable journeys! Embark on your next
          adventure with ease and style.
        </p>
        <div className="flex space-x-10">
          <CustomButton
            type="button"
            disabled={false}
            className="bg-primary mt-10 rounded-xl text-white"
          >
            Explore Cars
          </CustomButton>
          <CustomButton
            type="button"
            disabled={false}
            className="bg-black mt-10 rounded-xl text-white"
          >
            Learn more {">"}
          </CustomButton>
        </div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image ">
          <Image
            src="/car.png"
            alt="hero_image"
            fill
            className="object-contain"
          />
          <div className="absolute rotate-45 xl:w-[600px] w-[400px] xl:-top-1/4 -right-1/2 bg-primary rounded-3xl  bg-repeat-round shadow-2xl -z-10  xl:h-screen h-[590px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
}
<CustomButton
  type="button"
  disabled={false}
  className="bg-primary mt-10 rounded-xl text-white"
>
  Explore Cars
</CustomButton>;
export default Hero;
