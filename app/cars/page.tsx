"use client"

import { HeaderMain } from "@/components/header-main"
import { Button } from "@/components/ui/button"
import NextLink from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import useDict from "@/hooks/useDict"

const Cars = () => {
  const { dict } = useDict()

  return (
    <>
      <HeaderMain>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                {dict?.title.toUpperCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{dict?.menu?.cars.toUpperCase()}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeaderMain>
      <div className="flex container flex-col items-center justify-between p-24">
        <Button color="primary" size="sm">
          <NextLink href={`/cars/beetle`} className="text-ds-primary-active">
            beetle
          </NextLink>
        </Button>
      </div>
    </>
  )
}

export default Cars
