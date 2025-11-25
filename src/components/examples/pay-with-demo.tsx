import { PayWith } from "@/components/metamask/pay-with";
import { ComponentPreview } from "@/components/ComponentPreview";

export function PayWithDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Default"
        description="Default state with mUSD token"
        code={`<PayWith
  tokenSymbol="mUSD"
  tokenIconUrl="/mUSD-icon.svg"
  balance="$2,400.35"
/>`}
      >
        <PayWith
          tokenSymbol="mUSD"
          tokenIconUrl="/mUSD-icon.svg"
          balance="$2,400.35"
        />
      </ComponentPreview>

      <ComponentPreview
        title="With Network Badge"
        description="Shows the network icon as a badge on the token icon"
        code={`<PayWith
  tokenSymbol="mUSD"
  tokenIconUrl="/mUSD-icon.svg"
  networkIconUrl="https://ethereum.org/logo.png"
  balance="$2,400.35"
/>`}
      >
        <PayWith
          tokenSymbol="mUSD"
          tokenIconUrl="/mUSD-icon.svg"
          networkIconUrl="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
          balance="$2,400.35"
        />
      </ComponentPreview>

      <ComponentPreview
        title="Different Token"
        description="Example with USDC token"
        code={`<PayWith
  tokenSymbol="USDC"
  tokenIconUrl="/usdc-icon.svg"
  balance="$1,250.00"
/>`}
      >
        <PayWith
          tokenSymbol="USDC"
          tokenIconUrl="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
          balance="$1,250.00"
        />
      </ComponentPreview>

      <ComponentPreview
        title="Hover State"
        description="Hover over to see the background change to a lighter shade"
        code={`<PayWith
  tokenSymbol="mUSD"
  tokenIconUrl="/mUSD-icon.svg"
  balance="$2,400.35"
/>`}
      >
        <div className="flex flex-col items-center gap-2">
          <PayWith
            tokenSymbol="mUSD"
            tokenIconUrl="/mUSD-icon.svg"
            balance="$2,400.35"
          />
          <p className="text-body-xs text-alternative">
            Hover: lighter background • Click & hold: scales down slightly with muted background
          </p>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Loading"
        description="Skeleton loading state"
        code={`<PayWith isLoading />`}
      >
        <PayWith isLoading />
      </ComponentPreview>
    </div>
  );
}
