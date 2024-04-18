import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function QuestionSection() {
  return (
    <section id="question" className="md:p-20 mb-20 section ">
      <div className="flex flex-col  mt-10 space-y-2 mx-auto md:text-start text-center max-w-[1400px]  ">
        <h1 className="text-xl font-medium ">Your questions, answered.</h1>{" "}
        <h2 className="text-4xl font-black text-primary">
          Renting a car in Poland
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-[1400px]  mx-auto p-8"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What do I need to rent a motorbike in Poland?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How old do I have to be to rent a motorbike in Poland?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What drivers licence category do I need to rent in Poland?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default QuestionSection;
