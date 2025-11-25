import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ComponentPreview";

export function InputDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Default"
        description="Standard text input"
        code={`<Input type="email" placeholder="Email" />`}
      >
        <div className="w-full max-w-sm">
          <Input type="email" placeholder="Email" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Disabled"
        description="Non-editable input state"
        code={`<Input disabled type="email" placeholder="Disabled input" />`}
      >
        <div className="w-full max-w-sm">
          <Input disabled type="email" placeholder="Disabled input" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="File Input"
        description="Input for file selection"
        code={`<Input type="file" />`}
      >
        <div className="w-full max-w-sm">
          <Input type="file" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Button"
        description="Input with adjacent button"
        code={`<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`}
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </ComponentPreview>
    </div>
  );
}
