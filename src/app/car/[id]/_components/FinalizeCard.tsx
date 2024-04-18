"use client";
import { DatePickerWithRange } from "@/components/search/_components/date";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

function FinalizeCard({ rentalPrice }: { rentalPrice: number }) {
  const [date, setDate] = useState<any>(undefined);
  const [rentalDays, setRentalDays] = useState(5);

  useEffect(() => {
    let start = new Date(date?.from) as any;
    let end = new Date(date?.to) as any;
    const differenceInMs = Math.abs(end - start);

    // Convert milliseconds to days
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    if (differenceInDays) {
      setRentalDays(differenceInDays);
    } else {
      setRentalDays(0);
    }
  }, [date]);

  return (
    <div className="w-[22rem] pt-20 pb-20 fixed flex justify-center shadow-lg rounded-xl p-4 items-center">
      <div className="mt-4 w-full flex-col flex items-center gap-2">
        <h1 className="font-medium text-gray-700">
          {rentalDays} {rentalDays > 1 ? "days" : "day"} rental
        </h1>
        <span className="font-black text-primary text-3xl">
          {rentalPrice * rentalDays} $
        </span>

        <hr className="w-full  border-b border-slate-200 opacity-60 mt-4" />
        <div className="mt-4 text-sm flex flex-col gap-2">
          <label className="ml-1 text-muted-foreground">Pick rental date</label>
          <DatePickerWithRange setDate_={setDate} />
          <Button className="mt-4 uppercase text-[13px] font-bold tracking-wide">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FinalizeCard;
