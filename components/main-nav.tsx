"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

export function MainNav() {
  const pathname = usePathname()

  const pathList = useMemo(() => {
    return pathname.split("/").filter(Boolean)
  }, [pathname])

  console.log(pathList)

  return (
    <div className="mr-4 hidden md:flex">
      <Breadcrumb>
        <BreadcrumbList>
          {pathList.map((path, index) => {
            return [
              <BreadcrumbSeparator
                className={index === 0 ? "hidden" : ""}
                key={path + "BreadcrumbSeparator"}>
                <SlashIcon />
              </BreadcrumbSeparator>,
              <BreadcrumbItem key={path + "BreadcrumbItem"}>
                <BreadcrumbLink href="/beetle">
                  {path.toUpperCase()}
                </BreadcrumbLink>
              </BreadcrumbItem>,
            ]
          })}
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
