"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TokenCell, TokenCellProps } from "./token-cell";
import { ChevronRight } from "lucide-react";

export interface TokenData extends Omit<TokenCellProps, "className"> {}

export interface TokenListProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  tokens?: TokenData[];
  seeAllHref?: string;
  onSeeAllClick?: () => void;
  isLoading?: boolean;
}

const defaultTokens: TokenData[] = [
  {
    symbol: "mUSD",
    name: "mUSD",
    balance: "1,45",
    fiatValue: "$2.450,32",
    priceChange: 2.5,
    iconUrl: "/mUSD-icon.svg",
  },
  {
    symbol: "mUSD",
    name: "mUSD",
    balance: "500,00",
    fiatValue: "$500,00",
    priceChange: 0.01,
    iconUrl: "/mUSD-icon.svg",
  },
  {
    symbol: "mUSD",
    name: "mUSD",
    balance: "250,00",
    fiatValue: "$1.234,56",
    priceChange: -4.2,
    iconUrl: "/mUSD-icon.svg",
  },
];

export function TokenList({
  title = "Tokens",
  tokens = defaultTokens,
  seeAllHref,
  onSeeAllClick,
  isLoading = false,
  className,
  ...props
}: TokenListProps) {
  const displayTokens = isLoading ? Array(3).fill(null) : tokens.slice(0, 3);

  return (
    <div className={cn("w-full", className)} {...props}>
      {/* Header */}
      <div className="mb-1 flex items-center justify-between px-1">
        <h2 className="text-body-md weight-semibold text-default">
          {title}
        </h2>
        {(seeAllHref || onSeeAllClick) && (
          seeAllHref ? (
            <Link
              href={seeAllHref}
              className="flex items-center gap-1 text-body-sm weight-medium text-alternative transition-colors hover:text-default"
            >
              See all
              <ChevronRight size={16} />
            </Link>
          ) : (
            <button
              onClick={onSeeAllClick}
              className="flex items-center gap-1 text-body-sm weight-medium text-alternative transition-colors hover:text-default"
            >
              See all
              <ChevronRight size={16} />
            </button>
          )
        )}
      </div>

      {/* Token Cells */}
      <div className="space-y-1 overflow-hidden rounded-xl bg-[var(--color-background-section)]">
        {displayTokens.map((token, index) => (
          <TokenCell
            key={index}
            {...(isLoading ? { isLoading: true, symbol: "", name: "", balance: "" } : token)}
          />
        ))}
      </div>
    </div>
  );
}
