"use client";

import { TokenList } from "@/components/metamask/token-list";
import { ComponentPreview } from "@/components/ComponentPreview";

export function TokenListDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Standard"
        description="Token list with title and see all link"
        code={`<TokenList
  title="Tokens"
  seeAllHref="/tokens"
  onSeeAllClick={() => console.log("See all clicked")}
/>`}
      >
        <div className="w-full max-w-md">
          <TokenList
            title="Tokens"
            seeAllHref="/tokens"
            onSeeAllClick={() => console.log("See all clicked")}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Custom Tokens"
        description="Token list with custom token data"
        code={`<TokenList
  title="My Assets"
  tokens={[
    {
      symbol: "mUSD",
      name: "mUSD",
      balance: "0,5",
      fiatValue: "$20.000,00",
      priceChange: 5.2,
      iconUrl: "/mUSD-icon.svg",
    },
    {
      symbol: "mUSD",
      name: "mUSD",
      balance: "1.000,00",
      fiatValue: "$850,00",
      priceChange: -1.5,
      iconUrl: "/mUSD-icon.svg",
    },
    {
      symbol: "mUSD",
      name: "mUSD",
      balance: "50,00",
      fiatValue: "$750,00",
      priceChange: 3.8,
      iconUrl: "/mUSD-icon.svg",
    },
  ]}
  onSeeAllClick={() => console.log("See all clicked")}
/>`}
      >
        <div className="w-full max-w-md">
          <TokenList
            title="My Assets"
            tokens={[
              {
                symbol: "mUSD",
                name: "mUSD",
                balance: "0,5",
                fiatValue: "$20.000,00",
                priceChange: 5.2,
                iconUrl: "/mUSD-icon.svg",
              },
              {
                symbol: "mUSD",
                name: "mUSD",
                balance: "1.000,00",
                fiatValue: "$850,00",
                priceChange: -1.5,
                iconUrl: "/mUSD-icon.svg",
              },
              {
                symbol: "mUSD",
                name: "mUSD",
                balance: "50,00",
                fiatValue: "$750,00",
                priceChange: 3.8,
                iconUrl: "/mUSD-icon.svg",
              },
            ]}
            onSeeAllClick={() => console.log("See all clicked")}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading"
        description="Skeleton loading state"
        code={`<TokenList isLoading />`}
      >
        <div className="w-full max-w-md">
          <TokenList isLoading />
        </div>
      </ComponentPreview>
    </div>
  );
}
