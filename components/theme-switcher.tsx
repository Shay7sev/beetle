"use client"

import { useConfig } from "@/store"
import * as React from "react"

export function ThemeSwitcher() {
  const config = useConfig.getState()

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = config.theme
    if (theme) {
      return document.body.classList.add(`theme-${theme}`)
    }
  }, [config])

  return null
}
