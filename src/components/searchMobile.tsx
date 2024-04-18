import React from "react";
import Location from "./search/_components/location";
import { DatePickerWithRange } from "./search/_components/date";
import CustomButton from "./customButton";
import { DatePickerForm } from "./search/_components/dateForm";

function SearchMobile() {
  return (
    <div className="xl:hidden">
      <div className="container mx-auto flex justify-center flex-col items-center gap-4rounded-xl p-2 pt-4 pb-4">
        <DatePickerForm />
      </div>
    </div>
  );
}

export default SearchMobile;
