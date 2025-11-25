import React from "react";
import { Select } from "@/components/ui/select";
import { ComponentPreview } from "@/components/ComponentPreview";

export function SelectExample() {
  const [value, setValue] = React.useState("eth");

  const options = [
    { value: "eth", label: "Ethereum" },
    { value: "btc", label: "Bitcoin" },
    { value: "matic", label: "Polygon" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Dropdown" description="Single selection menu.">
          <div className="w-full max-w-[200px]">
            <Select
              options={options}
              value={value}
              onChange={setValue}
            />
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
