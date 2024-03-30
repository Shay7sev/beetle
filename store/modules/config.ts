import { Locale } from "@/dictionaries"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface ConfigProps {
  theme: string
  radius: number
  lang: Locale
}

const initConfigInfo: ConfigProps = {
  theme: "zinc",
  radius: 0.5,
  lang: "en-US",
}

export const useConfig = create(
  persist<any>(
    (set) => ({
      theme: "zinc",
      setTheme: (theme: string) => set({ theme: theme }),
      radius: 0.5,
      setRadius: (radius: number) => set({ radius: radius }),
      lang: "en-US",
      setLang: (lang: Locale) => set({ lang: lang }),
      resetConfigInfo: () => set(initConfigInfo),
    }),
    {
      name: "config-info",
    }
  )
)
