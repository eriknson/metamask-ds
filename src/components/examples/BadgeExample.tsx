import React from "react";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/ComponentPreview";

export function BadgeExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview title="Variants" description="Status indicators.">
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
