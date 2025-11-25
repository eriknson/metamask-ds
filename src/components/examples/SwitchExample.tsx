import React from "react";
import { Switch } from "@/components/ui/switch";
import { ComponentPreview } from "@/components/ComponentPreview";

export function SwitchExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Toggle" description="Boolean input state.">
          <div className="flex items-center gap-4">
            <Switch checked={checked} onCheckedChange={setChecked} />
            <span className="text-body-md text-default">
              {checked ? "On" : "Off"}
            </span>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
