"use client";

import { EmptyState } from "@/components/metamask/empty-state";
import { ComponentPreview } from "@/components/ComponentPreview";

function PlaceholderIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-background-subsection)]">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-alternative"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

export function EmptyStateDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Two Buttons"
        description="Empty state with primary and secondary actions"
        code={`<EmptyState
  icon={<PlaceholderIcon />}
  title="Trade perps"
  description="Bet on price changes for crypto and stocks."
  primaryAction={{
    label: "Add funds",
    onClick: () => console.log("Add funds"),
  }}
  secondaryAction={{
    label: "Learn more",
    onClick: () => console.log("Learn more"),
  }}
/>`}
      >
        <div className="w-full max-w-sm">
          <EmptyState
            icon={<PlaceholderIcon />}
            title="Trade perps"
            description="Bet on price changes for crypto and stocks."
            primaryAction={{
              label: "Add funds",
              onClick: () => console.log("Add funds"),
            }}
            secondaryAction={{
              label: "Learn more",
              onClick: () => console.log("Learn more"),
            }}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Single Button"
        description="Empty state with only a primary action"
        code={`<EmptyState
  icon={<PlaceholderIcon />}
  title="No tokens yet"
  description="Start by adding some tokens to your wallet."
  primaryAction={{
    label: "Add tokens",
    onClick: () => console.log("Add tokens"),
  }}
/>`}
      >
        <div className="w-full max-w-sm">
          <EmptyState
            icon={<PlaceholderIcon />}
            title="No tokens yet"
            description="Start by adding some tokens to your wallet."
            primaryAction={{
              label: "Add tokens",
              onClick: () => console.log("Add tokens"),
            }}
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="No Actions"
        description="Empty state with no action buttons"
        code={`<EmptyState
  icon={<PlaceholderIcon />}
  title="All caught up!"
  description="You have no pending transactions."
/>`}
      >
        <div className="w-full max-w-sm">
          <EmptyState
            icon={<PlaceholderIcon />}
            title="All caught up!"
            description="You have no pending transactions."
          />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Minimal"
        description="Empty state with just title and description"
        code={`<EmptyState
  title="Nothing here"
  description="This section is empty."
/>`}
      >
        <div className="w-full max-w-sm">
          <EmptyState
            title="Nothing here"
            description="This section is empty."
          />
        </div>
      </ComponentPreview>
    </div>
  );
}
