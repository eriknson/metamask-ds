import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface EmptyStateAction {
  label: string;
  onClick?: () => void;
  variant?: "default" | "secondary";
}

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon or image to display at the top */
  icon?: React.ReactNode;
  /** Main title text */
  title: string;
  /** Description text below the title */
  description?: string;
  /** Primary action button */
  primaryAction?: EmptyStateAction;
  /** Secondary action button */
  secondaryAction?: EmptyStateAction;
}

export function EmptyState({
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-2xl bg-[var(--color-background-section)] p-6 text-center",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4">{icon}</div>}

      <h3 className="text-heading-md weight-bold text-default">{title}</h3>

      {description && (
        <p className="mt-2 text-body-md text-alternative">{description}</p>
      )}

      {(primaryAction || secondaryAction) && (
        <div className="mt-6 flex w-full flex-col gap-3">
          {primaryAction && (
            <Button
              variant="default"
              fullWidth
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button
              variant="secondary"
              fullWidth
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
