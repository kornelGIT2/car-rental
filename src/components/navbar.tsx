"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ReactLink } from "react-scroll";
import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/context/searchContext";
import { usePathname } from "next/navigation";
import SearchMobile from "./searchMobile";

function Navbar() {
  const { setActiveSearch } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setActiveSearch(true);
      } else {
        setActiveSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [header, setActiveSearch]);

  return (
    <header
      className={`${
        header
          ? "bg-white shadow-md xl:py-6 py-3  "
          : "bg-transparent shadow-none py-4"
      } fixed w-full  mx-auto transition-all duration-400 z-20`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            href="/"
            className="flex justify-center items-center text-primary font-black tracking-widest text-lg md:text-3xl"
          >
            <span className="text-black font-black">Car</span>Rental
          </Link>
          <div className="xl:hidden block">
            <Image
              src="/mobile_menu.svg"
              width={26}
              height={26}
              alt="mobile"
              className="cursor-pointer"
              onClick={() => {
                setNav(!nav);
              }}
            />
          </div>
        </div>
        <nav
          className={` ${
            nav
              ? `max-h-max py-8 px-4 xl:py-0 xl:px-0 bg-white`
              : `max-h-0 xl:max-h-max `
          } flex flex-col w-full  xl:bg-transparent xl:gap-y-0 gap-y-6 overflow-hidden font-bold xl:font-medium xl-flex-row xl:w-max 
        
       `}
        >
          <ul className="flex xl:flex-row flex-col xl:gap-10 gap-4 items-center ">
            <li className="p-2 rounded-lg pl-3 pr-3">
              {" "}
              {pathname === "/" ? (
                <ReactLink
                  className="cursor-pointer  font-bold text-black hover:text-primary hover:opacity-80"
                  smooth
                  to="cars"
                >
                  Explore Cars
                </ReactLink>
              ) : null}
            </li>
          </ul>
          <div className="">
            <SearchMobile />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
