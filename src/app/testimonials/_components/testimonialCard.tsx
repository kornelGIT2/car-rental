import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

function TestimonialsCard({ name }: { name: string }) {
  return (
    <div className="shadow-lg mx-auto w-full max-w-[400px] h-[400px] rounded-2xl bg-white ">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 flex flex-col justify-center items-center p-6 text-center gap-5">
          <Image
            src="/apostrophe.svg"
            width={55}
            height={55}
            alt="apostrophe"
          />
          <p className="font-semibold">
            Fantastic experience with the car rental company! The car was clean,
            well-maintained, and ran smoothly. The staff was friendly and
            professional. Will definitely use again!
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <Avatar>
              <AvatarImage src="avatar.jpg" />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <h1 className="font-bold text-md">{name}</h1>
            <p className="font-medium text-muted-foreground text-sm">
              IT Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
