import React from "react";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ComponentPreview";

export function ButtonExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ComponentPreview title="Variants" description="Different visual styles.">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview title="Sizes" description="Small, default, and large.">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">Hi</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview title="States" description="Loading and disabled states.">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button isLoading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </ComponentPreview>

        <ComponentPreview title="Full Width" description="Spans the full container width.">
          <Button fullWidth>Full Width Button</Button>
        </ComponentPreview>
      </div>

      <div className="space-y-3 text-body-sm text-alternative">
        <h3 className="text-body-md weight-semibold text-default">Props</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li><span className="weight-semibold">variant</span>: "primary" | "secondary" | "outline" | "ghost" | "destructive"</li>
          <li><span className="weight-semibold">size</span>: "sm" | "default" | "lg" | "icon"</li>
          <li><span className="weight-semibold">fullWidth</span>: boolean</li>
          <li><span className="weight-semibold">isLoading</span>: boolean</li>
        </ul>
      </div>
    </div>
  );
}
