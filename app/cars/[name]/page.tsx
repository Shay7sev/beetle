"use client"

import { HeaderMain } from "@/components/header-main"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import useDict from "@/hooks/useDict"
import { SlashIcon } from "lucide-react"

type Props = {
  params: { name: string }
}

const CarsDetail = ({ params }: Props) => {
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
              <BreadcrumbLink href="/cars">
                {dict?.menu?.cars.toUpperCase()}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{params.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeaderMain>
      {params.name}
    </>
  )
}

export default CarsDetail
