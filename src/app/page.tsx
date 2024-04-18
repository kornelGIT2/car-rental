"use client";
import About from "@/components/about";
import Cars from "@/components/cars/cars";
import Hero from "@/components/hero";
import QuestionSection from "@/components/questions";
import Search from "@/components/search/search";
import { SearchContext } from "@/context/searchContext";
import { useContext } from "react";
import Testimonials from "./testimonials/page";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const { activeSearch } = useContext(SearchContext);
  return (
    <main className="overflow-hidden relative ">
      <Hero />
      <Cars />
      <About />
      <Testimonials />
      <QuestionSection />
      <Toaster />
      <Search />
    </main>
  );
}
