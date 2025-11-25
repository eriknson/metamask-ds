import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { Mail, Loader2, Trash } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview title="Primary" description="The default button style" code={`<Button>Default</Button>`}>
        <Button>Default</Button>
      </ComponentPreview>

      <ComponentPreview title="Secondary" description="Secondary action button" code={`<Button variant="secondary">Secondary</Button>`}>
        <Button variant="secondary">Secondary</Button>
      </ComponentPreview>

      <ComponentPreview title="Destructive" description="For dangerous actions" code={`<Button variant="destructive">Destructive</Button>`}>
        <Button variant="destructive">Destructive</Button>
      </ComponentPreview>

      <ComponentPreview title="Outline" description="Bordered button" code={`<Button variant="outline">Outline</Button>`}>
        <Button variant="outline">Outline</Button>
      </ComponentPreview>

      <ComponentPreview title="Ghost" description="Transparent button" code={`<Button variant="ghost">Ghost</Button>`}>
        <Button variant="ghost">Ghost</Button>
      </ComponentPreview>

      <ComponentPreview title="Link" description="Button that looks like a link" code={`<Button variant="link">Link</Button>`}>
        <Button variant="link">Link</Button>
      </ComponentPreview>

      <ComponentPreview title="Small Size" description="Compact button" code={`<Button size="sm">Small</Button>`}>
        <Button size="sm">Small</Button>
      </ComponentPreview>

      <ComponentPreview title="Large Size" description="Prominent button" code={`<Button size="lg">Large</Button>`}>
        <Button size="lg">Large</Button>
      </ComponentPreview>

      <ComponentPreview title="Icon Only" description="Button with icon only" code={`<Button size="icon"><Mail /></Button>`}>
        <Button size="icon"><Mail /></Button>
      </ComponentPreview>

      <ComponentPreview title="Disabled" description="Non-interactive state" code={`<Button disabled>Disabled</Button>`}>
        <Button disabled>Disabled</Button>
      </ComponentPreview>

      <ComponentPreview title="Loading" description="Button with loading spinner" code={`<Button disabled>
  <Loader2 className="animate-spin" />
  Please wait
</Button>`}>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Please wait
        </Button>
      </ComponentPreview>

      <ComponentPreview title="With Icon" description="Button with text and icon" code={`<Button>
  <Mail /> Login with Email
</Button>`}>
        <Button>
          <Mail /> Login with Email
        </Button>
      </ComponentPreview>
    </div>
  );
}
