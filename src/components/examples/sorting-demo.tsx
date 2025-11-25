"use client"

import * as React from "react"
import { Sorting, SortingStatic, SortOption, SortDirection } from "@/components/metamask/sorting"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import { ComponentPreview } from "@/components/ComponentPreview"

const sortOptions: SortOption[] = [
  {
    id: "price_change",
    label: "Price change",
    supportsDirection: true,
    ascLabel: "Low to high",
    descLabel: "High to low",
    defaultDirection: "desc",
  },
  {
    id: "volume",
    label: "Volume",
    supportsDirection: true,
    ascLabel: "Low to high",
    descLabel: "High to low",
    defaultDirection: "desc",
  },
  {
    id: "market_cap",
    label: "Market cap",
    supportsDirection: true,
    ascLabel: "Low to high",
    descLabel: "High to low",
    defaultDirection: "desc",
  },
  {
    id: "newly_listed",
    label: "Newly listed",
    supportsDirection: true,
    ascLabel: "Old to new",
    descLabel: "New to old",
    defaultDirection: "desc",
  },
]

export function SortingDemo() {
  const [open, setOpen] = React.useState(false)
  const [sortValue, setSortValue] = React.useState("price_change")
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("desc")

  const handleApply = (val: string, dir: SortDirection) => {
    setSortValue(val)
    setSortDirection(dir)
  }

  const selectedOption = sortOptions.find(o => o.id === sortValue)

  return (
    <div className="space-y-8">
      <ComponentPreview
        title="Sort by"
        description="A sorting drawer with customizable options and directions."
        code={`<Sorting
  open={open}
  onOpenChange={setOpen}
  options={sortOptions}
  value={sortValue}
  direction={sortDirection}
  onApply={handleApply}
  trigger={
    <Button variant="ghost" className="gap-2">
      <ArrowUpDown className="h-4 w-4" />
      {selectedOption?.label || "Sort List"}
      <ChevronDown className="ml-1 h-4 w-4 text-alternative" />
    </Button>
  }
/>`}
      >
        <Sorting
          open={open}
          onOpenChange={setOpen}
          options={sortOptions}
          value={sortValue}
          direction={sortDirection}
          onApply={handleApply}
          trigger={
            <Button variant="ghost" className="gap-2">
              <ArrowUpDown className="h-4 w-4" />
              {selectedOption?.label || "Sort List"}
              <ChevronDown className="ml-1 h-4 w-4 text-alternative" />
            </Button>
          }
        />
      </ComponentPreview>

      <ComponentPreview
        title="Example 1"
        description="Visualizing the drawer content inline (Price change)."
        code={`<SortingStatic
  options={sortOptions}
  value="price_change"
  direction="desc"
  onApply={(val, dir) => console.log('Applied:', val, dir)}
  className="border border-default shadow-sm"
/>`}
      >
        <SortingStatic
          options={sortOptions}
          value="price_change"
          direction="desc"
          onApply={(val, dir) => console.log('Applied:', val, dir)}
          className="border border-default shadow-sm"
        />
      </ComponentPreview>

      <ComponentPreview
        title="Example 2"
        description="Visualizing the drawer content inline (Market cap)."
        code={`<SortingStatic
  options={sortOptions}
  value="market_cap"
  direction="asc"
  onApply={(val, dir) => console.log('Applied:', val, dir)}
  className="border border-default shadow-sm"
/>`}
      >
        <SortingStatic
          options={sortOptions}
          value="market_cap"
          direction="asc"
          onApply={(val, dir) => console.log('Applied:', val, dir)}
          className="border border-default shadow-sm"
        />
      </ComponentPreview>

      <ComponentPreview
        title="Loading"
        description="Skeleton loading state for pending data."
        code={`<SortingStatic
  options={sortOptions}
  value="price_change"
  direction="desc"
  onApply={() => {}}
  isLoading
  className="border border-default shadow-sm"
/>`}
      >
        <SortingStatic
          options={sortOptions}
          value="price_change"
          direction="desc"
          onApply={() => {}}
          isLoading
          className="border border-default shadow-sm"
        />
      </ComponentPreview>
    </div>
  )
}
