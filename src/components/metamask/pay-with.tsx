"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface PayWithProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tokenSymbol?: string;
  tokenIconUrl?: string;
  networkIconUrl?: string;
  balance?: string;
  isLoading?: boolean;
}

export function PayWith({
  tokenSymbol = "mUSD",
  tokenIconUrl = "/mUSD-icon.svg",
  networkIconUrl,
  balance = "$0.00",
  isLoading = false,
  className,
  ...props
}: PayWithProps) {
  const [isPressed, setIsPressed] = React.useState(false);

  if (isLoading) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 rounded-full bg-[var(--color-background-subsection)] p-4",
          className
        )}
        aria-busy="true"
      >
        <Skeleton className="h-9 w-9 rounded-full" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
    );
  }

  return (
    <button
      className={cn(
        "inline-flex items-center gap-3 rounded-full bg-[var(--color-background-subsection)] p-4 transition-all duration-150",
        "hover:bg-[var(--color-background-section)]",
        "active:scale-[0.98] active:bg-[var(--color-background-muted)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-default)]",
        isPressed && "scale-[0.98] bg-[var(--color-background-muted)]",
        className
      )}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      {/* Stacked token icon with optional network badge */}
      <div className="relative flex-shrink-0 h-9 w-9">
        <Avatar className="h-9 w-9">
          <AvatarImage src={tokenIconUrl} alt={tokenSymbol} />
          <AvatarFallback className="bg-[var(--color-background-section)] text-default text-body-sm weight-semibold">
            {tokenSymbol?.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Text content */}
      <div className="flex items-center gap-1.5">
        <span className="text-body-md text-default weight-medium">
          Pay with {tokenSymbol}
        </span>
        <span className="text-alternative">•</span>
        <span className="text-body-md text-alternative weight-regular">
          {balance}
        </span>
      </div>

      {/* Chevron */}
      <ChevronDown size={18} className="ml-1 flex-shrink-0 text-alternative" />
    </button>
  );
}
