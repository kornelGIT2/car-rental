"use client";
import { cn } from "@/lib/utils";
import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | undefined;
  disabled?: boolean;
  onClick?: () => void;
};

function CustomButton({
  children,
  className,
  type,
  disabled,
}: CustomButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(className, "custom-btn")}
      onClick={() => {}}
    >
      <span className="flex-1 font-semibold">{children}</span>
    </button>
  );
}

export default CustomButton;
