import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/ComponentPreview";

export function AvatarExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Image & Fallback" description="Handles images and initials.">
          <div className="flex items-center gap-6">
            <Avatar>
              <AvatarImage src="/mUSD-icon.svg" />
              <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
            </Avatar>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
            </Avatar>
          </div>
        </ComponentPreview>
        <ComponentPreview title="With Network Badge" description="Avatar with network badge in bottom right corner">
          <div className="flex items-center gap-6">
            <Avatar showNetworkBadge>
              <AvatarImage src="/mUSD-icon.svg" />
              <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
            </Avatar>
            <Avatar showNetworkBadge>
              <AvatarImage src="" />
              <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
            </Avatar>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
