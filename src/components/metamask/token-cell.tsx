import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export interface TokenCellProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol: string;
  name: string;
  balance: string;
  fiatValue?: string;
  iconUrl?: string;
  priceChange?: number; // percentage
  isLoading?: boolean;
  tagLabel?: string; // Shows a badge next to the name when provided
}

export function TokenCell({
  symbol,
  name,
  balance,
  fiatValue,
  iconUrl,
  priceChange,
  isLoading,
  tagLabel,
  className,
  ...props
}: TokenCellProps) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-4 rounded-xl p-4 hover:bg-[var(--color-background-subsection)]">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
        <div className="flex flex-col items-end space-y-2">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    );
  }

  const isPositive = priceChange && priceChange >= 0;

  return (
    <div
      className={cn(
        "flex cursor-pointer items-center gap-4 rounded-xl p-4 transition-colors hover:bg-[var(--color-background-subsection)]",
        className
      )}
      {...props}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src={iconUrl} />
        <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
      </Avatar>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 truncate text-body-md text-default weight-semibold">
          {name}
          {tagLabel && (
            <Badge variant="secondary" className="px-1.5 py-0.5 leading-none text-[10px]">
              {tagLabel}
            </Badge>
          )}
        </div>
        <div className="truncate text-body-sm text-alternative">
          {balance} {symbol}
        </div>
      </div>

      <div className="text-right">
        <div className="text-body-md text-default weight-medium">
          {fiatValue || "$0.00"}
        </div>
        {priceChange !== undefined && (
          <div
            className={cn(
              "text-body-sm weight-semibold",
              isPositive ? "text-success-default" : "text-error-default"
            )}
          >
            {isPositive ? "+" : ""}
            {priceChange}%
          </div>
        )}
      </div>
    </div>
  );
}
