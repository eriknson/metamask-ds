import { Switch } from "@/components/ui/switch";
import { ComponentPreview } from "@/components/ComponentPreview";

export function SwitchDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Default"
        description="Toggle switch for boolean states"
        code={`<div className="flex items-center gap-4">
  <Switch aria-label="Toggle airplane mode" />
  <span className="text-body-md text-default">Airplane Mode</span>
</div>`}
      >
        <div className="flex items-center gap-4">
          <Switch aria-label="Toggle airplane mode" />
          <span className="text-body-md text-default">Airplane Mode</span>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Checked"
        description="Pre-checked state"
        code={`<div className="flex items-center gap-4">
  <Switch defaultChecked aria-label="Toggle notifications" />
  <span className="text-body-md text-default">Notifications</span>
</div>`}
      >
        <div className="flex items-center gap-4">
          <Switch defaultChecked aria-label="Toggle notifications" />
          <span className="text-body-md text-default">Notifications</span>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Disabled state"
        code={`<Switch disabled aria-label="Disabled switch" />`}
      >
        <Switch disabled aria-label="Disabled switch" />
      </ComponentPreview>
    </div>
  );
}
