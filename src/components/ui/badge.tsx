import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-body-xs weight-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-default)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background-default)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary-default)] text-primary-inverse hover:bg-[var(--color-primary-muted)]",
        secondary:
          "bg-[var(--color-background-subsection)] text-default hover:bg-[var(--color-background-section)]",
        destructive:
          "bg-[var(--color-error-default)] text-error-inverse hover:bg-[var(--color-error-muted)]",
        outline: "border border-default text-default",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
