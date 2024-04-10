"use client";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { manufacturers } from "@/const/const";
import Image from "next/image";

function SearchBar() {
  const [selectedCar, setSelectedCar] = useState<string>();
  const [query, setQuery] = useState("");

  const filteredCars =
    query === ""
      ? manufacturers
      : manufacturers.filter((car) => {
          return car.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="search-manufacturer ">
      <Combobox value={selectedCar} onChange={setSelectedCar}>
        <div className="w-full relative">
          <Combobox.Button className={"absolute mt-[14px]"}>
            <Image
              src="/mazda.svg"
              height={20}
              width={20}
              alt="car_logo"
              className="ml-4 opacity-50"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Mazda..."
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Combobox.Options
            static
            className=" p-2 w-full absolute  mt-2 max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <Combobox.Options>
              {filteredCars.map((person) => (
                <Combobox.Option
                  className={
                    "search-manufacturer__option hover:bg-primary hover:text-white cursor-pointer rounded-md"
                  }
                  key={person}
                  value={person}
                >
                  {person}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}
export default SearchBar;
