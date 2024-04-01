"use client"

import { cn } from "@/lib/utils"
import { useConfig } from "@/store"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const { theme, radius } = useConfig()

  return (
    <div
      className={cn(`theme-${defaultTheme || theme}`, "w-full", className)}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : radius}rem`,
        } as React.CSSProperties
      }
      suppressHydrationWarning>
      {children}
    </div>
  )
}
