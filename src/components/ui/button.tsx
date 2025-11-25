import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md text-body-sm weight-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-default)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 md:w-auto",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-gray-200",
        destructive:
          "bg-[var(--color-error-default)] text-error-inverse hover:bg-[var(--color-error-muted)]",
        outline:
          "bg-[var(--color-background-section)] text-default border border-default hover:bg-[var(--color-background-subsection)]",
        secondary:
          "bg-[var(--color-background-subsection)] text-default hover:bg-[var(--color-background-section)]",
        ghost: "text-default hover:bg-[var(--color-background-muted)]",
        link: "text-primary-default underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10 p-2 aspect-square",
      },
      fullWidth: {
        true: "!w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// ButtonGroup component for side-by-side buttons
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col md:flex-row gap-2 w-full md:w-auto", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ButtonGroup.displayName = "ButtonGroup"

export { Button, buttonVariants, ButtonGroup }
