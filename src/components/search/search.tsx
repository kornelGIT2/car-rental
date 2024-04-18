"use client";
import { SearchContext } from "@/context/searchContext";
import React, { useContext } from "react";
import CustomButton from "../customButton";
import Location from "./_components/location";
import { DatePickerWithRange } from "./_components/date";
import { motion } from "framer-motion";
import { DatePickerForm } from "./_components/dateForm";
function Search() {
  const { activeSearch } = useContext(SearchContext);

  return (
    <motion.div
      layoutId="activeSection"
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      className={`${
        activeSearch
          ? "top-[84px]  w-full"
          : "mx-auto left-0 right-0 w-1/2  bottom-20 max-w-[1400px]"
      } transition-all duration-700 fixed w-full mx-auto z-10`}
    >
      <div
        className={` ${
          activeSearch
            ? "bg-white rounded-none xl:h-[120px]"
            : "bg-white rounded-2xl py-8 xl:pr-4 xl:h-[120px]"
        } hidden xl:flex items-center w-full relative shadow-lg`}
      >
        <div className="flex items-center  px-6 xl:px-0 justify-around m-4 w-full ">
          <DatePickerForm />
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
