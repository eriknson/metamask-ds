import React from "react";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ComponentPreview";

export function InputExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Default" description="Basic text input.">
          <div className="w-full max-w-sm">
            <Input type="text" placeholder="Enter your name" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Email" description="Email input type.">
          <div className="w-full max-w-sm">
            <Input type="email" placeholder="name@example.com" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Password" description="Password input type.">
          <div className="w-full max-w-sm">
            <Input type="password" placeholder="Enter password" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Disabled" description="Disabled input state.">
          <div className="w-full max-w-sm">
            <Input disabled placeholder="Cannot type here" />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
