import { TokenCell } from "@/components/metamask/token-cell";
import { ComponentPreview } from "@/components/ComponentPreview";

export function TokenCellDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Standard"
        description="Token with positive price change"
        code={`<TokenCell
  symbol="mUSD"
  name="mUSD"
  balance="1,45"
  fiatValue="$2.450,32"
  priceChange={2.5}
  iconUrl="/mUSD-icon.svg"
/>`}
      >
        <div className="w-full max-w-md">
          <TokenCell
            symbol="mUSD"
            name="mUSD"
            balance="1,45"
            fiatValue="$2.450,32"
            priceChange={2.5}
            iconUrl="/mUSD-icon.svg"
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Negative Change"
        description="Token with negative price change"
        code={`<TokenCell
  symbol="mUSD"
  name="mUSD"
  balance="250,00"
  fiatValue="$1.234,56"
  priceChange={-4.2}
  iconUrl="/mUSD-icon.svg"
/>`}
      >
        <div className="w-full max-w-md">
          <TokenCell
            symbol="mUSD"
            name="mUSD"
            balance="250,00"
            fiatValue="$1.234,56"
            priceChange={-4.2}
            iconUrl="/mUSD-icon.svg"
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Tag"
        description="Token cell with tag badge next to name"
        code={`<TokenCell
  symbol="mUSD"
  name="mUSD"
  balance="1,45"
  fiatValue="$2.450,32"
  priceChange={2.5}
  iconUrl="/mUSD-icon.svg"
  tagLabel="40x"
/>`}
      >
        <div className="w-full max-w-md">
          <TokenCell
            symbol="mUSD"
            name="mUSD"
            balance="1,45"
            fiatValue="$2.450,32"
            priceChange={2.5}
            iconUrl="/mUSD-icon.svg"
            tagLabel="40x"
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading"
        description="Skeleton loading state"
        code={`<TokenCell isLoading symbol="" name="" balance="" />`}
      >
        <div className="w-full max-w-md">
          <TokenCell isLoading symbol="" name="" balance="" />
        </div>
      </ComponentPreview>
    </div>
  );
}
