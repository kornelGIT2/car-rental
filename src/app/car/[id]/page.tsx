import React from "react";
import { cars, reviews } from "@/const/const";
import Image from "next/image";
import FinalizeCard from "./_components/FinalizeCard";
import { Button } from "@/components/ui/button";

function Car({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const carID = parseInt(params.id as string);

  const getCarDetails = cars.filter((car) => car.id === carID);

  const filteredReviews = reviews.filter((review) => carID === review.carID);

  return (
    <section className="mx-auto max-w-screen-lg  section p-4 min-h-screen overflow-hidden gap-10 flex flex-col md:grid md:grid-cols-12">
      <div className="col-span-8  flex-col flex items-center">
        <div>
          <Image
            src={getCarDetails[0].image}
            height={400}
            width={400}
            alt="image"
          />
        </div>
        <div className="w-full justify-start flex items-start flex-col">
          <div className="flex items-center justify-center mb-4">
            <Image src={"/location.svg"} height={24} width={24} alt="image" />
            <h3 className="font-medium text-primary">Warszawa, Poland</h3>
          </div>
          <h1 className="text-4xl font-black">{getCarDetails[0].name}</h1>
          <h1 className="text-lg tracking-widest text-muted-foreground mt-2">
            {getCarDetails[0].type}
          </h1>
          <div className="mt-6">
            {" "}
            <ul className="flex gap-6 font-medium text-gray-700 text-sm">
              <li className="flex gap-1">
                <Image src={"/seat.svg"} height={15} width={15} alt="image" />
                <span className="">5</span>
              </li>
              <li className="flex gap-1">
                <Image src={"/fuel2.svg"} height={15} width={15} alt="image" />
                <span className="">{getCarDetails[0].fuel}</span>
              </li>

              <li className="flex gap-1">
                <Image src={"/speed.svg"} height={15} width={15} alt="image" />
                <span className="">{getCarDetails[0].speed + " km/h"}</span>
              </li>
              <li className="flex gap-1">
                <Image src={"/gear.svg"} height={15} width={15} alt="image" />
                <span className="">{getCarDetails[0].gear}</span>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-b border-slate-100 opacity-90 w-full mt-10 mb-10" />
        <div className="flex justify-start w-full space-x-2 flex-col space-y-6">
          <h1 className="font-bold md:text-3xl text-2xl">
            <span className="text-primary"> Included</span> in the price
          </h1>
          <ul className="flex flex-col space-y-2  text-md">
            <li className="flex gap-2">
              <div className="flex space-x-1">
                <Image
                  src="/check.svg"
                  height={14}
                  width={14}
                  alt="check"
                  className="-mb-[1px]"
                />{" "}
                <span className="text-green-500">Free </span>
              </div>{" "}
              Breakdown Assistance
            </li>
            <li className="flex gap-2">
              <div className="flex space-x-1">
                <Image
                  src="/check.svg"
                  height={14}
                  width={14}
                  alt="check"
                  className="-mb-[1px]"
                />{" "}
                <span className="text-green-500">Free </span>
              </div>{" "}
              Theft Insurance
            </li>
            <li className="flex gap-2">
              <div className="flex space-x-1">
                <Image
                  src="/check.svg"
                  height={14}
                  width={14}
                  alt="check"
                  className="-mb-[1px]"
                />{" "}
                <span className="text-green-500">Free </span>
              </div>
              Accident Insurance
            </li>
          </ul>
        </div>
        <hr className="border-b border-slate-100 opacity-90 w-full mt-10 mb-10" />
        <div className="flex justify-start w-full space-x-2 flex-col space-y-6">
          <h1 className="font-bold md:text-3xl text-2xl">
            Our <span className="text-primary">Rental Policy</span>
          </h1>
          <ul className="flex flex-col gap-8">
            <li className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">Reservation and Booking</h1>
              <ul className="flex flex-col gap-2">
                <li className="">
                  <span className="font-semibold">Reservation:</span>{" "}
                  Reservations can be made online through our website, via
                  phone, or in person at our rental location. We recommend
                  making reservations at least 24 hours in advance to ensure
                  availability.
                </li>
                <li>
                  <span className="font-semibold">Booking Requirements:</span>{" "}
                  Renters must be at least 21 years old with a valid driver's
                  license and a major credit card in their name. Additional age
                  restrictions and requirements may apply for certain vehicle
                  types.
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Rental Rates and Charges</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <span className="font-semibold">Rental Rates:</span> Rental
                  rates are determined based on the type of vehicle, rental
                  duration, and any additional services requested. Rates are
                  subject to change based on demand and availability.
                </li>
                <li>
                  <span className="font-semibold">Additional Charges: </span>
                  Additional charges may apply for extra mileage, fuel, late
                  returns, cleaning fees, tolls, and other applicable fees as
                  outlined in the rental agreement.
                </li>
              </ul>
            </li>
          </ul>
          <Button>Click here for more information</Button>
        </div>

        <hr className="border-b border-slate-100 opacity-90 w-full mt-10 mb-10" />
        <div className="flex justify-start w-full flex-col mb-10">
          <h1 className="font-black tracking-wide mb-10">Latest Reviews</h1>
          <ul className="flex flex-col gap-10 ml-4">
            {filteredReviews.map((review, id) => {
              return (
                <li key={id} className="flex flex-col space-y-2">
                  <div className="flex gap-2 items-center">
                    <h1 className="font-bold text-sm">{review.reviewer}</h1>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <span>•</span>
                      <span className="text-sm">{review.date}</span>
                      <span>•</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((q, i) => {
                        return (
                          <svg
                            key={i}
                            className={` ${
                              review.stars > i
                                ? "text-primary"
                                : "text-gray-300"
                            } w-3 h-3  ms-1`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                  <text className="text-muted-foreground">{review.text}</text>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-span-4 ">
        <FinalizeCard rentalPrice={getCarDetails[0].rentalPrice} />
      </div>
    </section>
  );
}

export default Car;
