import React from "react";
import Slider from "./_components/slider";
import dynamic from "next/dynamic";

const SliderDynamic = dynamic(
  () => {
    return import("./_components/slider");
  },
  { ssr: false }
);

function Cars() {
  return (
    <section
      id="cars"
      className="min-h-screen bg-zinc-50 section flex justify-center items-center flex-col"
    >
      <SliderDynamic />
    </section>
  );
}

export default Cars;
