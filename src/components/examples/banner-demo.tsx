"use client"

import { Banner } from "@/components/ui/banner"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ComponentPreview } from "@/components/ComponentPreview"

export function BannerDemo() {
  return (
    <div className="space-y-6">
      <ComponentPreview
        title="Default Banner"
        description="A banner with an icon, title, description, and close button."
        code={`<Banner
  title="This is a title"
  description="This is two line description of the is banner!"
  onClose={() => console.log("close")}
  icon={
    <Avatar className="h-10 w-10 rounded-lg">
      <AvatarFallback className="rounded-lg bg-[var(--color-background-muted)]" />
    </Avatar>
  }
/>`}
      >
        <div className="w-full max-w-[400px]">
          <Banner
            title="This is a title"
            description="This is two line description of the is banner!"
            onClose={() => {}}
            icon={
              <Avatar className="h-10 w-10 rounded-lg">
                <AvatarFallback className="rounded-lg bg-[var(--color-background-muted)]" />
              </Avatar>
            }
          />
        </div>
      </ComponentPreview>
    </div>
  )
}
