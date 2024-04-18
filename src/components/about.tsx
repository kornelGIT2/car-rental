import { about } from "@/const/const";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-white flex items-center  justify-center p-10"
    >
      <div className="flex flex-col md:gap-10 gap-10 justify-center items-center w-full text-center max-w-[1400px] mx-auto p-4 ">
        <h1 className="font-bold text-4xl">
          Search, Compare, <span className="text-primary">Rent</span>
        </h1>
        <ul className="flex md:flex-row flex-col md:gap-20 justify-center items-center ">
          {Object.values(about).map((el) => {
            return (
              <li
                className="flex flex-col  items-center gap-2 max-w-[300px] h-[250px]"
                key={el.title}
              >
                <Image
                  src={el.icon}
                  width={38}
                  height={38}
                  alt="img"
                  className="mt-6 mb-2"
                />
                <span className="font-semibold text-xl">{el.title}</span>
                <p className="font-medium text-muted-foreground">{el.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default About;
