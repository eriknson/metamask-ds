"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Switch } from "./ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-6 w-11 shrink-0 rounded-full border border-default bg-[var(--color-background-subsection)]" />
    )
  }

  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2 text-muted">
      <Sun className="h-4 w-4 text-muted" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <Moon className="h-4 w-4 text-muted" />
    </div>
  )
}

