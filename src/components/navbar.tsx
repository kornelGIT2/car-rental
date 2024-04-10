import Link from "next/link";
import Image from "next/image";
import CustomButton from "./customButton";

import React from "react";

function Navbar() {
  return (
    <header className="w-full z-10">
      <nav className="max-w-[1440px] mx-auto w-full flex justify-between items-center sm:px-16 px-6 py-5">
        <Link
          href="/"
          className="flex justify-center items-center text-primary font-black tracking-widest text-2xl"
        >
          VelocityVoyage
        </Link>
        <Link
          href="/login"
          className="flex justify-center items-center  text-muted-foreground font-semibold tracking-wider text-lg"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
