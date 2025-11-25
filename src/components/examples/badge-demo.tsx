import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/ComponentPreview";

export function BadgeDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview title="Default" description="Default badge style" code={`<Badge>Default</Badge>`}>
        <Badge>Default</Badge>
      </ComponentPreview>

      <ComponentPreview title="Secondary" description="Secondary badge style" code={`<Badge variant="secondary">Secondary</Badge>`}>
        <Badge variant="secondary">Secondary</Badge>
      </ComponentPreview>

      <ComponentPreview title="Destructive" description="Critical status badge" code={`<Badge variant="destructive">Destructive</Badge>`}>
        <Badge variant="destructive">Destructive</Badge>
      </ComponentPreview>

      <ComponentPreview title="Outline" description="Bordered badge" code={`<Badge variant="outline">Outline</Badge>`}>
        <Badge variant="outline">Outline</Badge>
      </ComponentPreview>
    </div>
  );
}
