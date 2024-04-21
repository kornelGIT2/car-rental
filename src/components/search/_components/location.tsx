import React, { useState } from "react";
import { locations } from "@/const/const";
import { FaMapLocation } from "react-icons/fa6";
import Image from "next/image";
import { Menu } from "@headlessui/react";

function Location({ activeSearch }: { activeSearch: boolean }) {
  const [location, setLocation] = useState("Select location");
  return (
    <Menu as="div" className={""}>
      <div className="relative flex-1 ">
        <Menu.Button className={"flex flex-col"}>
          <div className="">
            <Image
              src="/location.svg"
              width={24}
              height={24}
              alt="location"
              className="absolute -ml-6 -mt-[1px]"
            />
            <h1 className="font-black flex">{location}</h1>
            <p>Select location</p>
          </div>
        </Menu.Button>
        <Menu.Items
          className={`${
            activeSearch ? "top-14 " : "transform -translate-y-56"
          }   absolute xl:-left-14 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <ul className="bg-white p-4 flex-col space-y-2 rounded-2xl">
            {" "}
            {locations.map((location, i) => {
              return (
                <li
                  className="hover:text-primary font-semibold cursor-pointer hover:bg-gray-50 p-2 rounded-xl"
                  key={i}
                  onClick={() => {
                    setLocation(location);
                  }}
                >
                  {location}
                </li>
              );
            })}
          </ul>
        </Menu.Items>
      </div>
    </Menu>
  );
}

export default Location;
