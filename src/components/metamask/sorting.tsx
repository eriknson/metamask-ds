"use client"

import * as React from "react"
import { X, ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"

export type SortDirection = "asc" | "desc"

export interface SortOption {
  id: string
  label: string
  supportsDirection?: boolean
  defaultDirection?: SortDirection
  ascLabel?: string // e.g. "Low to high"
  descLabel?: string // e.g. "High to low"
}

interface SortingProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  options: SortOption[]
  value: string // id of the selected option
  direction?: SortDirection
  onApply: (value: string, direction: SortDirection) => void
  trigger?: React.ReactNode
  isLoading?: boolean
}

// Internal component for the list of options and apply button
interface SortingListProps {
  options: SortOption[]
  selectedId: string
  selectedDirection: SortDirection
  onSelect: (option: SortOption) => void
  onApply: () => void
  isLoading?: boolean
}

function SortingList({
  options,
  selectedId,
  selectedDirection,
  onSelect,
  onApply,
  isLoading = false,
}: SortingListProps) {
  const getDirectionLabel = (option: SortOption, dir: SortDirection) => {
    if (dir === "asc") return option.ascLabel || "Low to high"
    return option.descLabel || "High to low"
  }

  if (isLoading) {
    const placeholderCount = options.length || 4
    return (
      <>
        <div className="space-y-2 p-4">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div
              key={`sorting-skeleton-${index}`}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3.5"
            >
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>

        <div className="mt-auto px-4 pb-8 pt-2">
          <Skeleton className="h-11 w-full rounded-full" />
        </div>
      </>
    )
  }

  return (
    <>
      <div className="space-y-2 p-4">
        {options.map((option) => {
          const isSelected = selectedId === option.id
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-body-md transition-colors",
                isSelected
                  ? "bg-[var(--color-background-subsection)] text-default"
                  : "bg-transparent text-default hover:bg-[var(--color-background-subsection)]"
              )}
            >
              <span
                className={cn(
                  "weight-medium",
                  isSelected ? "text-default" : "text-alternative"
                )}
              >
                {option.label}
              </span>
              {isSelected && option.supportsDirection && (
                <div className="flex items-center gap-1.5 text-body-sm text-alternative">
                  <span>{getDirectionLabel(option, selectedDirection)}</span>
                  {selectedDirection === "desc" ? (
                    <ArrowDown className="h-4 w-4" />
                  ) : (
                    <ArrowUp className="h-4 w-4" />
                  )}
                </div>
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-auto px-4 pb-8 pt-2">
        <Button
          onClick={onApply}
          fullWidth
        >
          Apply
        </Button>
      </div>
    </>
  )
}

export function Sorting({
  open,
  onOpenChange,
  options,
  value,
  direction = "desc",
  onApply,
  trigger,
  isLoading = false,
}: SortingProps) {
  const [selectedId, setSelectedId] = React.useState(value)
  const [selectedDirection, setSelectedDirection] = React.useState<SortDirection>(direction)

  // Sync internal state when props change
  React.useEffect(() => {
    setSelectedId(value)
    setSelectedDirection(direction)
  }, [value, direction, open])

  const handleOptionClick = (option: SortOption) => {
    if (selectedId === option.id && option.supportsDirection) {
      // Toggle direction if already selected
      setSelectedDirection(prev => (prev === "asc" ? "desc" : "asc"))
    } else {
      // Select new option
      setSelectedId(option.id)
      if (option.supportsDirection) {
        setSelectedDirection(option.defaultDirection || "desc")
      }
    }
  }

  const handleApply = () => {
    if (isLoading) {
      return
    }
    onApply(selectedId, selectedDirection)
    if (onOpenChange) {
        onOpenChange(false)
    }
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent className="mx-auto max-w-[375px] rounded-t-[24px] bg-[var(--color-background-default)]">
        <DrawerHeader className="relative flex items-center justify-between px-4 pb-2 pt-2">
          <div className="w-8" />
          <DrawerTitle className="text-center text-body-md weight-semibold">
            Sort by
          </DrawerTitle>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full p-0 text-default hover:bg-[var(--color-background-subsection)]"
            >
              <X className="h-9 w-9" />
              <span className="sr-only">Close</span>
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <SortingList 
          options={options}
          selectedId={selectedId}
          selectedDirection={selectedDirection}
          onSelect={handleOptionClick}
          onApply={handleApply}
          isLoading={isLoading}
        />
      </DrawerContent>
    </Drawer>
  )
}

// Static version for demos
export function SortingStatic({
  options,
  value,
  direction = "desc",
  onApply,
  className,
  isLoading = false,
}: Omit<SortingProps, "open" | "onOpenChange" | "trigger"> & { className?: string }) {
  const [selectedId, setSelectedId] = React.useState(value)
  const [selectedDirection, setSelectedDirection] = React.useState<SortDirection>(direction)

  React.useEffect(() => {
    setSelectedId(value)
    setSelectedDirection(direction)
  }, [value, direction])

  const handleOptionClick = (option: SortOption) => {
    if (selectedId === option.id && option.supportsDirection) {
      setSelectedDirection(prev => (prev === "asc" ? "desc" : "asc"))
    } else {
      setSelectedId(option.id)
      if (option.supportsDirection) {
        setSelectedDirection(option.defaultDirection || "desc")
      }
    }
  }

  const handleApply = () => {
    if (isLoading) {
      return
    }
    onApply(selectedId, selectedDirection)
  }

  return (
    <div
      className={cn(
        "flex w-full max-w-[375px] flex-col overflow-hidden rounded-t-[24px] bg-[var(--color-background-default)] text-default",
        className
      )}
    >
      <div className="relative flex items-center justify-center px-4 pb-2 pt-6">
        <div className="text-center text-body-md weight-semibold">Sort by</div>
      </div>

      <SortingList  
        options={options}
        selectedId={selectedId}
        selectedDirection={selectedDirection}
        onSelect={handleOptionClick}
        onApply={handleApply}
        isLoading={isLoading}
      />
    </div>
  )
}
