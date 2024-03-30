"use client"

import { cn } from "@/lib/utils"

import { ResizablePanel } from "./ui/resizable"
import { useState } from "react"
import { Separator } from "./ui/separator"
import { Nav } from "./nav"
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

interface SiteSiderProps {
  defaultSize?: number
  defaultCollapsed?: boolean
  navCollapsedSize?: number
}

export function SiteSider({
  defaultSize = 20,
  defaultCollapsed = false,
  navCollapsedSize = 4,
}: SiteSiderProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  return (
    <ResizablePanel
      defaultSize={defaultSize}
      collapsedSize={navCollapsedSize}
      collapsible={true}
      minSize={20}
      maxSize={20}
      onCollapse={() => {
        setIsCollapsed(true)
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          true
        )}`
      }}
      onExpand={() => {
        setIsCollapsed(false)
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          false
        )}`
      }}
      className={cn(
        "hidden md:block",
        isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
      )}>
      <div
        className={cn(
          "flex h-14 items-center justify-center",
          isCollapsed ? "" : "px-2"
        )}>
        1
      </div>
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Inbox",
            label: "128",
            icon: Inbox,
            variant: "default",
          },
          {
            title: "Drafts",
            label: "9",
            icon: File,
            variant: "ghost",
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
          },
          {
            title: "Junk",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
          },
          {
            title: "Trash",
            label: "",
            icon: Trash2,
            variant: "ghost",
          },
          {
            title: "Archive",
            label: "",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
      <Separator />
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Social",
            label: "972",
            icon: Users2,
            variant: "ghost",
          },
          {
            title: "Updates",
            label: "342",
            icon: AlertCircle,
            variant: "ghost",
          },
          {
            title: "Forums",
            label: "128",
            icon: MessagesSquare,
            variant: "ghost",
          },
          {
            title: "Shopping",
            label: "8",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Promotions",
            label: "21",
            icon: Archive,
            variant: "ghost",
          },
        ]}
      />
    </ResizablePanel>
  )
}
