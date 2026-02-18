import { cn } from "@/lib/utils";
import React from "react";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex animate-gradient-text bg-[length:200%_auto] bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
