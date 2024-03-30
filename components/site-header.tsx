import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"

export function SiteHeader() {
  return (
    <div className="flex items-center justify-between pl-2">
      <MobileNav />
      <header
        className="sticky top-0 z-50 w-full flex-row-reverse justify-between border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-14 flex items-center"
        id="header_main">
        <div className="px-2 flex  max-w-screen-2xl items-center">
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
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
