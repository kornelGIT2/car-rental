import { cn } from "@/lib/utils";
import React from "react";

const WidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex  mx-auto w-full px-2.5 md:px-20 ", className)}>
      {children}
    </div>
  );
};

export default WidthWrapper;
