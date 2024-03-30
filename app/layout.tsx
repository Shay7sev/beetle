"use client"

import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import "./themes.css"
import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "next-themes"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { SiteSider } from "@/components/site-sider"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMemo } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const windowScene = useMemo(() => {
    return window.innerWidth > 1024 ? "pc" : "phone"
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ThemeWrapper
          // defaultTheme="zinc"
          >
            <TooltipProvider delayDuration={0}>
              <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                  document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                    sizes
                  )}`
                }}
                className="h-full max-h-screen items-stretch">
                <SiteSider
                  defaultSize={windowScene === "pc" ? 20 : 4}
                  defaultCollapsed={windowScene === "pc" ? false : true}
                  navCollapsedSize={4}></SiteSider>
                <ResizableHandle withHandle className="hidden md:flex" />
                <ResizablePanel
                  defaultSize={80}
                  minSize={30}
                  className="overflow-auto">
                  <div vaul-drawer-wrapper="">
                    <div className="relative flex flex-col bg-background">
                      <SiteHeader />
                      <Separator />
                      <ScrollArea className="h-[calc(100vh-6rem)]">
                        {children}
                      </ScrollArea>
                      {/* <main className="flex-1"></main> */}
                      <SiteFooter />
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </TooltipProvider>
          </ThemeWrapper>
          <TailwindIndicator />
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  )
}
