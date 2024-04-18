import React from "react";
import TestomonialsCard from "./_components/testimonialCard";

function Testimonials() {
  return (
    <section className="flex bg-gray-50 justify-center items-center section p-4 min-h-screen overflow-hidden flex-col gap-10">
      <h1 className="font-bold xl:text-4xl text-2xl">Our reviews</h1>
      <ul className="flex md:flex-row flex-col gap-10 ">
        {Array("Jan Kowalski", "Anna Nowak", "Jane Doe").map((card, i) => (
          <li key={i}>
            <TestomonialsCard name={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonials;
