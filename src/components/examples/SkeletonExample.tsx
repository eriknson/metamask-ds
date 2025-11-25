import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ComponentPreview } from "@/components/ComponentPreview";

export function SkeletonExample() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <ComponentPreview title="Loading State" description="Placeholder for content.">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
