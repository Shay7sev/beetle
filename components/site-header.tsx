import { CheckIcon, Paintbrush } from "lucide-react"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Button } from "./ui/button"
import { ResetIcon } from "@radix-ui/react-icons"
import { Label } from "./ui/label"
import { cn } from "@/lib/utils"
import { Skeleton } from "./ui/skeleton"
import { useEffect, useState } from "react"
import { useConfig } from "@/store"
import { useTheme } from "next-themes"
import { ThemeWrapper } from "./theme-wrapper"
import { themes } from "@/themes"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import useDict from "@/hooks/useDict"
import { Dictionary } from "@/dictionaries"

export function SiteHeader() {
  const { dict } = useDict()
  return (
    <div className="flex items-center justify-between pl-2">
      <MobileNav />
      <header
        className="sticky top-0 z-50 w-full flex-row-reverse justify-between border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-14 flex items-center"
        id="header_main">
        <div className="px-2 flex  max-w-screen-2xl items-center">
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                  <Paintbrush className="mr-2 h-4 w-4" />
                  {dict?.header?.customize}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-6 pt-0">
                <Customizer dict={dict} />
              </DrawerContent>
            </Drawer>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="hidden md:flex">
                  <Paintbrush className="mr-2 h-4 w-4" />
                  {dict?.header?.customize}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="center"
                className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950">
                <Customizer dict={dict} />
              </PopoverContent>
            </Popover>
            <div className="w-full flex-1 md:w-auto md:flex-none">
              CommandMenu
            </div>
            <ModeToggle />
          </div>
        </div>
      </header>
    </div>
  )
}

function Customizer({ dict }: { dict?: Dictionary }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme: mode } = useTheme()
  const {
    theme: configTheme,
    resetConfigInfo,
    setTheme,
    radius: configRadius,
    setRadius,
  } = useConfig()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeWrapper
      defaultTheme={configTheme}
      className="flex flex-col space-y-4 md:space-y-6">
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            {dict?.header?.customize}
          </div>
          <div className="text-xs text-muted-foreground">
            {dict?.header?.customizeDesc}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            resetConfigInfo()
          }}>
          <ResetIcon />
          <span className="sr-only"> {dict?.header?.customizeReset}</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              const isActive = configTheme === theme.name

              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setTheme(theme.name)
                  }}
                  className={cn(
                    "justify-start",
                    isActive && "border-2 border-primary"
                  )}
                  style={
                    {
                      "--theme-primary": `hsl(${
                        theme?.activeColor[mode === "dark" ? "dark" : "light"]
                      })`,
                    } as React.CSSProperties
                  }>
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                    )}>
                    {isActive && <CheckIcon className="h-4 w-4 text-white" />}
                  </span>
                  {theme.label}
                </Button>
              ) : (
                <Skeleton className="h-8 w-full" key={theme.name} />
              )
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
              return (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={value}
                  onClick={() => {
                    setRadius(parseFloat(value))
                  }}
                  className={cn(
                    configRadius === parseFloat(value) &&
                      "border-2 border-primary"
                  )}>
                  {value}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </ThemeWrapper>
  )
}
