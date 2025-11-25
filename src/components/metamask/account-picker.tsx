import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface AccountPickerProps extends React.HTMLAttributes<HTMLButtonElement> {
  address?: string;
  name?: string;
  avatarUrl?: string;
  status?: "connected" | "disconnected";
  onCopy?: () => void;
  isLoading?: boolean;
}

export function AccountPicker({
  address,
  name,
  avatarUrl,
  status = "connected",
  onCopy,
  isLoading = false,
  className,
  ...props
}: AccountPickerProps) {
  if (isLoading) {
    return (
      <div
        className={cn(
          "flex items-center gap-3 rounded-full bg-[var(--color-background-subsection)] px-3 py-2 pr-4",
          className
        )}
        aria-busy="true"
      >
        <Skeleton className="h-8 w-8 rounded-[16px]" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
    );
  }

  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-full bg-[var(--color-background-subsection)] px-3 py-2 pr-4 transition-colors hover:bg-[var(--color-background-section)]",
        status === "disconnected" && "opacity-70",
        className
      )}
      {...props}
    >
      <Avatar className="h-8 w-8 flex-shrink-0 rounded-[16px]">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback className="rounded-[16px] bg-[var(--color-background-section)] text-default" />
      </Avatar>

      <div className="flex flex-col items-start text-body-sm">
        <span className="text-default weight-semibold">
          {name || "Account 1"}
        </span>
      </div>

      <ChevronDown size={16} className="ml-auto flex-shrink-0 text-muted" />
    </button>
  );
}
