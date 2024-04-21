"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function Card({
  id,
  name,
  image,
  type,
  stars,
  fuel,
  seats,
}: {
  id: number;
  name: string;
  image: string;
  type: string;
  stars: number;
  fuel: string;
  seats: number;
}) {
  const router = useRouter();

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-[600px] rounded-lg flex-col ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="text-muted-foreground">{type}</p>
      </div>
      <Image src={image} width={400} height={400} alt="car_image" />
      <div className="flex flex-col items-center gap-2">
        <div className="flex mb-4">
          {[...Array(5)].map((q, i) => {
            return (
              <svg
                key={i}
                className={` ${
                  stars > i ? "text-primary" : "text-gray-300"
                } w-4 h-4  ms-1`}
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
      <Button
        className="w-1/2 mx-auto mt-10"
        onClick={() => {
          router.push(`/car/${id}`);
        }}
      >
        View
      </Button>
    </div>
  );
}

export default Card;
