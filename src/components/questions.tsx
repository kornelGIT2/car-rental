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
              What do I need to rent a car in Poland?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How old do I have to be to rent a car in Poland?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What drivers licence category do I need to rent in Poland?
            </AccordionTrigger>
            <AccordionContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default QuestionSection;
