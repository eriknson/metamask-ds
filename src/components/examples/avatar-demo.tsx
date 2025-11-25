import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ComponentPreview } from "@/components/ComponentPreview";

export function AvatarDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Image"
        description="Avatar displaying an image"
        code={`<Avatar>
  <AvatarImage src="/mUSD-icon.svg" alt="mUSD" />
  <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="/mUSD-icon.svg" alt="mUSD" />
          <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
        </Avatar>
      </ComponentPreview>

      <ComponentPreview
        title="Fallback"
        description="Avatar showing fallback when image fails"
        code={`<Avatar>
  <AvatarImage src="" alt="Broken" />
  <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
</Avatar>`}
      >
        <Avatar>
          <AvatarImage src="" alt="Broken" />
          <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
        </Avatar>
      </ComponentPreview>

      <ComponentPreview
        title="With Network Badge"
        description="Avatar with network badge in bottom right corner"
        code={`<Avatar showNetworkBadge>
  <AvatarImage src="/mUSD-icon.svg" alt="mUSD" />
  <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
</Avatar>`}
      >
        <Avatar showNetworkBadge>
          <AvatarImage src="/mUSD-icon.svg" alt="mUSD" />
          <AvatarFallback className="bg-[var(--color-background-subsection)] text-default" />
        </Avatar>
      </ComponentPreview>
    </div>
  );
}
