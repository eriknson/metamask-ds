import { FooterNav } from "@/components/metamask/footer-nav";
import { ComponentPreview } from "@/components/ComponentPreview";

export function FooterNavDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Mobile Navigation"
        description="Fixed bottom tab bar"
        code={`<FooterNav />`}
      >
        <div className="relative mx-auto flex h-[400px] w-full max-w-sm flex-col overflow-hidden rounded-xl bg-[var(--color-background-section)] shadow-xl">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-24 rounded-lg bg-[var(--color-background-subsection)] shadow-sm" />
              ))}
            </div>
          </div>
          <FooterNav />
        </div>
      </ComponentPreview>
    </div>
  );
}
