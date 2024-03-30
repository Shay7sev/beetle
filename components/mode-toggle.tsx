"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useCallback } from "react"
import "./styles/theme.css"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const onChange = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }, [theme, setTheme])

  const toggleTheme = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      const x = event.clientX
      const y = event.clientY
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      )

      // @ts-ignore
      const transition = document.startViewTransition(() => {
        onChange()
      })

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        document.documentElement.animate(
          {
            clipPath: theme === "dark" ? clipPath.reverse() : clipPath,
          },
          {
            duration: 500,
            easing: "ease-in",
            pseudoElement:
              theme === "dark"
                ? "::view-transition-old(root)"
                : "::view-transition-new(root)",
          }
        )
      })
    },
    [theme, onChange]
  )

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
