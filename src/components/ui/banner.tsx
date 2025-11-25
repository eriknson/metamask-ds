"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  onClose?: () => void
  icon?: React.ReactNode
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, title, description, onClose, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full items-start gap-4 rounded-2xl bg-[var(--color-background-section)] p-4 text-default border border-default",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1 space-y-1 pt-1">
          <div className="text-body-md font-medium leading-none tracking-tight">{title}</div>
          <p className="text-sm text-muted-foreground text-alternative leading-normal">{description}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    )
  }
)
Banner.displayName = "Banner"

export { Banner }
