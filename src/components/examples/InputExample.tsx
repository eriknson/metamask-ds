import React from "react";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/ComponentPreview";
import { Search, Mail } from "lucide-react";

export function InputExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Default" description="Basic text input.">
          <div className="w-full max-w-sm">
            <Input type="text" placeholder="Enter your name" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="With Label" description="Input with a label.">
          <div className="w-full max-w-sm">
            <Input label="Email" type="email" placeholder="name@example.com" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="With Icon" description="Input with a left icon.">
          <div className="w-full max-w-sm space-y-4">
            <Input icon={<Search size={16} />} placeholder="Search tokens..." />
            <Input icon={<Mail size={16} />} placeholder="Email address" />
          </div>
        </ComponentPreview>

        <ComponentPreview title="Error State" description="Input with validation error.">
          <div className="w-full max-w-sm">
            <Input label="Password" type="password" error="Password must be at least 8 characters" defaultValue="123" />
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
